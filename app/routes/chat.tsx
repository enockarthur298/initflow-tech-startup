import { json } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Header } from '~/components/header/Header';
import BackgroundRays from '~/components/ui/BackgroundRays';
import React from 'react';

export const meta = () => ({
  title: 'Chat | InitFlow',
  description: 'Build Full-Stack Apps instantly with nocode'
});

export const loader = () => json({});

export default function ChatRoute() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <BackgroundRays />
      <Header />
      <ClientOnly>
        {() => (
          <DndProvider backend={HTML5Backend}>
            <main className="flex-1 overflow-auto">
              <ClientOnly fallback={<BaseChat />}>
                {() => <Chat />}
              </ClientOnly>
            </main>
          </DndProvider>
        )}
      </ClientOnly>
    </div>
  );
}
