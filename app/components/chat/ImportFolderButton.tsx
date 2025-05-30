import React, { useState } from 'react';
import type { Message } from 'ai';
import { toast } from 'react-toastify';
import { MAX_FILES, isBinaryFile, shouldIncludeFile } from '~/utils/fileUtils';
import { createChatFromFolder } from '~/utils/folderImport';
import { logStore } from '~/lib/stores/logs';
import { IconButton } from '~/components/ui/IconButton';
import { classNames } from '~/utils/classNames';

interface ImportFolderButtonProps {
  className?: string;
  importChat?: (description: string, messages: Message[]) => Promise<void>;
  asIcon?: boolean;
}

export const ImportFolderButton: React.FC<ImportFolderButtonProps> = ({ 
  className, 
  importChat, 
  asIcon = false 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const allFiles = Array.from(e.target.files || []);

    const filteredFiles = allFiles.filter((file) => {
      const path = file.webkitRelativePath.split('/').slice(1).join('/');
      const include = shouldIncludeFile(path);

      return include;
    });

    if (filteredFiles.length === 0) {
      const error = new Error('No valid files found');
      logStore.logError('File import failed - no valid files', error, { folderName: 'Unknown Folder' });
      toast.error('No files found in the selected folder');

      return;
    }

    if (filteredFiles.length > MAX_FILES) {
      const error = new Error(`Too many files: ${filteredFiles.length}`);
      logStore.logError('File import failed - too many files', error, {
        fileCount: filteredFiles.length,
        maxFiles: MAX_FILES,
      });
      toast.error(
        `This folder contains ${filteredFiles.length.toLocaleString()} files. This product is not yet optimized for very large projects. Please select a folder with fewer than ${MAX_FILES.toLocaleString()} files.`,
      );

      return;
    }

    const folderName = filteredFiles[0]?.webkitRelativePath.split('/')[0] || 'Unknown Folder';
    setIsLoading(true);

    const loadingToast = toast.loading(`Importing ${folderName}...`);

    try {
      const fileChecks = await Promise.all(
        filteredFiles.map(async (file) => ({
          file,
          isBinary: await isBinaryFile(file),
        })),
      );

      const textFiles = fileChecks.filter((f) => !f.isBinary).map((f) => f.file);
      const binaryFilePaths = fileChecks
        .filter((f) => f.isBinary)
        .map((f) => f.file.webkitRelativePath.split('/').slice(1).join('/'));

      if (textFiles.length === 0) {
        const error = new Error('No text files found');
        logStore.logError('File import failed - no text files', error, { folderName });
        toast.error('No text files found in the selected folder');

        return;
      }

      if (binaryFilePaths.length > 0) {
        logStore.logWarning(`Skipping binary files during import`, {
          folderName,
          binaryCount: binaryFilePaths.length,
        });
        toast.info(`Skipping ${binaryFilePaths.length} binary files`);
      }

      const messages = await createChatFromFolder(textFiles, binaryFilePaths, folderName);

      if (importChat) {
        await importChat(folderName, [...messages]);
      }

      logStore.logSystem('Folder imported successfully', {
        folderName,
        textFileCount: textFiles.length,
        binaryFileCount: binaryFilePaths.length,
      });
      toast.success('Folder imported successfully');
    } catch (error) {
      logStore.logError('Failed to import folder', error, { folderName });
      console.error('Failed to import folder:', error);
      toast.error('Failed to import folder');
    } finally {
      setIsLoading(false);
      toast.dismiss(loadingToast);
      e.target.value = ''; // Reset file input
    }
  };

  if (asIcon) {
    return (
      <IconButton 
        title="Import Folder" 
        className={classNames('transition-all', className)} 
        disabled={isLoading}
      >
        <div className="i-ph:folder-notch-open text-xl"></div>
        <input
          type="file"
          className="hidden"
          // @ts-ignore - webkitdirectory is not in the type definition
          webkitdirectory=""
          onChange={handleFileChange}
          disabled={isLoading}
        />
      </IconButton>
    );
  }

  return (
    <div className={classNames('w-full', className)}>
      <label className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-transparent border-2 border-dashed rounded-lg cursor-pointer border-bolt-elements-item-border hover:bg-bolt-elements-item-backgroundHover">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="i-ph:folder-notch-open text-4xl mb-2 text-bolt-elements-textTertiary"></div>
          <p className="mb-2 text-sm text-bolt-elements-textTertiary">
            <span className="font-semibold">Click to upload a folder</span>
          </p>
          <p className="text-xs text-bolt-elements-textTertiary">
            Or drag and drop a folder here
          </p>
        </div>
        <input
          type="file"
          className="hidden"
          // @ts-ignore - webkitdirectory is not in the type definition
          webkitdirectory=""
          onChange={handleFileChange}
          disabled={isLoading}
        />
      </label>
    </div>
  );
};
