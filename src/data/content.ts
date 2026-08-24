/* ==========================================================================
   Central content for Simpleclix.
   Edit services, process steps, stats, projects, team, and metrics here —
   the components render from this file.
   ========================================================================== */

export interface Service {
  number: string;
  title: string;
  text: string;
  icon: string;
}

export const webServices: Service[] = [
  {
    number: '01',
    title: 'Website Design',
    text: 'Modern, responsive interfaces that put your brand in the best light.',
    icon: 'palette',
  },
  {
    number: '02',
    title: 'Web Development',
    text: 'Fast, secure, and scalable builds with clean, maintainable code.',
    icon: 'code',
  },
  {
    number: '03',
    title: 'E-Commerce',
    text: 'Online stores engineered for smooth checkout and higher sales.',
    icon: 'cart',
  },
  {
    number: '04',
    title: 'Landing Pages',
    text: 'High-converting pages designed around a single clear goal.',
    icon: 'rocket',
  },
  {
    number: '05',
    title: 'UI/UX Design',
    text: 'Interfaces and flows shaped around how real users behave.',
    icon: 'ux',
  },
  {
    number: '06',
    title: 'Web Applications',
    text: 'Custom tools and platforms that streamline your operations.',
    icon: 'apps',
  },
  {
    number: '07',
    title: 'Website Optimization',
    text: 'Speed, Core Web Vitals, and SEO tuning that keep you ahead.',
    icon: 'gauge',
  },
];

export const marketingServices: Service[] = [
  {
    number: '01',
    title: 'SEO',
    text: 'Technical and content SEO that lifts rankings and organic traffic.',
    icon: 'seo',
  },
  {
    number: '02',
    title: 'Social Media Marketing',
    text: 'Communities that turn followers into loyal customers.',
    icon: 'social',
  },
  {
    number: '03',
    title: 'Paid Advertising',
    text: 'Google and Meta campaigns built for maximum return.',
    icon: 'ads',
  },
  {
    number: '04',
    title: 'Content Strategy',
    text: 'Plans and content that inform, persuade, and convert.',
    icon: 'content',
  },
  {
    number: '05',
    title: 'Brand Promotion',
    text: 'A consistent presence that makes your brand recognizable.',
    icon: 'brand',
  },
  {
    number: '06',
    title: 'Campaign Management',
    text: 'End-to-end execution, tracking, and refinement.',
    icon: 'campaign',
  },
  {
    number: '07',
    title: 'Analytics',
    text: 'Clear dashboards that turn data into confident decisions.',
    icon: 'analytics',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    text: 'We dig into your business, audience, and goals to define the right strategy.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'We craft the architecture, wireframes, and visual direction of the solution.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'We develop a fast, reliable website or platform that matches the vision.',
  },
  {
    number: '04',
    title: 'Launch',
    text: 'We test, optimize, and ship — then connect the marketing that drives growth.',
  },
  {
    number: '05',
    title: 'Grow',
    text: 'We measure, iterate, and scale what works so results keep compounding.',
  },
];

export const stats = [
  { label: 'Web Solutions', value: '150+', sub: 'PROJECTS SHIPPED' },
  { label: 'Digital Marketing', value: '98%', sub: 'CLIENT RETENTION' },
  { label: 'UI / UX', value: '4.9/5', sub: 'AVERAGE RATING' },
  { label: 'SEO', value: '#1', sub: 'KEYWORD RANKINGS' },
  { label: 'Performance', value: '90+', sub: 'LIGHTHOUSE SCORE' },
];

export interface Project {
  title: string;
  category: 'Web' | 'Marketing' | 'UI/UX';
  description: string;
  image: string;
  alt: string;
  type: string;
  stack: string;
  status: string;
  result: string;
}

export const projects: Project[] = [
  {
    title: 'Meridian Group',
    category: 'Web',
    description: 'A polished corporate platform that turns visitors into qualified enquiries.',
    image: '/images/portfolio/corporate-website.svg',
    alt: 'Meridian Group corporate website interface',
    type: 'CORPORATE',
    stack: 'ASTRO / JS',
    status: 'LIVE',
    result: '+32% LEADS',
  },
  {
    title: 'Bloom & Co.',
    category: 'Web',
    description: 'A boutique storefront with a fast checkout and a brand customers remember.',
    image: '/images/portfolio/ecommerce-store.svg',
    alt: 'Bloom & Co. e-commerce storefront',
    type: 'E-COMMERCE',
    stack: 'ASTRO / JS',
    status: 'LIVE',
    result: '2.1× SALES',
  },
  {
    title: 'Spice Garden',
    category: 'Web',
    description: 'A mouth-watering restaurant site with seamless online reservations.',
    image: '/images/portfolio/restaurant-website.svg',
    alt: 'Spice Garden restaurant website',
    type: 'RESTAURANT',
    stack: 'ASTRO / JS',
    status: 'LIVE',
    result: '+45% BOOKINGS',
  },
  {
    title: 'Vertex SEO',
    category: 'Marketing',
    description: 'A search campaign that took a regional brand to the top of the results.',
    image: '/images/portfolio/seo-campaign.svg',
    alt: 'Vertex SEO campaign dashboard',
    type: 'SEO',
    stack: 'ANALYTICS',
    status: 'LIVE',
    result: '+212% TRAFFIC',
  },
  {
    title: 'Pulse Social',
    category: 'Marketing',
    description: 'A social campaign that grew engagement and built a loyal community.',
    image: '/images/portfolio/social-campaign.svg',
    alt: 'Pulse Social campaign interface',
    type: 'SOCIAL',
    stack: 'META ADS',
    status: 'LIVE',
    result: '+160% ENGAGEMENT',
  },
  {
    title: 'FinFlow',
    category: 'UI/UX',
    description: 'A clean financial dashboard designed around real user workflows.',
    image: '/images/portfolio/finance-dashboard.svg',
    alt: 'FinFlow dashboard user interface',
    type: 'WEB APP',
    stack: 'REACT',
    status: 'LIVE',
    result: '−40% MANUAL WORK',
  },
];

export const team = [
  {
    name: 'Pawara Kaveesha',
    role: 'Founder',
    description: "Founder of Simpleclix, focused on building the company's digital vision and delivering technology-driven solutions for modern businesses.",
    image: '/images/team/pawara.jpeg',
    alt: 'Portrait of Pawara Kaveesha',
    linkedin: 'https://www.linkedin.com/in/pawara-kaveesha-86b4b121b/',
  },
  {
    name: 'Navodya Dulakshi',
    role: 'Lead Marketing Specialist',
    description: 'Leads digital marketing strategies, campaigns, audience growth, and performance-focused marketing initiatives for Simpleclix clients.',
    image: '/images/team/navodya.jpeg',
    alt: 'Portrait of Navodya Dulakshi',
    linkedin: 'https://www.linkedin.com/in/navodya-dulakshi-3a03b82bb/',
  },
  {
    name: 'Jithmi Suraweera',
    role: 'Web & Marketing Designer',
    description: 'Combines web design, visual communication, and digital marketing to create engaging and effective online experiences.',
    image: '/images/team/jithmi.jpeg',
    alt: 'Portrait of Jithmi Suraweera',
    linkedin: 'https://www.linkedin.com/in/jithmi-suraweera-27bb26373/',
  },
  {
    name: 'Pruthivi Akash',
    role: 'Content Lead',
    description: 'Develops creative content and communication strategies that help brands connect with their audiences and strengthen their digital presence.',
    image: '/images/team/akash.jpeg',
    alt: 'Portrait of Pruthivi Akash',
    linkedin: 'https://www.linkedin.com/in/janitha-akash-942b192b/',
  },
];

export const whyUs = [
  {
    number: '01',
    title: 'Performance First',
    text: 'Fast, optimized digital experiences that load quickly and rank well.',
  },
  {
    number: '02',
    title: 'Technical Expertise',
    text: 'Modern technologies and scalable solutions built to last.',
  },
  {
    number: '03',
    title: 'Marketing Focused',
    text: 'Digital strategies built around measurable, compounding growth.',
  },
  {
    number: '04',
    title: 'Business Driven',
    text: 'Technology designed around actual business objectives — not vanity metrics.',
  },
];

export interface Metric {
  label: string;
  code: string;
  value: string;
  delta: string;
  trend: number[];
}

export const metrics: Metric[] = [
  { label: 'Website Traffic', code: 'TRAFFIC', value: '148%', delta: '+38% MO/MO', trend: [20, 34, 30, 46, 44, 58, 62, 74] },
  { label: 'Search Visibility', code: 'SEARCH', value: '212%', delta: '+52% MO/MO', trend: [14, 22, 30, 26, 40, 52, 60, 78] },
  { label: 'Social Engagement', code: 'SOCIAL', value: '160%', delta: '+29% MO/MO', trend: [26, 30, 42, 40, 54, 56, 68, 82] },
  { label: 'Conversions', code: 'CONVERSIONS', value: '94%', delta: '+18% MO/MO', trend: [18, 26, 28, 36, 42, 48, 56, 70] },
];

export const projectsCategories = ['All', 'Web', 'Marketing', 'UI/UX'];
