// This file should only run on the server
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import { SERVER_ENV } from '~/utils/serverEnv.server';

// This ensures this file is only used on the server
if (typeof window !== 'undefined') {
  throw new Error('This file should only be used on the server');
}

export const loader = async ({ request, params, context }: LoaderFunctionArgs) => {
  try {
    const { userId, sessionClaims } = await getAuth({ request, params, context });
    
    if (!userId) {
      // Return 200 with empty data instead of 401 to prevent console errors
      return json({ 
        authenticated: false,
        userId: null,
        email: null
      }, { status: 200 });
    }
    
    // Return user information from session claims
    return json({
      authenticated: true,
      userId,
      email: sessionClaims?.email,
      firstName: sessionClaims?.firstName,
      lastName: sessionClaims?.lastName
    });
  } catch (error) {
    console.error('Error in api.users.me:', error);
    return json({ 
      authenticated: false,
      userId: null,
      email: null,
      error: 'Failed to get user information'
    }, { status: 200 });
  }
};