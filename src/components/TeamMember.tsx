import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';

interface TeamMemberProps {
    member: {
        name: string;
        role: string;
        photo: string;
        email?: string;
    };
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const { name, role, photo, email } = member;
  return (
    <article className="h-full flex flex-col text-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 overflow-hidden shadow-md hover:shadow-xl hover:border-brand-500/50 dark:hover:border-brand-400/50 transition-all duration-300 hover:scale-105 transform">
      <div className="relative w-full aspect-[4/5] flex-shrink-0 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 group rounded-t-2xl flex items-center justify-center">
        <Image
          src={photo}
          alt={`${name}'s photo`}
          fill
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
          className="object-contain object-center p-2 group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold mb-4">
          {role}
        </p>
        {email && (
          <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 text-sm text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-300 py-2"
            >
              <Mail className="w-4 h-4" />
              <span className="break-all">{email}</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default TeamMember;