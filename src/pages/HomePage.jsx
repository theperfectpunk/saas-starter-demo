import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { SplitHero, PricingSection, Footer } from '../components/marketing';
import { DEFAULT_PRICING_PLANS } from '../constants/pricing';

/**
 * HomePage - Main landing page
 */
export function HomePage() {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    // Footer data
    const footerColumns = [
        {
            title: 'Product',
            links: [
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Components', href: '/components' },
                { label: 'Changelog', href: '/changelog' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Press Kit', href: '/press' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Documentation', href: '/docs' },
                { label: 'Help Center', href: '/help' },
                { label: 'Community', href: '/community' },
                { label: 'Contact', href: '/contact' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Cookie Policy', href: '/cookies' },
            ],
        },
    ];

    const socialLinks = [
        { platform: 'twitter', href: 'https://twitter.com/company', ariaLabel: 'Follow us on Twitter' },
        { platform: 'github', href: 'https://github.com/company', ariaLabel: 'View our GitHub' },
        { platform: 'linkedin', href: 'https://linkedin.com/company/company', ariaLabel: 'Connect on LinkedIn' },
    ];

    const handlePlanSelect = (planId, isYearly) => {
        console.log(`Plan selected: ${planId}, Yearly: ${isYearly}`);
        alert(`You selected the ${planId} plan (${isYearly ? 'Yearly' : 'Monthly'})`);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">

            {/* Dark Mode Toggle - Fixed Position */}
            <button
                onClick={toggleDarkMode}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                aria-label="Toggle dark mode"
            >
                {darkMode ? (
                    <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                    <Moon className="w-6 h-6 text-gray-700" />
                )}
            </button>

            {/* Hero Section */}
            <SplitHero
                badge={<span>🚀 Now in Beta</span>}
                headline="Build Stunning Marketing Sites in Minutes"
                subheadline="Copy-paste beautiful React components designed for conversion. Zero configuration required. Mobile-first, accessible, and ready for production."
                primaryButtonText="Get Started Free"
                primaryButtonHref="#pricing"
                secondaryButtonText="View Components"
                secondaryButtonHref="/components"
                imageSrc="/images/hero-placeholder.png"
                imageAlt="Dashboard preview showing analytics and charts"
            />

            {/* Features Section */}
            <section className="relative w-full bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Everything You Need
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Production-ready components built with React, Tailwind CSS, and modern best practices
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '📱',
                                title: 'Mobile-First',
                                description: 'Every component is designed mobile-first with responsive breakpoints for all screen sizes.'
                            },
                            {
                                icon: '🎨',
                                title: 'Dark Mode',
                                description: 'Built-in dark mode support using Tailwind\'s class-based strategy. Toggle anywhere.'
                            },
                            {
                                icon: '♿',
                                title: 'Accessible',
                                description: 'WCAG 2.1 compliant with proper ARIA labels, focus states, and keyboard navigation.'
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <PricingSection
                title="Choose Your Plan"
                subtitle="Start free, upgrade when you're ready. No credit card required for trial."
                plans={DEFAULT_PRICING_PLANS}
                defaultToYearly={false}
                onPlanSelect={handlePlanSelect}
                yearlySavingsLabel="Save 20%"
            />

            {/* Footer */}
            <Footer
                companyName="Freemium UI Kit"
                tagline="Beautiful, accessible React components for modern marketing sites. Built with love using React, Tailwind CSS, and Lucide icons."
                columns={footerColumns}
                socialLinks={socialLinks}
                legalLinks={[
                    { label: 'Privacy', href: '/privacy' },
                    { label: 'Terms', href: '/terms' },
                    { label: 'Cookies', href: '/cookies' },
                ]}
            />
        </div>
    );
}

export default HomePage;
