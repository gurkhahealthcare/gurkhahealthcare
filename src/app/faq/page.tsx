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

const FAQItemComponent: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 dark:border-slate-700 rounded-lg mb-4 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200"
            >
                <span className="text-base font-semibold text-slate-900 dark:text-white pr-4">
                    {index + 1}. {item.question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-brand-500 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>
            {isOpen && (
                <div className="px-6 pb-4 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-700">
                    <p className="leading-relaxed">{item.answer}</p>
                </div>
            )}
        </div>
    );
};

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg transition-all duration-300">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Find answers to common questions about our services, support, and how we can help you or your loved ones.
                    </p>
                </div>
            </div>

            {/* FAQ Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-0">
                    {FAQ_ITEMS.map((item, index) => (
                        <FAQItemComponent key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 p-8 rounded-lg bg-brand-500/10 dark:bg-brand-500/5 border border-brand-300/30 dark:border-brand-500/20">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Didn't find your answer?</h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                        If you have any other questions or need more information about our services, please don't hesitate to contact us.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}
