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

// Services data - hardcoded to match ServicesAccordion
const SERVICES = [
  {
    name: 'Overnight Care',
    description: 'Night‑time support to ensure safety and comfort.',
    icon: MoonStar,
    iconColor: 'text-indigo-500 dark:text-indigo-400',
  },
  {
    name: 'Shopping',
    description: 'Accompanying clients to shops or running errands on their behalf.',
    icon: ShoppingBag,
    iconColor: 'text-amber-500 dark:text-amber-400',
  },
  {
    name: 'Cleaning',
    description: 'Professional domestic cleaning tailored to your standards.',
    icon: Sparkles,
    iconColor: 'text-cyan-500 dark:text-cyan-400',
  },
  {
    name: 'Meal Preparation',
    description: 'Nutritious meal planning and preparation for healthy eating.',
    icon: UtensilsCrossed,
    iconColor: 'text-orange-500 dark:text-orange-400',
  },
  {
    name: 'General Household Duties',
    description: 'Laundry, ironing, and general house maintenance support.',
    icon: Home,
    iconColor: 'text-emerald-500 dark:text-emerald-400',
  },
  {
    name: 'Health Appointments',
    description: 'Support attending medical appointments and managing health.',
    icon: Stethoscope,
    iconColor: 'text-teal-500 dark:text-teal-400',
  },
  {
    name: 'Prescription Pick‑up',
    description: 'Collecting medications from pharmacies and ensuring they are taken as directed.',
    icon: Pill,
    iconColor: 'text-violet-500 dark:text-violet-400',
  },
  {
    name: 'Indoor Activities',
    description: 'Engaging clients with games, crafts, reading or other stimulating indoor pastimes.',
    icon: Sparkles,
    iconColor: 'text-pink-500 dark:text-pink-400',
  },
  {
    name: 'Outdoor Activities',
    description: 'Support for walks, excursions or sports to promote wellbeing and social interaction.',
    icon: SunMedium,
    iconColor: 'text-lime-500 dark:text-lime-400',
  },
  {
    name: 'Holiday Care',
    description: 'Supervised care during vacations or special events away from the usual environment.',
    icon: Plane,
    iconColor: 'text-sky-500 dark:text-sky-400',
  },
  {
    name: '24 Hour Supported Accommodation',
    description: 'Around‑the‑clock assistance in a dedicated living setting for those needing intensive support.',
    icon: Building2,
    iconColor: 'text-slate-500 dark:text-slate-400',
  },
  {
    name: 'Personalised Support Plan',
    description: 'Bespoke care plans developed in collaboration with clients and families.',
    icon: ClipboardList,
    iconColor: 'text-fuchsia-500 dark:text-fuchsia-400',
  },
  {
    name: 'Group Activities',
    description: 'Facilitated social groups and community outings to encourage connection.',
    icon: Users,
    iconColor: 'text-blue-500 dark:text-blue-400',
  },
];

export const metadata = {
  title: 'Home | Gurkha Health & Services',
  description: 'Compassionate care for independent living',
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section - content left, hero image right */}
      <section className="relative min-h-0 lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -mr-48" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl -ml-36" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Left: Content - centered on mobile */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  ✓ Trusted Healthcare Provider
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Compassionate Care for <span className="bg-gradient-to-r from-brand-500 to-orange-500 bg-clip-text text-transparent">Independent Living</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We are dedicated to providing exceptional health and wellness services to our community. Our team of professionals is committed to supporting you on your journey to better health and independence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: Hero Image - centered on mobile */}
            <div className="order-1 lg:order-2 relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto lg:max-w-none group">
              <Image
                src="/herofinal.jpg"
                alt="Compassionate care for independent living"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area - compact strip */}
      <section className="py-6 sm:py-8 border-y border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-r from-slate-50 to-orange-50/30 dark:from-slate-900/40 dark:to-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <ServiceArea variant="compact" />
        </div>
      </section>

      {/* Famous Quote */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -ml-48 -mb-48" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-relaxed italic mb-4 sm:mb-6">
            &ldquo;The purpose of human life is to serve, and to show compassion and the will to help others.&rdquo;
          </blockquote>
          <cite className="text-base sm:text-lg text-brand-400 font-semibold not-italic tracking-wide">
            — Albert Schweitzer
          </cite>
        </div>
      </section>

      {/* Featured Services Section - Continuous Slider */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-500 dark:text-brand-400 mb-3">
              What we offer
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Our Comprehensive Services
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto px-1">
              We provide a full range of personalized care solutions designed to support your independence and wellbeing
            </p>
          </div>
        </div>

        {/* Continuous Slider */}
        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-295px * 13));
              }
            }
            .services-slider {
              animation: scroll 45s linear infinite;
            }
            .services-slider:hover {
              animation-play-state: paused;
            }
            @media (min-width: 640px) {
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-320px * 13));
                }
              }
              .services-slider {
                animation: scroll 48s linear infinite;
              }
            }
            @media (min-width: 1024px) {
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-370px * 13));
                }
              }
              .services-slider {
                animation: scroll 52s linear infinite;
              }
            }
          `}</style>
          <div className="overflow-hidden">
            <div className="services-slider flex gap-4 sm:gap-5 lg:gap-6 w-max px-4 sm:px-6 lg:px-8">
              {/* Service items - doubled for continuous scroll */}
              {[...SERVICES, ...SERVICES].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative flex-shrink-0 w-[290px] sm:w-[310px] lg:w-[360px]"
                  >
                    <div className="h-full rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:shadow-lg hover:border-brand-300 dark:hover:border-brand-500/30 overflow-hidden relative backdrop-blur-sm">
                      {/* Gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-100/0 dark:from-brand-500/0 dark:to-brand-600/0 group-hover:from-brand-50 group-hover:to-brand-50/50 dark:group-hover:from-brand-500/5 dark:group-hover:to-brand-600/5 transition-colors duration-300" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-100 dark:bg-slate-700/60 group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 transition-colors duration-300 mb-4">
                          <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${service.iconColor}`} />
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                          {service.name}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl font-bold text-base sm:text-lg bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-orange-50 dark:from-slate-900 dark:to-slate-950" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today to learn more about how we can support your health and wellness journey. Our team is ready to answer all your questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Contact Us Today
              </Link>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
