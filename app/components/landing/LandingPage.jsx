import React from 'react';
import { Link } from '@remix-run/react';
import { LandingHeader } from './LandingHeader';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bolt-elements-background-depth-1 to-bolt-elements-background-depth-2">
      <LandingHeader />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-bolt-text-primary mb-6">
            Build Full-Stack Apps <span className="text-bolt-elements-accent">Instantly</span>
          </h1>
          <p className="text-xl text-bolt-text-secondary max-w-3xl mx-auto mb-10">
            Transform your ideas into reality with our no-code platform. Create, deploy, and scale your applications faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/chat"
              className="px-8 py-4 bg-bolt-elements-accent hover:bg-bolt-elements-accent-hover text-white font-medium rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-background-depth-4 text-bolt-text-primary font-medium rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-bolt-text-primary mb-12">Why Choose Our Platform</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'No-Code Development',
              description: 'Build applications visually without writing a single line of code.',
              icon: '🚀'
            },
            {
              title: 'Instant Deployment',
              description: 'Deploy your applications with a single click to global infrastructure.',
              icon: '⚡'
            },
            {
              title: 'Scalable & Secure',
              description: 'Enterprise-grade security and automatic scaling for your applications.',
              icon: '🛡️'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-bolt-elements-background-depth-3 p-6 rounded-xl">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-bolt-text-primary">{feature.title}</h3>
              <p className="text-bolt-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bolt-elements-background-depth-3">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-bolt-text-primary mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-bolt-text-secondary mb-8">
            Join thousands of developers and businesses building with our platform.
          </p>
          <Link
            to="/chat"
            className="inline-block px-8 py-4 bg-bolt-elements-accent hover:bg-bolt-elements-accent-hover text-white font-medium rounded-lg transition-colors duration-200"
          >
            Start Building for Free
          </Link>
        </div>
      </section>
    </div>
  );
}
