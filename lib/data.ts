export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "System", href: "/#showcase" },
  { label: "Focus", href: "/#workflow" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  { value: "120K+", label: "Planned Sessions" },
  { value: "89%", label: "Better Focus Consistency" },
  { value: "2.4M", label: "Hours Structured" },
  { value: "50+", label: "Frameworks In One System" },
  { value: "24/7", label: "Clarity Dashboard" }
];

export const valueCards = [
  {
    title: "Clarity",
    description:
      "Turn a noisy backlog into a clean visual map of what matters now."
  },
  {
    title: "Prioritization",
    description:
      "Use weighted priority lanes so important work always rises to the top."
  },
  {
    title: "Deep Focus",
    description:
      "Protect uninterrupted sessions with rhythm-based focus windows."
  },
  {
    title: "Time Awareness",
    description:
      "See where your hours go and redesign the week with intention."
  }
];

export const showcaseTabs = [
  {
    key: "plan",
    label: "Plan",
    headline: "Architect your day before it begins.",
    description:
      "Build your day in layered blocks: priorities, support tasks, and recovery time. A planning canvas keeps commitments realistic.",
    metrics: [
      { label: "Tasks Mapped", value: "18" },
      { label: "Time Blocks", value: "07" },
      { label: "Daily Capacity", value: "92%" }
    ],
    timeline: [
      { time: "07:30", title: "Morning Systems Check", tone: "accent" },
      { time: "09:00", title: "Deep Work Block A", tone: "neutral" },
      { time: "11:30", title: "Team Decisions", tone: "neutral" }
    ]
  },
  {
    key: "focus",
    label: "Focus",
    headline: "Enter deep work with zero friction.",
    description:
      "Focus mode removes noise, activates session boundaries, and tracks cognitive energy. You stay in flow while the system handles timing.",
    metrics: [
      { label: "Current Sprint", value: "52m" },
      { label: "Interruptions", value: "02" },
      { label: "Flow Score", value: "94" }
    ],
    timeline: [
      { time: "13:00", title: "Design Sprint", tone: "accent" },
      { time: "14:10", title: "Break + Reset", tone: "neutral" },
      { time: "14:30", title: "Focus Block B", tone: "neutral" }
    ]
  },
  {
    key: "review",
    label: "Review",
    headline: "See patterns, not just completed tasks.",
    description:
      "Review mode highlights drift, wins, and missed estimates so you can calibrate your planning and preserve momentum week after week.",
    metrics: [
      { label: "Weekly Completion", value: "87%" },
      { label: "Focus Gain", value: "+21%" },
      { label: "Time Reclaimed", value: "6.2h" }
    ],
    timeline: [
      { time: "17:20", title: "Session Closeout", tone: "accent" },
      { time: "17:35", title: "Learning Notes", tone: "neutral" },
      { time: "17:50", title: "Tomorrow Draft", tone: "neutral" }
    ]
  },
  {
    key: "improve",
    label: "Improve",
    headline: "Evolve your system every cycle.",
    description:
      "Receive targeted suggestions for better scheduling, cleaner priorities, and healthier workload pacing based on your real behavior.",
    metrics: [
      { label: "Automation Rules", value: "14" },
      { label: "Energy Alignment", value: "91%" },
      { label: "Weekly Resets", value: "4/4" }
    ],
    timeline: [
      { time: "Sunday", title: "Weekly Reset", tone: "accent" },
      { time: "Monday", title: "Priority Guardrails", tone: "neutral" },
      { time: "Wednesday", title: "Midweek Rebalance", tone: "neutral" }
    ]
  }
];

export const workflowSteps = [
  {
    title: "Capture",
    description:
      "Collect every task, commitment, and idea into a single intake stream."
  },
  {
    title: "Prioritize",
    description:
      "Rank work by impact, urgency, and effort using clear decision rules."
  },
  {
    title: "Schedule",
    description:
      "Assign work to realistic blocks based on energy and available capacity."
  },
  {
    title: "Focus",
    description:
      "Run protected deep work sessions with boundaries and visual timers."
  },
  {
    title: "Review",
    description:
      "Close the loop daily and weekly to refine your system continuously."
  }
];

export const testimonials = [
  {
    quote:
      "Momentum replaced my chaotic to-do list with a system I can trust. I now end the day with energy instead of mental debt.",
    name: "Arielle Knox",
    role: "Product Designer"
  },
  {
    quote:
      "The weekly reset changed everything. I stopped reacting and started directing my calendar with intent.",
    name: "Victor Hale",
    role: "Startup Founder"
  },
  {
    quote:
      "It feels like a premium control room for my week. Clean interface, real structure, measurable focus gains.",
    name: "Mina Patel",
    role: "Freelance Strategist"
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "For students and solo users building core discipline.",
    features: [
      "Daily planner",
      "3 focus sessions/day",
      "Weekly summary",
      "Basic analytics"
    ],
    cta: "Start Free",
    highlight: false
  },
  {
    name: "Pro",
    price: "$24",
    period: "/month",
    description: "For professionals who want consistent high-performance days.",
    features: [
      "Unlimited focus sessions",
      "Priority mapping engine",
      "Energy-based scheduling",
      "Advanced insights",
      "Automation rules"
    ],
    cta: "Go Pro",
    highlight: true
  },
  {
    name: "Elite",
    price: "$64",
    period: "/month",
    description: "For founders and teams designing elite execution systems.",
    features: [
      "Everything in Pro",
      "Team planning boards",
      "Performance benchmarks",
      "White-glove onboarding",
      "Priority support"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

export const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/features#integrations" }
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Changelog", href: "/features#changelog" }
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" }
  ]
};
