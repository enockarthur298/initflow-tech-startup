// This file ensures Node.js polyfills are available
import { installGlobals } from "@remix-run/cloudflare";

// Install required globals for Node.js compatibility
installGlobals();

export const onRequest = async ({ next }) => {
  return next();
};
