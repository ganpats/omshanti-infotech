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

export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  link?: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: "The Pao App",
    description: "Get up and go. Discover unique spots and hidden gems around you.",
    tech: ["Swift", "iOS", "Firebase"],
    category: "Mobile",
    link: "https://apps.apple.com/us/app/the-pao-app/id1398395194",
    image: "https://ganpats.github.io/images/Apps/PaoApp.jpg"
  },
  {
    title: "Wooden Street",
    description: "Furniture... bonded with love. India's finest custom furniture store.",
    tech: ["Objective-C", "iOS", "REST API"],
    category: "Mobile",
    link: "https://itunes.apple.com/in/app/wooden-street/id1162068644?mt=8",
    image: "https://ganpats.github.io/images/Apps/WoodenStreet.jpg"
  },
  {
    title: "Arena Two DApp",
    description: "Arena Two revolutionizes sports entertainment with real-time fan voting and interactive experiences.",
    tech: ["Next.js", "Web3", "Tailwind CSS"],
    category: "Web",
    link: "https://app.arenatwo.com/en",
    image: "https://ganpats.github.io/images/Websites/ArenaTwo.png"
  },
  {
    title: "vg.bio",
    description: "Create a secure, compliant link-in-bio that prevents shadow banning. Fully Instagram, Facebook, and TikTok friendly.",
    tech: ["Next.js", "TypeScript", "Node.js"],
    category: "Web",
    link: "https://vg.bio/en",
    image: "https://vg.bio/sloganed.png"
  },
  {
    title: "Sikho Kids",
    description: "Learn ABC, Hindi Varnmala, Numbers & more! Fun bilingual app for kids.",
    tech: ["Flutter", "Android", "iOS"],
    category: "Mobile",
    link: "https://play.google.com/store/apps/details?id=com.sikhokids.app&hl=en",
    image: "https://play-lh.googleusercontent.com/uYS8Kv8GDpQHUmrF8YRVUKYHz7zQQrTtV49VHfXVaPRAogde_OMmM_IMAt5-3NQ4wvGqVoORbWhvXoc5oM7-"
  },
  {
    title: "My Breathing",
    description: "Relieve stress and improve focus with guided breathing and mindfulness.",
    tech: ["Flutter", "Dart", "UX Design"],
    category: "Mobile",
    link: "https://play.google.com/store/apps/details?id=com.mybreathing.app&hl=en",
    image: "https://play-lh.googleusercontent.com/SWYiDanpBypPaSxPAL2on9_OdboMnZ4VIEtoMTDddkyj2isyRtzmrAA1VmyKBZdHFPO184kBYb87qcgxR6LUgYE"
  },
  {
    title: "Pao Media Company",
    description: "Highlights unique experiences and small, local businesses around the world.",
    tech: ["React", "Styled Components", "WordPress"],
    category: "Web",
    link: "https://paomediacompany.com/",
    image: "https://ganpats.github.io/images/Websites/PaoMedia.webp"
  },
  {
    title: "Arena Two",
    description: "8 Teams. 8 Cities. $8M Prize. A new 6-a-side live football tournament.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    category: "Web",
    link: "https://arenatwo.com/",
    image: "https://ganpats.github.io/images/Websites/ArenaTwo.png"
  },
  {
    title: "Aasin Atticus",
    description: "Bring Your Brand’s Creative Vision To Life.",
    tech: ["UI/UX", "Wordpress", "php"],
    category: "Web",
    link: "https://aasinatticus.com/",
    image: "https://ganpats.github.io/images/Websites/AasinAtticus.png"
  },
  {
    title: "MySIPonline",
    description: "Invest in Best Mutual Funds. Simplify your investment journey.",
    tech: ["Objective-C", "iOS", "Finance"],
    category: "Mobile",
    link: "https://itunes.apple.com/in/app/mysiponline-mutual-fund-app/id1246082058?mt=8",
    image: "https://ganpats.github.io/images/Apps/MySIPonline.jpg"
  },
  {
    title: "Rishi Prasad Gyan Pratiyogita",
    description: "Knowledge Competition App. Enhance your spiritual and cultural knowledge.",
    tech: ["Flutter", "Dart", "Firebase"],
    category: "Mobile",
    link: "https://apps.apple.com/in/app/rishi-prasad-gyan-pratiyogita/id6447197555",
    image: "https://ganpats.github.io/images/Apps/RishiPrasad.jpg"
  },
  {
    title: "Global Assignment Help",
    description: "Education & Assignment Help App. Expert assistance for your academic needs.",
    tech: ["Swift", "iOS", "Education"],
    category: "Mobile",
    link: "https://apps.apple.com/us/app/global-assignment-help/id1094249594",
    image: "https://ganpats.github.io/images/Apps/GlobalAssignmentHelp.jpg"
  },
  {
    title: "Mushroom Fall",
    description: "Navigate to bottom of never ending maze as fast as you can!",
    tech: ["Unity", "C#", "Game Design"],
    category: "Mobile",
    link: "https://play.google.com/store/apps/details?id=com.mushroomfall&hl=en",
    image: "https://play-lh.googleusercontent.com/lCtazS5PIddpJzWKQEsqb7Rb2K0Dp_x37RqgS6YRPz3uBBZWVu_KdXZNEBm-z_YJ7YA"
  }
];
