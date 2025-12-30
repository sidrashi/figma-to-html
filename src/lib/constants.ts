// Time slots for booking
export const TIME_SLOTS = [
  "9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am",
  "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm",
  "3:00pm", "3:30pm", "4:00pm", "4:30pm", "5:00pm"
] as const;

// Company info
export const COMPANY = {
  name: "Designhenko",
  email: "hello@designhenko.co",
  founder: {
    name: "Brett Williams",
    title: "Founder & Designer",
    avatar: "👨‍💼"
  }
} as const;

// Pricing data
export const PRICING = {
  monthly: 4995,
  currency: "$",
  features: [
    "One request at a time",
    "Average 48 hour delivery",
    "Unlimited brands",
    "Unlimited users",
    "Unlimited stock photos",
    "Pause or cancel anytime"
  ]
} as const;

// Navigation links
export const NAV_LINKS = [
  { href: "#login", label: "Login" },
  { href: "#book", label: "Book a call", icon: "phone" },
  { href: "#pricing", label: "See pricing", primary: true }
] as const;

// Social links
export const SOCIAL_LINKS = [
  { name: "Twitter", url: "https://twitter.com/designhenko" },
  { name: "Dribbble", url: "https://dribbble.com/designhenko" },
  { name: "Instagram", url: "https://instagram.com/designhenko" }
] as const;

// FAQ items
export const FAQ_ITEMS = [
  {
    question: "Is there a limit to how many requests I can have?",
    answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
  },
  {
    question: "How fast will I receive my designs?",
    answer: "On average, most requests are completed in just two days or less. However, more complex requests can take longer."
  },
  {
    question: "How does the pause feature work?",
    answer: "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy."
  },
  {
    question: "What programs do you design in?",
    answer: "Most requests are designed using Figma. However, we can also work in Adobe Creative Suite if needed."
  },
  {
    question: "How do I request designs?",
    answer: "Designhenko offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes."
  },
  {
    question: "What if I don't like the design?",
    answer: "No worries! We'll continue to revise the design until you're 100% satisfied."
  }
] as const;

// Process steps
export const PROCESS_STEPS = [
  {
    title: "Subscribe",
    description: "Subscribe to a plan & request as many designs as you'd like.",
    gradient: "card-gradient-1"
  },
  {
    title: "Request",
    description: "Receive your design within a few business days on average.",
    gradient: "card-gradient-2"
  },
  {
    title: "Revise",
    description: "We'll revise the designs until you're 100% satisfied.",
    gradient: "card-gradient-3"
  }
] as const;

// Benefits list
export const BENEFITS = [
  {
    title: "Design board",
    description: "Easily manage your design queue with a Trello board.",
    icon: "📋"
  },
  {
    title: "Lightning fast",
    description: "Get your designs one at a time in just a few days.",
    icon: "⚡"
  },
  {
    title: "Fixed monthly rate",
    description: "No surprises here! Pay the same fixed price each month.",
    icon: "💰"
  },
  {
    title: "Top-notch quality",
    description: "Insane design quality at your fingertips whenever you need it.",
    icon: "✨"
  },
  {
    title: "Flexible and scalable",
    description: "Scale up or down as needed, and pause or cancel at anytime.",
    icon: "📈"
  },
  {
    title: "Unique and all yours",
    description: "Each of your designs is made especially for you and is 100% yours.",
    icon: "🎨"
  }
] as const;

// Client logos (placeholder)
export const CLIENT_LOGOS = [
  "Amazon", "Google", "Meta", "Netflix", "Spotify", 
  "Airbnb", "Uber", "Slack", "Stripe", "Shopify"
] as const;
