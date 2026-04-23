export const COMPANY_DETAILS = {
  name: "OmShanti Infotech",
  email: "omshantiinfotech5@gmail.com",
  phone: "+91 9898292107",
  whatsapp: "+919898292107",
  address: "236, Shri Laxmi Nagar, Bedwas, Udaipur, Rajasthan, India",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=236,+Shri+Laxmi+Nagar,+Bedwas,+Udaipur,+Rajasthan,+India",
};

export const SERVICES = [
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Expertly crafted iOS and Android applications using cutting-edge technologies like React Native and Flutter.",
    features: [
      "iOS App Development (Swift, Objective-C)",
      "Android App Development (Java, Kotlin)",
      "Cross-platform solutions (React Native, Flutter)",
      "UI/UX Design for Mobile"
    ],
    icon: "Smartphone"
  },
  {
    id: "web",
    title: "Web Development",
    description: "Modern, responsive, and high-performance websites and web applications tailored to your business needs.",
    features: [
      "Next.js & React Applications",
      "Dynamic Business Websites",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)"
    ],
    icon: "Globe"
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "End-to-end development services focusing on scalable backends and robust database architectures.",
    features: [
      "RESTful API Development (Node.js/Express)",
      "Scalable Backend Architecture",
      "Database Design & Management (MongoDB)",
      "Third-party API Integrations"
    ],
    icon: "Layers"
  },
  {
    id: "uiux",
    title: "UI/UX & Performance",
    description: "User-centric design coupled with high-speed performance and SEO optimization.",
    features: [
      "Responsive & Intuitive Design",
      "Performance Tuning",
      "SEO & Analytics Integration",
      "Modern UI using Tailwind CSS"
    ],
    icon: "Zap"
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce App",
    description: "A full-featured mobile commerce platform with real-time tracking.",
    tech: ["React Native", "Node.js", "MongoDB"],
    category: "Mobile",
    image: "/projects/ecommerce.jpg"
  },
  {
    title: "Real Estate Portal",
    description: "High-performance web platform for property listings and virtual tours.",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    category: "Web",
    image: "/projects/realestate.jpg"
  },
  {
    title: "Health & Fitness Tracker",
    description: "Comprehensive fitness monitoring app with wearable integration.",
    tech: ["Flutter", "Express", "PostgreSQL"],
    category: "Mobile",
    image: "/projects/fitness.jpg"
  },
  {
    title: "SaaS Dashboard",
    description: "Advanced analytics dashboard for enterprise resource planning.",
    tech: ["React", "TypeScript", "D3.js"],
    category: "Web",
    image: "/projects/dashboard.jpg"
  }
];
