import * as RadixDialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { useState, type ReactElement } from 'react';
import { classNames } from '~/utils/classNames';
import { DialogTitle, dialogVariants, dialogBackdropVariants } from '~/components/ui/Dialog';
import { IconButton } from '~/components/ui/IconButton';
import styles from './Settings.module.scss';
import { useSettings } from '~/lib/hooks/useSettings';
import FeaturesTab from './features/FeaturesTab';
import DebugTab from './debug/DebugTab';
import EventLogsTab from './event-logs/EventLogsTab';
import ConnectionsTab from './connections/ConnectionsTab';

interface SettingsProps {
  open: boolean;
  onClose: () => void;
}

type TabType = 'features' | 'debug' | 'event-logs' | 'connection';

export const SettingsWindow = ({ open, onClose }: SettingsProps) => {
  const { debug, eventLogs } = useSettings();
  const [activeTab, setActiveTab] = useState<TabType>('connection');

  const tabs: { id: TabType; label: string; icon: string; component?: ReactElement }[] = [
    { id: 'connection', label: 'Connection', icon: 'i-ph:link', component: <ConnectionsTab /> },
    { id: 'features', label: 'Features', icon: 'i-ph:star', component: <FeaturesTab /> },
    ...(debug
      ? [
          {
            id: 'debug' as TabType,
            label: 'Debug Tab',
            icon: 'i-ph:bug',
            component: <DebugTab />,
          },
        ]
      : []),
    ...(eventLogs
      ? [
          {
            id: 'event-logs' as TabType,
            label: 'Event Logs',
            icon: 'i-ph:list-bullets',
            component: <EventLogsTab />,
          },
        ]
      : []),
  ];

  return (
    <RadixDialog.Root open={open}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay asChild onClick={onClose}>
          <motion.div
            className="bg-black/50 fixed inset-0 z-max backdrop-blur-sm"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dialogBackdropVariants}
          />
        </RadixDialog.Overlay>
        <RadixDialog.Content aria-describedby={undefined} asChild>
          <motion.div
            className="fixed top-[50%] left-[50%] z-max h-[90vh] w-[95vw] max-w-[1200px] translate-x-[-50%] translate-y-[-50%] border border-bolt-elements-borderColor rounded-lg shadow-lg focus:outline-none overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dialogVariants}
          >
            <div className="flex h-full">
              <div
                className={classNames(
                  'w-56 border-r border-bolt-elements-borderColor bg-bolt-elements-background-depth-1 p-6 flex flex-col justify-between',
                  styles['settings-tabs'],
                )}
              >
                <DialogTitle className="flex-shrink-0 text-lg font-semibold text-bolt-elements-textPrimary mb-2">
                  Settings
                </DialogTitle>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={classNames(activeTab === tab.id ? styles.active : '')}
                  >
                    <div className={tab.icon} />
                    {tab.label}
                  </button>
                ))}
                <div className="mt-auto"></div>
              </div>

              <div className="flex-1 flex flex-col p-8 pt-10 bg-bolt-elements-background-depth-2">
                <div className="flex-1 overflow-y-auto">{tabs.find((tab) => tab.id === activeTab)?.component}</div>
              </div>
            </div>
            <RadixDialog.Close asChild onClick={onClose}>
              <IconButton icon="i-ph:x" className="absolute top-[10px] right-[10px]" />
            </RadixDialog.Close>
          </motion.div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
