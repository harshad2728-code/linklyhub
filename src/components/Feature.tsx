import React from 'react';
import SpotlightingCard from '@/3dcomponents/SpotLightingCard';
type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string; // added gradient for icon background
};

const features: Feature[] = [
  {
    id: 1,
    title: 'Instant Storefront',
    description:
      'Create a beautiful, mobile-first store in minutes — upload photos, set prices, go live.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7M8 7V5a4 4 0 118 0v2" />
      </svg>
    ),
    gradient: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Payments & Logistics',
    description:
      'Multiple payment methods (UPI, cards, wallets) and pre-integrated shipping partners for smooth fulfillment.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    gradient: 'bg-gradient-to-tr from-green-400 via-teal-500 to-blue-500',
  },
  {
    id: 3,
    title: 'Social Media Integration',
    description:
      'Share products directly to WhatsApp, Instagram & Facebook. Sell where your customers already are.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h8m-8 4h6" />
      </svg>
    ),
    gradient: 'bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Growth Tools',
    description:
      'One-click ads, referral campaigns, loyalty programs and simple analytics tailored for non-tech sellers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3 3 7-7" />
      </svg>
    ),
    gradient: 'bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500',
  },
];

export default function FeaturesSection(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tight">
          Built for micro-businesses
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300">
          LinklyHub gives you everything to sell online — simple, fast and mobile-first.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
        {features.map((f) => (
          <SpotlightingCard
            key={f.id}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition transform duration-300"
          >
            <div className="shrink-0 mb-4">
              <div className={`h-12 w-12 flex items-center justify-center rounded-full ${f.gradient} text-white shadow-lg`}>
                {f.icon}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.description}</p>
            </div>
          </SpotlightingCard>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <a
          href="#"
          className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 font-semibold shadow-md hover:scale-105 hover:opacity-90 transition transform"
          aria-label="Start your free store"
        >
          Start your free store
        </a>
      </div>
    </section>
  );
}
