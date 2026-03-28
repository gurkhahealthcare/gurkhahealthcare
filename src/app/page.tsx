import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceArea from '@/components/ServiceArea';
import type { LucideIcon } from 'lucide-react';
import {
  MoonStar,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  Home,
  Stethoscope,
  Pill,
  SunMedium,
  Plane,
  Building2,
  ClipboardList,
  Users,
} from 'lucide-react';

export const metadata = {
  title: 'Home | Gurkha Health & Services',
  description: 'Compassionate care for independent living',
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section - content left, hero image right */}
      <section className="relative min-h-0 lg:min-h-[85vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 md:py-10 lg:py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Left: Content - centered on mobile */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Compassionate Care for Independent Living
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We are dedicated to providing exceptional health and wellness services to our community. Our team of professionals is committed to supporting you on your journey to better health and independence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:border-brand-500 hover:text-brand-500 dark:hover:text-brand-400 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: Hero Image - centered on mobile */}
            <div className="order-1 lg:order-2 relative h-[240px] sm:h-[320px] md:h-[400px] lg:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto lg:max-w-none">
              <Image
                src="/herofinal.jpg"
                alt="Compassionate care for independent living"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area - compact strip */}
      <section className="py-6 sm:py-8 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <ServiceArea variant="compact" />
        </div>
      </section>

      {/* Famous Quote */}
      <section className="py-10 sm:py-12 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">
            &ldquo;Wherever the art of medicine is loved, there is also a love of humanity.&rdquo;
          </blockquote>
          <cite className="mt-3 block text-sm sm:text-base text-brand-500 dark:text-brand-400 font-semibold not-italic">
            — Hippocrates
          </cite>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-500 dark:text-brand-400 mb-2">
              What we offer
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Our Core Services
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto px-1">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                title: 'Overnight Care',
                description: 'Night‑time support to ensure safety and comfort for those who need assistance around the clock.',
                icon: '🌙',
              },
              {
                title: 'Cleaning',
                description: 'Light housekeeping to keep living spaces tidy and hygienic.',
                icon: '✨`',
              },
              {
                title: 'Lifestyle Support',
                description: 'Shopping, cooking, cleaning, and activities to enhance your quality of life',
                icon: '🏠',
              },
            ].map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group block glass-card p-5 sm:p-6 md:p-8 text-center hover:shadow-xl hover:border-brand-500/30 dark:hover:border-brand-400/30 border-2 border-transparent transition-all duration-300 rounded-xl sm:rounded-2xl"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-500 dark:text-brand-400 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center btn-accent px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/5 dark:from-brand-500/15 dark:to-brand-600/10 border border-brand-500/20 dark:border-brand-400/20 p-6 sm:p-8 md:p-12 lg:p-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
              Contact us today to learn more about how we can support your health and wellness journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center btn-accent px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
