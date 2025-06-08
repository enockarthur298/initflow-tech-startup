import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from '@remix-run/react';
import { ClientOnly } from 'remix-utils/client-only';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Header } from '../header/Header';
import BackgroundRays from '../ui/BackgroundRays';

export function AppLayout({ children }) {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <BackgroundRays />
      <Header />
      <ClientOnly>
        {() => (
          <DndProvider backend={HTML5Backend}>
            <main className="flex-1 overflow-auto">
              <Outlet />
            </main>
          </DndProvider>
        )}
      </ClientOnly>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};
