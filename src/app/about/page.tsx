import TeamMember from '@/components/TeamMember';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Gurkha Health ',
  description: 'Meet our team of dedicated professionals at Gurkha Health. Learn about our mission, vision, and values that drive our compassionate care for independent living in the UK.',
};

const teamMembers = [
  {
    name: 'Anns Basnet',
    role: 'Founder and Managing Director',
    photo: '/anns.webp',
    email: 'anns@gurkhahealth.co.uk',
  },
  {
    name: 'Katarzyna Labudek',
    role: 'Director & Co-Founder',
    photo: '/katarzyna.webp',
    email: 'info@gurkhahealth.co.uk',
  },
  {
    name: 'Yvonne Mnyani',
    role: 'External HR & Business Advisor',
    photo: '/yvone.webp',
    email: 'hrteam@gurkhahealth.co.uk',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Company Overview - stacked full-width */}
        <section className="mb-24">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-500 dark:text-brand-400 mb-4">
              About Our Service
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              About Our Supported Living Services
            </h1>
            <div className="space-y-6 text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
              <p>
                At our supported living service, we believe that everyone deserves the opportunity to live independently while receiving the care and support they need. Our goal is to empower individuals to maintain control over their lives while feeling safe, respected, and supported in their own home.
              </p>
              <p>
                We provide personalised care tailored to each individual&apos;s needs, abilities, and goals. Whether it is assistance with daily living tasks, emotional support, or help accessing the community, our dedicated team works closely with each person to promote independence and wellbeing.
              </p>
            </div>
          </div>

          {/* Person-Centred Support Section */}
          <div className="space-y-8 mb-16">
            <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/50 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                Person-Centred Support
              </h2>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                We take a person-centred approach to everything we do. This means that every support plan is designed around the individual, respecting their choices, preferences, and lifestyle. We understand that every person is unique, and we are committed to providing support that reflects that.
              </p>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                Our experienced and compassionate staff work collaboratively with individuals, families, and professionals to ensure the highest standard of care and support.
              </p>
            </div>

            {/* Promoting Independence Section */}
            <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/50 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                Promoting Independence and Wellbeing
              </h2>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                Our service focuses on helping individuals build confidence, develop life skills, and participate fully in their communities. We support people to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                  <span className="text-brand-500 dark:text-brand-400 font-bold flex-shrink-0 mt-1">•</span>
                  <span className="text-base sm:text-lg">Maintain their independence</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                  <span className="text-brand-500 dark:text-brand-400 font-bold flex-shrink-0 mt-1">•</span>
                  <span className="text-base sm:text-lg">Develop daily living skills</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                  <span className="text-brand-500 dark:text-brand-400 font-bold flex-shrink-0 mt-1">•</span>
                  <span className="text-base sm:text-lg">Access education, work, or volunteering opportunities</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                  <span className="text-brand-500 dark:text-brand-400 font-bold flex-shrink-0 mt-1">•</span>
                  <span className="text-base sm:text-lg">Engage in social and community activities</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                  <span className="text-brand-500 dark:text-brand-400 font-bold flex-shrink-0 mt-1">•</span>
                  <span className="text-base sm:text-lg">Improve overall health and wellbeing</span>
                </li>
              </ul>
            </div>

            {/* Safe and Supportive Environment Section */}
            <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/50 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                A Safe and Supportive Environment
              </h2>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                We are committed to creating a safe, respectful, and inclusive environment where individuals feel valued and supported. Our team is trained to provide professional, compassionate care while maintaining dignity and promoting choice and independence.
              </p>
            </div>

            {/* Our Commitment Section */}
            <div className="bg-gradient-to-r from-slate-900 to-[#6a486f] text-white p-8 sm:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                Our Commitment
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We are passionate about making a positive difference in the lives of those we support. Through compassion, professionalism, and dedication, we aim to help every individual live a fulfilling and independent life.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, vision & values - vertical stack on mobile, horizontal on desktop */}
        <section className="mb-16 md:mb-24">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-900 to-[#6a486f] text-white p-8 sm:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                To enable people to live independently, safely, and with dignity by delivering reliable, compassionate, and
                truly person-centred care in the comfort of their own homes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/10 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                  A community where every individual – regardless of age, background, or health needs – has access to
                  respectful, culturally sensitive support that helps them live life on their own terms.
                </p>
              </div>
              <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/50 dark:to-emerald-900/10 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Values</h2>
                <ul className="text-sm sm:text-base space-y-3 text-slate-700 dark:text-slate-200">
                  <li className="flex items-start gap-3">
                    <span className="font-bold flex-shrink-0 mt-1">-</span>
                    <span>We demonstrate compassion and empathy in all interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold flex-shrink-0 mt-1">-</span>
                    <span>We uphold the highest standards of quality and clinical excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold flex-shrink-0 mt-1">-</span>
                    <span>We conduct ourselves with integrity, transparency, and professionalism</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold flex-shrink-0 mt-1">-</span>
                    <span>We deliver person-centred care tailored to individual needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold flex-shrink-0 mt-1">-</span>
                    <span>We promote respect, dignity, and cultural awareness at all times</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-500 dark:text-brand-400 mb-4">
              Our Leadership
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Dedicated professionals committed to delivering excellent care and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <TeamMember member={member} />
              </div>
            ))}
          </div>

          {/* Team Photo */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="relative w-full h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <Image
                src="/team1.webp"
                alt="Gurkha Health team"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
