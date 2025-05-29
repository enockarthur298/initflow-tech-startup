/// <reference types="@remix-run/node/globals" />

declare const __COMMIT_HASH: string;
declare const __APP_VERSION: string;

// Node.js globals
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    // Add other environment variables as needed
  }
}

// Global type extensions
interface Window {
  // Add any browser globals here if needed
}
