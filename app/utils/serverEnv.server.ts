// This file contains server-side environment variables and utilities
// It should only be imported in server-side code

if (typeof window !== 'undefined') {
  throw new Error('This file should only be used on the server');
}

export const SERVER_ENV = {
  PYTHON_BACKEND_URL: process.env.PYTHON_BACKEND_URL || 'http://localhost:5000',
  NODE_ENV: process.env.NODE_ENV || 'development',
  // Add other server-side environment variables here
} as const;
