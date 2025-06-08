import React from 'react';
import { Link } from '@remix-run/react';
import { LandingHeader } from './LandingHeader';

const features = [
  {
    title: 'No-Code Development',
    description: 'Build applications visually without writing a single line of code. Our intuitive drag-and-drop interface makes app development accessible to everyone.',
    icon: '✨',
    color: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20'
  },
  {
    title: 'Instant Deployment',
    description: 'Deploy your applications with a single click to our global infrastructure. Go from idea to production in minutes, not days.',
    icon: '⚡',
    color: 'from-amber-400 to-orange-500',
    iconBg: 'bg-gradient-to-br from-amber-400/20 to-orange-500/20'
  },
  {
    title: 'Enterprise-Grade',
    description: 'Built with security and scalability in mind. Get enterprise-grade features without the enterprise complexity.',
    icon: '🛡️',
    color: 'from-emerald-400 to-teal-600',
    iconBg: 'bg-gradient-to-br from-emerald-400/20 to-teal-600/20'
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/70 to-slate-950/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTAgMGgxMDAwdjEwMDBIMHoiIGZpbGw9InVybCgjZykiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8ZGVmcz4KIDxyYWRpYWxHcmFkaWVudCBpZD0iZyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwIiBzdG9wLW9wYWNpdHk9IjAiLz4KIDwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+')] opacity-20"></div>
      </div>

      <LandingHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-300 text-sm font-medium">✨ The future of app development is here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 mb-6 leading-tight">
            Build Full-Stack Apps <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Without Writing Code</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your ideas into reality with our intuitive no-code platform. Create, deploy, and scale beautiful applications faster than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/chat"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 group"
            >
              <span>Get Started for Free</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700/50 border border-slate-700 text-slate-200 font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              View Pricing
            </Link>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-sm p-1">
              <div className="h-8 bg-slate-800/50 rounded-t-lg flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center">
                <div className="text-slate-400 text-sm font-mono">App Preview</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 bg-gradient-to-b from-slate-900/50 to-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 mb-8">TRUSTED BY INNOVATIVE TEAMS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {['TechCorp', 'InnoVate', 'DigitalLabs', 'Nexus', 'Quantum', 'Horizon'].map((company, i) => (
              <div key={i} className="flex items-center justify-center h-12 text-slate-400 hover:text-white transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 to-transparent"></div>
        </div>
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4">
            Everything You Need to Build Amazing Apps
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our platform provides all the tools and features to turn your ideas into reality, no coding required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5`}
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-950/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
            This platform has completely transformed how we build and deploy applications. What used to take weeks now takes hours, and the results are even better than before.
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">JD</div>
            <div className="text-left">
              <div className="font-medium text-white">John Doe</div>
              <div className="text-slate-400">CTO at TechCorp</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Join thousands of developers and businesses who are already building the future with our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/chat"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 group"
            >
              <span>Start Building for Free</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-slate-700 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
