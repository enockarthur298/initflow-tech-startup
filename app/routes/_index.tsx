import { json, type MetaFunction } from '@remix-run/cloudflare';
import LandingPage from '~/components/landing/LandingPage';

export const meta: MetaFunction = () => {
  return [
    { title: 'InitFlow - Build Full-Stack Apps Instantly' },
    { name: 'description', content: 'Transform your ideas into reality with our no-code platform. Create, deploy, and scale your applications faster than ever before.' }
  ];
};

export const loader = () => json({});

export default function Index() {
  return <LandingPage />;
}
