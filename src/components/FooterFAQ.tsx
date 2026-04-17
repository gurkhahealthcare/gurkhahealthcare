'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
    {
        question: "What services do you provide?",
        answer: "We provide supported living services for adults aged 18 and over. We support individuals with autism, mental health needs, and other additional support requirements to live independently while receiving the care they need."
    },
    {
        question: "Who do you support?",
        answer: "We work with adults (18+) who may have autism, learning disabilities, or mental health conditions. Our support is tailored to each individual's needs, goals, and preferences."
    },
    {
        question: "What is supported living?",
        answer: "Supported living allows individuals to live in their own home or shared accommodation while receiving support with daily living tasks, personal care, and developing independent living skills."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer a wide range of support, including: Daily living support (cooking, cleaning, shopping), Emotional and mental health support, Support with appointments and community activities, Help with building independence and life skills."
    },
    {
        question: "Are your staff available all the time?",
        answer: "Yes, we provide support 24 hours a day, 7 days a week, depending on individual needs. Our team is always available to ensure safety, comfort, and wellbeing."
    },
    {
        question: "How do you support people with autism?",
        answer: "We provide person-centred support tailored to each individual. This includes structured routines, communication support, and creating a safe, understanding environment that respects sensory and emotional needs."
    },
    {
        question: "Do you create personalised support plans?",
        answer: "Yes, every individual has a personalised support plan. We work closely with them, their families, and professionals to ensure the support meets their specific needs and goals."
    },
    {
        question: "Can family members be involved?",
        answer: "Absolutely. We encourage family involvement and believe working together helps provide the best outcomes for the individuals we support."
    },
    {
        question: "How do you promote independence?",
        answer: "We focus on empowering individuals to develop life skills, make their own choices, and build confidence so they can live as independently as possible."
    },
    {
        question: "How can someone access your service?",
        answer: "Individuals can access our service through referrals from local authorities, healthcare professionals, or by contacting us directly for more information."
    }
];

const FAQItem: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 dark:border-slate-700 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-3 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 rounded px-2"
            >
                <span className="text-sm font-medium text-slate-900 dark:text-white pr-4">
                    {index + 1}. {item.question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-brand-500 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>
            {isOpen && (
                <div className="px-2 pb-3 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/30 rounded mb-2">
                    <p className="leading-relaxed">{item.answer}</p>
                </div>
            )}
        </div>
    );
};

const FooterFAQ: React.FC = () => {
    return (
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Frequently Asked Questions</h3>
            <div className="space-y-0">
                {FAQ_ITEMS.map((item, index) => (
                    <FAQItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

export default FooterFAQ;
