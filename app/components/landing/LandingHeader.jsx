import { Link } from '@remix-run/react';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/remix';

export function LandingHeader() {
  return (
    <header className="fixed w-full bg-transparent z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-bolt-text-primary">InitFlow</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-bolt-text-secondary hover:text-bolt-text-primary transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-bolt-text-secondary hover:text-bolt-text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/docs" className="text-bolt-text-secondary hover:text-bolt-text-primary transition-colors">
            Documentation
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium text-bolt-text-primary hover:text-blue-600 transition-colors">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium bg-bolt-elements-accent hover:bg-bolt-elements-accent-hover text-white rounded-lg transition-colors">
                Get Started
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
