import { json } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Header } from '~/components/header/Header';
import BackgroundRays from '~/components/ui/BackgroundRays';
import { useState } from 'react';
import { classNames } from '~/utils/classNames';
import { useSettings } from '~/lib/hooks/useSettings';
import FeaturesTab from '~/components/settings/features/FeaturesTab';
import DebugTab from '~/components/settings/debug/DebugTab';
import EventLogsTab from '~/components/settings/event-logs/EventLogsTab';
import ConnectionsTab from '~/components/settings/connections/ConnectionsTab';
import { Link, useLocation } from '@remix-run/react';

type TabType = 'features' | 'debug' | 'event-logs' | 'connection';

export const meta = () => ({
  title: 'Settings | InitFlow',
  description: 'Configure your InitFlow settings'
});

export const loader = () => json({});

export default function SettingsPage() {
  const { debug, eventLogs } = useSettings();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [activeTab, setActiveTab] = useState<TabType>(
    (searchParams.get('tab') as TabType) || 'connection'
  );

  const tabs: { id: TabType; label: string; icon: string; component: React.ReactNode }[] = [
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

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // Update URL without page reload
    window.history.pushState({}, '', `?tab=${tab}`);
  };

  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <BackgroundRays />
      <Header />
      <ClientOnly>
        {() => (
          <DndProvider backend={HTML5Backend}>
            <div className="flex-1 flex overflow-hidden">
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                <div className="flex-1 flex overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-64 border-r border-bolt-elements-borderColor bg-bolt-elements-background-depth-1 p-6 flex flex-col">
                    <h1 className="text-2xl font-bold text-bolt-elements-textPrimary mb-8">Settings</h1>
                    <nav className="space-y-1">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => handleTabChange(tab.id)}
                          className={classNames(
                            'w-full flex items-center px-4 py-2 text-sm font-medium rounded-md',
                            activeTab === tab.id
                              ? 'bg-bolt-elements-background-depth-3 text-bolt-elements-textPrimary'
                              : 'text-bolt-elements-textSecondary hover:bg-bolt-elements-background-depth-2 hover:text-bolt-elements-textPrimary'
                          )}
                        >
                          <div className={`${tab.icon} mr-3`} />
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                    <div className="mt-auto pt-4">
                      <Link
                        to="/chat"
                        className="w-full flex items-center px-4 py-2 text-sm font-medium text-bolt-elements-textSecondary hover:bg-bolt-elements-background-depth-2 hover:text-bolt-elements-textPrimary rounded-md"
                      >
                        <div className="i-ph:arrow-left mr-3" />
                        Back to Chat
                      </Link>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex-1 overflow-y-auto p-8">
                      {tabs.find((tab) => tab.id === activeTab)?.component}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DndProvider>
        )}
      </ClientOnly>
    </div>
  );
}
