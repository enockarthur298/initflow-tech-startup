import { memo } from 'react';
import { IconButton } from '~/components/ui/IconButton';
import { Link } from '@remix-run/react';

interface SettingsButtonProps {
  onClick?: () => void;
  asLink?: boolean;
}

export const SettingsButton = memo(({ onClick, asLink = false }: SettingsButtonProps) => {
  if (asLink) {
    return (
      <Link to="/settings" className="block" title="Settings">
        <IconButton
          as="div"
          icon="i-ph:gear"
          size="xl"
          className="text-[#666] hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-item-backgroundActive/10 transition-colors"
        />
      </Link>
    );
  }

  return (
    <IconButton
      onClick={onClick}
      icon="i-ph:gear"
      size="xl"
      title="Settings"
      className="text-[#666] hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-item-backgroundActive/10 transition-colors"
    />
  );
});
