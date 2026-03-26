import TeamMember from '@/components/TeamMember';
import ServiceArea from '@/components/ServiceArea';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Gurkha Health & Services',
  description: 'Meet our team of dedicated professionals at Gurkha Health & Services',
};

const teamMembers = [

  {
    name: 'Anns Basnet',
    role: 'Founder and Managing Director',
    photo: '/anns.webp',
  },
  {
    name: 'Katarzyna Labudek',
    role: 'Director & Co-Founder',
    photo: '/katarzyna.webp',
  },
  {
    name: 'Yvonne Mnyani',
    role: 'External HR & Business Advisor',
    photo: '/yvone.webp',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Company Overview - stacked full-width */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-500 dark:text-brand-400 mb-3">
              About Gurkha Health Services Ltd.
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Compassionate care for independent living in UK.
            </h1>
            <div className="space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-100 leading-relaxed">
              <p>
                Gurkha Health Services Ltd. is a community-focused provider of high-quality health and care support for
                independent-living individuals. We combine professional expertise with genuine compassion to help people
                feel safe, respected, and confident.
              </p>
              <p>
                Our multi‑disciplinary team has extensive experience across health and social care. We work closely with
                individuals, families, and local partners to design support that fits real lives – promoting dignity,
                independence, and overall wellbeing.
              </p>
              <div className="mt-6 max-w-2xl mx-auto">
                <ServiceArea variant="card" />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 bg-slate-50/50 dark:bg-slate-900/30">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-5 text-center">
                Why families trust us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 p-5 text-center">
                  <p className="text-2xl font-bold text-brand-500 dark:text-brand-400">24/7</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">reliable support when it matters most</p>
                </div>
                <div className="rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 p-5 text-center">
                  <p className="text-2xl font-bold text-brand-500 dark:text-brand-400">100%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">person‑centred care plans</p>
                </div>
                <div className="rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 p-5 text-center">
                  <p className="text-2xl font-bold text-brand-500 dark:text-brand-400">Local</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">deep roots in the Local community</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                Every visit, every conversation, and every care plan is guided by our promise to treat people the way we
                would want our own families to be treated.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, vision & values - vertical stack on mobile, horizontal on desktop */}
        <section className="mb-16 md:mb-24">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-500 via-brand-500 to-amber-400 text-white p-8 sm:p-10 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-95">
                To enable people to live independently, safely, and with dignity by delivering reliable, compassionate, and
                truly person‑centred care in the comfort of their own homes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-brand-500 dark:text-brand-400 mb-3">Our Vision</h2>
                <p className="text-base sm:text-lg text-slate-900 dark:text-white leading-relaxed">
                  A community where every individual – regardless of age, background, or health needs – has access to
                  respectful, culturally sensitive support that helps them live life on their own terms.
                </p>
              </div>
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-brand-500 dark:text-brand-400 mb-4">Our Values</h2>
                <ul className="text-base sm:text-lg space-y-2 text-slate-900 dark:text-white">
                  <li>✓ Compassion &amp; empathy in every interaction</li>
                  <li>✓ Quality &amp; clinical excellence you can rely on</li>
                  <li>✓ Integrity, transparency, and professionalism</li>
                  <li>✓ Person‑centred care, never one‑size‑fits‑all</li>
                  <li>✓ Respect, dignity, and cultural understanding</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team photo - smaller container */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <Image
                src="/team1.webp"
                alt="Gurkha Health Services Ltd. team"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section>
          <h2 className="text-3xl font-bold text-brand-500 dark:text-brand-400 mb-3 text-center">Meet Our Team</h2>
          <p className="text-center text-slate-900 dark:text-white mb-10 text-base sm:text-lg">
            Dedicated team committed to delivering excellent care
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
                <TeamMember member={member} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
