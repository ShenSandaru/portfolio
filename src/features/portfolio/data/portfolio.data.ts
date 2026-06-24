import type {
  AboutContent,
  ContactContent,
  ExperienceItem,
  HeroContent,
  ProficiencyItem,
  Project,
  Testimonial,
} from "../domain/portfolio.types";

export const typingWords = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "Tech Innovator",
];

export const skills = [
  { iconClass: "fab fa-html5", label: "HTML5" },
  { iconClass: "fab fa-css3-alt", label: "CSS3" },
  { iconClass: "fab fa-js", label: "JavaScript" },
  { iconClass: "fab fa-react", label: "React" },
  { iconClass: "fab fa-vuejs", label: "Vue.js" },
  { iconClass: "fab fa-node", label: "Node.js" },
  { iconClass: "fab fa-python", label: "Python" },
  { iconClass: "fab fa-git-alt", label: "Git" },
  { iconClass: "fas fa-database", label: "MongoDB" },
  { iconClass: "fas fa-fire", label: "Firebase" },
  { iconClass: "fab fa-docker", label: "Docker" },
  { iconClass: "fab fa-figma", label: "Figma" },
];

export const heroContent: HeroContent = {
  badge: "Available for work",
  titleName: "Shen",
  titleRole: "Developer",
  intro:
    "I craft digital experiences that blend beautiful design with robust engineering. Specializing in modern web technologies, I bring ideas to life with clean code and creative solutions.",
  ctaPrimaryLabel: "View My Work",
  ctaPrimaryHref: "#projects",
  ctaSecondaryLabel: "Let's Talk",
  ctaSecondaryHref: "#contact",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Done" },
    { value: "30+", label: "Happy Clients" },
  ],
  badges: ["Fast & Scalable", "Modern Design", "Responsive"],
};

export const aboutContent: AboutContent = {
  title: "Who I Am",
  paragraphs: [
    "I'm a full-stack developer with a passion for building digital products that make a real difference. With expertise across the entire web stack, I combine technical excellence with creative thinking to deliver outstanding results.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or writing about my experiences in tech.",
  ],
  details: [
    { iconClass: "fas fa-user", text: "Shen" },
    { iconClass: "fas fa-map-marker-alt", text: "Remote / Worldwide" },
    { iconClass: "fas fa-envelope", text: "hello@shen.dev" },
    { iconClass: "fas fa-laptop-code", text: "Full-Stack Developer" },
  ],
  cards: [
    {
      iconClass: "fas fa-code",
      iconToneClass: "icon-purple",
      title: "Clean Code",
      description: "Maintainable, well-documented code",
    },
    {
      iconClass: "fas fa-palette",
      iconToneClass: "icon-pink",
      title: "UI/UX Design",
      description: "Beautiful user experiences",
    },
    {
      iconClass: "fas fa-database",
      iconToneClass: "icon-green",
      title: "Backend",
      description: "Robust server-side solutions",
    },
    {
      iconClass: "fas fa-cloud",
      iconToneClass: "icon-yellow",
      title: "DevOps",
      description: "Scalable cloud deployments",
    },
  ],
};

export const proficiency: ProficiencyItem[] = [
  { label: "Frontend Development", percent: 95 },
  { label: "Backend Development", percent: 90 },
  { label: "UI/UX Design", percent: 85 },
  { label: "DevOps & Cloud", percent: 75 },
];

export const projects: Project[] = [
  {
    iconClass: "fas fa-shopping-cart",
    tags: ["React", "Node.js", "MongoDB"],
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory, payment processing, and admin dashboard.",
    sourceUrl: "#",
    demoUrl: "#",
  },
  {
    iconClass: "fas fa-robot",
    tags: ["Python", "TensorFlow", "FastAPI"],
    title: "AI Dashboard",
    description:
      "Intelligent analytics dashboard with machine learning insights and real-time data visualization.",
    sourceUrl: "#",
    demoUrl: "#",
  },
  {
    iconClass: "fas fa-chart-line",
    tags: ["Vue.js", "D3.js", "Firebase"],
    title: "Analytics Tracker",
    description:
      "Real-time analytics platform with interactive charts, custom reports, and team collaboration.",
    sourceUrl: "#",
    demoUrl: "#",
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "2023 - Present",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    description:
      "Leading development of scalable web applications serving over 100K users. Architected microservices migration and mentored a team of 5 developers.",
  },
  {
    period: "2021 - 2023",
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    description:
      "Built and maintained multiple client-facing web applications using React and Node.js. Reduced load times by 40% through optimization.",
  },
  {
    period: "2019 - 2021",
    title: "Frontend Developer",
    company: "Creative Web Agency",
    description:
      "Developed responsive UI components and interactive features for various client projects. Collaborated with design team on UX improvements.",
  },
  {
    period: "2018 - 2019",
    title: "Junior Developer",
    company: "StartUp Labs",
    description:
      "Built internal tools and contributed to the main product's frontend. Gained foundational experience in agile development.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "An exceptional developer who delivers quality work consistently. His attention to detail and problem-solving skills are remarkable.",
    authorInitial: "S",
    authorName: "Sarah Johnson",
    authorRole: "CEO, TechWave",
  },
  {
    quote:
      "Working with him was a pleasure. He transformed our outdated platform into a modern, fast, and beautiful application.",
    authorInitial: "M",
    authorName: "Michael Chen",
    authorRole: "CTO, DataFlow",
  },
  {
    quote:
      "His expertise in both frontend and backend made our project seamless. Highly recommend for any full-stack needs.",
    authorInitial: "E",
    authorName: "Emily Rodriguez",
    authorRole: "Product Manager, BuildIt",
  },
];

export const contactContent: ContactContent = {
  introTitle: "Get in Touch",
  introDescription:
    "Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and collaborations.",
  methods: [
    { iconClass: "fas fa-envelope", label: "Email", value: "hello@shen.dev" },
    {
      iconClass: "fas fa-map-marker-alt",
      label: "Location",
      value: "Remote / Worldwide",
    },
    { iconClass: "fas fa-phone-alt", label: "Phone", value: "+1 (555) 123-4567" },
  ],
  socials: [
    { iconClass: "fab fa-github", label: "GitHub", href: "#" },
    { iconClass: "fab fa-linkedin-in", label: "LinkedIn", href: "#" },
    { iconClass: "fab fa-twitter", label: "Twitter", href: "#" },
    { iconClass: "fab fa-dribbble", label: "Dribbble", href: "#" },
    { iconClass: "fab fa-youtube", label: "YouTube", href: "#" },
  ],
};
