import React from 'react';

/**
 * ComponentsPage - Dedicated page showcasing all available components
 */
export function ComponentsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">

            {/* Page Header */}
            <section className="relative w-full bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Component Library
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                            Explore our collection of production-ready components. Each component is fully documented, accessible, customizable, and ready to copy into your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/"
                                className="btn-secondary"
                            >
                                ← Back to Home
                            </a>
                            <a
                                href="https://github.com"
                                className="btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Components Documentation Section */}
            <section className="relative w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

                    {/* Component Cards */}
                    <div className="space-y-12">

                        {/* SplitHero Component Card */}
                        <div className="card p-6 sm:p-8">
                            <div className="mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    1. SplitHero Component
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    A two-column hero section perfect for landing pages. Features optional badge, dual CTAs, and reverse layout support.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Features:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li>✅ Mobile-first responsive design</li>
                                        <li>✅ Optional badge component</li>
                                        <li>✅ Primary & secondary CTA buttons</li>
                                        <li>✅ Reverse layout option</li>
                                        <li>✅ Image lazy loading</li>
                                        <li>✅ Dark mode support</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Props:</h4>
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-xs font-mono overflow-x-auto">
                                        <pre className="text-gray-800 dark:text-gray-200">
                                            {`headline (required)
subheadline (required)
primaryButtonText (required)
imageSrc (required)
imageAlt (required)
badge (optional)
secondaryButtonText (optional)
reverseLayout (optional)`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-100">
                                    {`<SplitHero
  badge={<span>🚀 New</span>}
  headline="Your Amazing Product"
  subheadline="Beautiful components ready to use"
  primaryButtonText="Get Started"
  imageSrc="/hero.jpg"
  imageAlt="Hero image"
/>`}
                                </pre>
                            </div>
                        </div>

                        {/* PricingSection Component Card */}
                        <div className="card p-6 sm:p-8">
                            <div className="mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    2. PricingSection Component
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Complete pricing section with monthly/yearly toggle and automatic discount calculations.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Features:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li>✅ Animated toggle switch</li>
                                        <li>✅ Automatic yearly discount calculations</li>
                                        <li>✅ Highlighted "Most Popular" plan</li>
                                        <li>✅ Feature list with included/excluded states</li>
                                        <li>✅ Responsive grid layout</li>
                                        <li>✅ Custom currency support</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Sub-components:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li>• <code className="text-primary-600 dark:text-primary-400">PricingToggle</code> - Monthly/Yearly switch</li>
                                        <li>• <code className="text-primary-600 dark:text-primary-400">PricingCard</code> - Individual plan card</li>
                                        <li>• <code className="text-primary-600 dark:text-primary-400">PricingSection</code> - Complete section wrapper</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-100">
                                    {`<PricingSection
  title="Choose Your Plan"
  subtitle="Start free, upgrade when ready"
  plans={[
    {
      id: 'pro',
      name: 'Pro',
      monthlyPrice: 2900, // $29.00 in cents
      yearlyDiscount: 20,
      features: [
        { text: 'Unlimited Projects', included: true },
        { text: 'Priority Support', included: true }
      ],
      buttonText: 'Start Trial'
    }
  ]}
  onPlanSelect={(planId, isYearly) => console.log(planId)}
/>`}
                                </pre>
                            </div>
                        </div>

                        {/* Footer Component Card */}
                        <div className="card p-6 sm:p-8">
                            <div className="mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    3. Footer Component
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Responsive multi-column footer with navigation links, social icons, and branding.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Features:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        <li>✅ Flexible column layout (up to 4 columns)</li>
                                        <li>✅ Social media icons (6 platforms supported)</li>
                                        <li>✅ Dynamic copyright year</li>
                                        <li>✅ Optional newsletter slot</li>
                                        <li>✅ Legal links section</li>
                                        <li>✅ Responsive 2x2 → 6-column grid</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Supported Social Icons:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Twitter', 'GitHub', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube'].map(platform => (
                                            <span key={platform} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300">
                                                {platform}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-100">
                                    {`<Footer
  companyName="Your Company"
  tagline="Building the future"
  columns={[
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' }
      ]
    }
  ]}
  socialLinks={[
    { platform: 'twitter', href: 'https://twitter.com/...' }
  ]}
/>`}
                                </pre>
                            </div>
                        </div>

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border border-primary-200 dark:border-primary-800">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                Ready to Get Started?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 max-w-md">
                                Copy these components into your project and customize them to match your brand.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://github.com"
                                    className="btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href="/#pricing"
                                    className="btn-secondary"
                                >
                                    View Pricing
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default ComponentsPage;
