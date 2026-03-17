export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Planner', path: '/planner' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Admin', path: '/admin' },
];

export const whyTrailForge = [
  {
    title: 'Plan',
    description:
      'Build a route that accounts for remote camps, weather shifts, and gear readiness before you leave pavement behind.',
    accent: 'Expedition-ready itineraries with terrain-aware structure.',
  },
  {
    title: 'Explore',
    description:
      'Compare iconic landscapes, map realistic trip durations, and keep every leg of the journey visible for the full crew.',
    accent: 'Discover destinations that reward serious travelers.',
  },
  {
    title: 'Survive',
    description:
      'Keep emergency contacts, medical stops, and food and water sourcing attached to each day instead of buried in notes.',
    accent: 'Critical details stay close when conditions turn.',
  },
];

export const featuredDestinations = [
  {
    name: 'Patagonia',
    region: 'Chile & Argentina',
    duration: '10-18 days',
    difficulty: 'Advanced',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Sahara',
    region: 'North Africa',
    duration: '5-12 days',
    difficulty: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Himalayas',
    region: 'Nepal & India',
    duration: '12-24 days',
    difficulty: 'Expert',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Amazon',
    region: 'South America',
    duration: '7-14 days',
    difficulty: 'Advanced',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Iceland',
    region: 'Nordic Atlantic',
    duration: '6-10 days',
    difficulty: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Borneo',
    region: 'Malaysia & Indonesia',
    duration: '8-14 days',
    difficulty: 'Advanced',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  },
];

export const testimonials = [
  {
    name: 'Maya Chen',
    trip: 'Patagonia Overland Loop',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    quote:
      'TrailForge turned a complicated two-week trek into something disciplined and calm. The daily rescue details were the difference.',
  },
  {
    name: 'Owen Brooks',
    trip: 'Iceland Winter Traverse',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    quote:
      'The planner keeps risk, comfort, and logistics in the same place. It feels built for people who actually leave the grid.',
  },
  {
    name: 'Sofia Alvarez',
    trip: 'Amazon River Expedition',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    quote:
      'We used TrailForge to coordinate gear, emergency contacts, and water sourcing across six days. No spreadsheet drift, no chaos.',
  },
];

export const pricingTiers = [
  {
    name: 'Explorer',
    monthlyPrice: 0,
    description: 'For solo planners sketching their first remote route.',
    cta: 'Start Free',
    highlighted: false,
    features: ['1 active trip', 'Basic itinerary builder', 'Local storage saves', 'Community destination guides'],
  },
  {
    name: 'Ranger',
    monthlyPrice: 9,
    description: 'For regular weekend escapes and small teams.',
    cta: 'Upgrade to Ranger',
    highlighted: true,
    features: ['Unlimited active trips', 'PDF exports', 'Advanced gear templates', 'Weather-aware planning badges'],
  },
  {
    name: 'Summit',
    monthlyPrice: 29,
    description: 'For expedition leaders and serious operators.',
    cta: 'Go Summit',
    highlighted: false,
    features: ['Team collaboration workflow', 'Priority route support', 'Premium destination collections', 'Admin insights and reporting'],
  },
];

export const comparisonRows = [
  { feature: 'Active trips', Explorer: '1', Ranger: 'Unlimited', Summit: 'Unlimited' },
  { feature: 'PDF exports', Explorer: 'No', Ranger: 'Yes', Summit: 'Yes' },
  { feature: 'Gear templates', Explorer: 'Starter', Ranger: 'Expanded', Summit: 'Full library' },
  { feature: 'Planning analytics', Explorer: 'No', Ranger: 'Basic', Summit: 'Advanced' },
  { feature: 'Priority support', Explorer: 'No', Ranger: 'No', Summit: 'Yes' },
];

export const pricingFaqs = [
  {
    question: 'Can I switch plans after I start?',
    answer: 'Yes. Plan changes are immediate, and annual subscribers keep the discounted rate when moving up a tier.',
  },
  {
    question: 'Does the free plan include trip saves?',
    answer: 'Yes. Explorer includes local trip saving in your browser and one active itinerary at a time.',
  },
  {
    question: 'What happens when my annual term ends?',
    answer: 'Your subscription renews at the same annual discount unless you cancel before the renewal date.',
  },
  {
    question: 'Do you offer a team plan?',
    answer: 'Summit is designed for small guiding teams and expedition planners who need shared operational visibility.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Monthly plans can be canceled any time. Annual plans are refundable within the first 14 days.',
  },
];

export const teamMembers = [
  {
    name: 'Lena Hart',
    role: 'Founder & Lead Cartographer',
    bio: 'Former wilderness guide who built TrailForge after seeing too many expedition plans split across notebooks, chats, and memory.',
    avatar:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Marcus Vale',
    role: 'Head of Operations',
    bio: 'Coordinates route systems, seasonal planning standards, and the field-tested frameworks used in every trip template.',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Aisha Noor',
    role: 'Safety & Medical Advisor',
    bio: 'Emergency response specialist focused on keeping backcountry plans practical when the nearest clinic is hours away.',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Theo Mercer',
    role: 'Product Design Lead',
    bio: 'Shapes the product around the needs of travelers who want premium tools without losing the grit of real field planning.',
    avatar:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
  },
];

export const companyStats = [
  { label: 'Trips Planned', value: '84K+' },
  { label: 'Countries Covered', value: '62' },
  { label: 'Active Users', value: '19.4K' },
  { label: 'Years Running', value: '7' },
];

export const timelineMilestones = [
  { year: '2019', title: 'TrailForge begins', detail: 'The first planning framework was built for Patagonia and Ladakh overland trips.' },
  { year: '2020', title: 'Field testing', detail: 'A network of guides and independent travelers pressure-tested the daily itinerary model.' },
  { year: '2022', title: 'Gear intelligence', detail: 'Category-based packing systems and emergency planning layers were added.' },
  { year: '2024', title: 'Remote community launch', detail: 'TrailForge opened to a broader audience of off-grid travelers and route leaders.' },
  { year: '2026', title: 'Operational dashboard', detail: 'Admin-grade insights and premium planning workflows arrived for expedition teams.' },
];

export const contactSubjects = [
  'Trip planning help',
  'Partnerships',
  'Billing question',
  'Bug report',
  'Press inquiry',
];

export const footerLinks = {
  product: ['Planner', 'Pricing', 'Admin'],
  company: ['About', 'Contact', 'Field Journal'],
  resources: ['Gear Library', 'Safety Notes', 'Route Templates'],
};

export const overviewStats = [
  { label: 'Total Users', value: '19,402', change: '+8.4%', direction: 'up' },
  { label: 'Active Trips', value: '4,186', change: '+12.1%', direction: 'up' },
  { label: 'Revenue', value: '$48,920', change: '+6.8%', direction: 'up' },
  { label: 'New Signups', value: '612', change: '-2.3%', direction: 'down' },
];

export const adminRecentTrips = [
  { user: 'Maya Chen', destination: 'Patagonia', dates: 'Apr 12 - Apr 24', status: 'Active' },
  { user: 'Nina Scott', destination: 'Iceland', dates: 'May 02 - May 08', status: 'Completed' },
  { user: 'Arjun Rao', destination: 'Himalayas', dates: 'Jun 17 - Jul 01', status: 'Active' },
  { user: 'Luca Mori', destination: 'Sahara', dates: 'Mar 29 - Apr 03', status: 'Cancelled' },
];

export const adminUsers = [
  { name: 'Owen Brooks', email: 'owen@trailforge.co', plan: 'Summit', joined: '2025-11-14', status: 'Active' },
  { name: 'Maya Chen', email: 'maya@example.com', plan: 'Ranger', joined: '2025-09-02', status: 'Active' },
  { name: 'Sofia Alvarez', email: 'sofia@wildmail.com', plan: 'Explorer', joined: '2026-01-19', status: 'Trial' },
  { name: 'Theo Barrett', email: 'theo@northline.io', plan: 'Ranger', joined: '2026-02-06', status: 'Paused' },
];

export const monthlyTrips = [
  { month: 'Oct', trips: 180 },
  { month: 'Nov', trips: 240 },
  { month: 'Dec', trips: 210 },
  { month: 'Jan', trips: 310 },
  { month: 'Feb', trips: 360 },
  { month: 'Mar', trips: 420 },
];

export const recentActivity = [
  { title: 'Summit account upgraded', detail: 'Northline Expeditions moved from Ranger to Summit.', time: '14m ago' },
  { title: 'New template published', detail: 'Cold-weather shelter checklist is now live.', time: '46m ago' },
  { title: 'Patagonia route exported', detail: 'Maya Chen printed a 12-day itinerary.', time: '1h ago' },
  { title: 'Support ticket resolved', detail: 'Billing issue cleared for ranger-tier member.', time: '3h ago' },
];

export const gearCategories = {
  Survival: ['Firestarter', 'Multi-tool', 'Emergency bivy', 'Signal mirror'],
  Navigation: ['Compass', 'Topo map', 'GPS beacon', 'Offline route file'],
  Shelter: ['Four-season tent', 'Ground pad', 'Repair tape', 'Sleeping bag'],
  Food: ['Stove kit', 'Water filter', 'Dry rations', 'Electrolytes'],
  Medical: ['First aid kit', 'Trauma wrap', 'Medication pouch', 'Blister care'],
};
