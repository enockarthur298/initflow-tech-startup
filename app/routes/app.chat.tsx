import { json } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { AppLayout } from '~/components/app/AppLayout';
import React from 'react';

export const meta = () => ({
  title: 'Chat | InitFlow',
  description: 'Build Full-Stack Apps instantly with nocode'
});

export const loader = () => json({});

export default function ChatRoute() {
  return (
    <AppLayout>
      <ClientOnly fallback={<BaseChat />}>
        {() => <Chat />}
      </ClientOnly>
    </AppLayout>
  );
}
