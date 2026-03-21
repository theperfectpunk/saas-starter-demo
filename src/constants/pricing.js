/**
 * Default pricing plans configuration
 */
export const DEFAULT_PRICING_PLANS = [
    {
        id: 'free',
        name: 'Free',
        description: 'Perfect for hobby projects',
        monthlyPrice: 0,
        features: [
            { text: '3 Projects', included: true },
            { text: 'Basic Analytics', included: true },
            { text: 'Community Support', included: true },
            { text: 'Advanced Analytics', included: false },
            { text: 'Priority Support', included: false },
        ],
        buttonText: 'Get Started',
        buttonHref: '/signup',
    },
    {
        id: 'pro',
        name: 'Pro',
        description: 'For growing teams',
        monthlyPrice: 2900, // $29.00
        yearlyDiscount: 20,
        highlighted: true,
        highlightLabel: 'Most Popular',
        features: [
            { text: 'Unlimited Projects', included: true },
            { text: 'Advanced Analytics', included: true },
            { text: 'Priority Support', included: true },
            { text: 'Custom Integrations', included: true },
            { text: 'Dedicated Account Manager', included: false },
        ],
        buttonText: 'Start Free Trial',
        buttonHref: '/signup?plan=pro',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'For large organizations',
        monthlyPrice: 9900, // $99.00
        yearlyDiscount: 25,
        features: [
            { text: 'Everything in Pro', included: true },
            { text: 'Custom Integrations', included: true },
            { text: 'Dedicated Account Manager', included: true },
            { text: 'SLA Guarantee', included: true },
            { text: 'Custom Contract', included: true },
        ],
        buttonText: 'Contact Sales',
        buttonHref: '/contact',
    },
];
