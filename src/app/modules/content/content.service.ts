import { ISiteContent } from './content.interface';
import { siteContentModel } from './content.model';

const getContent = async (): Promise<ISiteContent | null> => {
  const result = await siteContentModel.findOne().lean();
  return result;
};

const updateContent = async (payload: ISiteContent): Promise<ISiteContent | null> => {
  const existing = await siteContentModel.findOne();
  if (existing) {
    const result = await siteContentModel.findByIdAndUpdate(existing._id, payload, {
      new: true,
      runValidators: true,
    });
    return result;
  }
  const result = await siteContentModel.create(payload);
  return result;
};

const seedDefaultContent = async (): Promise<ISiteContent> => {
  const existing = await siteContentModel.findOne();
  if (existing) return existing;

  const defaultContent: ISiteContent = {
    hero: {
      greeting: "Hello, I'm",
      firstName: "Robiul",
      lastName: "Hasan",
      roles: ["Full-Stack Developer", "UI/UX Designer", "Problem Solver", "Creative Architect"],
      description: "Building digital experiences that combine aesthetic beauty with technical excellence. Specializing in creating immersive, performant applications.",
      location: "Dhaka, Bangladesh",
      resumeUrl: "https://drive.google.com/file/d/1CAFJ2bK8N8ChI_YL44ml4oo506l4ACaM/view?usp=drive_link",
      availabilityText: "Available",
      experienceBadge: "3+ Years Exp",
      stats: [
        { value: "3+", label: "Years Experience" },
        { value: "50+", label: "Projects Completed" },
        { value: "30+", label: "Happy Clients" },
      ],
      socialLinks: [
        { label: "GitHub", url: "https://github.com/robiul0278", icon: "Github" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/robiul-hasan-54ba1824b", icon: "Linkedin" },
        { label: "Twitter", url: "#", icon: "Twitter" },
        { label: "Email", url: "mailto:robiul0278@gmail.com", icon: "Mail" },
      ],
    },
    about: {
      subtitle: "Get to Know Me",
      titleHighlight: "Me",
      paragraphs: [
        "I'm a passionate Full-Stack Developer with over 3 years of experience building web applications that make a difference. My journey started with curiosity about how things work on the web, and it has evolved into a full-fledged career.",
        "I specialize in creating seamless digital experiences, from responsive frontends to robust backends. Whether it's crafting pixel-perfect UIs or architecting scalable systems, I bring dedication and creativity to every project.",
        "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or helping others learn the craft. I believe in continuous learning and sharing knowledge with the community.",
      ],
      highlights: [
        { icon: "Code2", title: "Clean Code", description: "Writing maintainable, scalable, and well-documented code that stands the test of time." },
        { icon: "Palette", title: "Modern Design", description: "Creating beautiful, intuitive interfaces with attention to typography, color, and UX." },
        { icon: "Zap", title: "Performance", description: "Optimizing for speed and efficiency, ensuring smooth user experiences across devices." },
        { icon: "Users", title: "Collaboration", description: "Working closely with teams and clients to deliver solutions that exceed expectations." },
        { icon: "Award", title: "Quality", description: "Maintaining high standards through thorough testing and attention to detail." },
        { icon: "Rocket", title: "Innovation", description: "Continuously learning and adopting new technologies to stay ahead of the curve." },
      ],
      timeline: [
        { year: "2023 - Present", title: "Freelance Developer", description: "Building custom web applications for clients worldwide, specializing in full-stack development with React and Node.js." },
        { year: "2022 - 2023", title: "Frontend Developer", description: "Developed responsive web applications using React, Next.js, and modern CSS frameworks." },
        { year: "2021 - 2022", title: "Web Development Journey", description: "Started learning web development and built numerous personal projects to hone skills." },
      ],
      stats: [
        { value: 3, suffix: "+", label: "Years Exp" },
        { value: 50, suffix: "+", label: "Projects" },
        { value: 30, suffix: "+", label: "Clients" },
      ],
      cvUrl: "https://drive.google.com/file/d/1CAFJ2bK8N8ChI_YL44ml4oo506l4ACaM/view?usp=drive_link",
    },
    skills: {
      subtitle: "My Expertise",
      titleHighlight: "Stack",
      description: "Technologies and tools I use to bring ideas to life",
      categories: [
        { id: "languages", name: "Languages", icon: "Code", color: "from-violet-500 to-purple-500", skills: ["JavaScript", "TypeScript", "Python", "SQL", "Bash"] },
        { id: "frontend", name: "Frontend", icon: "Layout", color: "from-blue-500 to-cyan-500", skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "GSAP", "Redux", "RTK Query"] },
        { id: "backend", name: "Backend", icon: "Server", color: "from-green-500 to-emerald-500", skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "GraphQL"] },
        { id: "database", name: "Databases", icon: "Database", color: "from-amber-500 to-orange-500", skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL"] },
        { id: "devops", name: "DevOps & Tools", icon: "Cloud", color: "from-red-500 to-pink-500", skills: ["Git", "GitHub", "Vercel", "Netlify", "Docker", "CI/CD", "AWS"] },
        { id: "design", name: "Design & UI", icon: "Palette", color: "from-pink-500 to-rose-500", skills: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Accessibility"] },
      ],
      coreSkills: [
        { name: "React / Next.js", icon: "FaReact", color: "#61DAFB" },
        { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
        { name: "Node.js / Express", icon: "FaNodeJs", color: "#339933" },
        { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38BDF8" },
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
        { name: "Framer Motion", icon: "SiFramer", color: "#BB4B96" },
      ],
    },
    experience: {
      subtitle: "Career Path",
      titleHighlight: "Experience",
      description: "My professional journey and growth",
      stats: [
        { value: "3+", label: "Years Experience" },
        { value: "20+", label: "Projects Delivered" },
        { value: "15+", label: "Happy Clients" },
        { value: "50+", label: "Technologies Used" },
      ],
      experiences: [
        {
          role: "Freelance Full-Stack Developer",
          company: "Self-Employed",
          location: "Dhaka, Bangladesh",
          period: "2023 - Present",
          type: "Full-time",
          description: "Building custom web applications for clients worldwide. Specializing in React/Next.js frontends with Node.js backends. Delivered 20+ projects with 95% client satisfaction rate.",
          achievements: ["Developed 20+ custom web applications", "Maintained 95% client satisfaction", "Reduced project delivery time by 30%"],
          technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
        },
        {
          role: "Frontend Developer",
          company: "Tech Solutions Ltd",
          location: "Dhaka, Bangladesh",
          period: "2022 - 2023",
          type: "Full-time",
          description: "Built responsive web applications using React and modern CSS frameworks. Collaborated with UX designers to implement pixel-perfect interfaces.",
          achievements: ["Improved site performance by 40%", "Led migration to Next.js", "Mentored 2 junior developers"],
          technologies: ["React", "JavaScript", "Tailwind CSS", "GSAP", "Redux"],
        },
        {
          role: "Junior Web Developer",
          company: "StartupHub",
          location: "Dhaka, Bangladesh",
          period: "2021 - 2022",
          type: "Full-time",
          description: "Started professional career building WordPress sites and gradually transitioned to custom web development. Learned full-stack fundamentals.",
          achievements: ["Built 15+ WordPress websites", "Completed 5 certification courses", "Won internal hackathon"],
          technologies: ["JavaScript", "PHP", "WordPress", "HTML/CSS", "jQuery"],
        },
      ],
    },
    services: {
      subtitle: "What I Offer",
      titleHighlight: "Services",
      description: "Comprehensive solutions tailored to your needs",
      services: [
        { icon: "Code2", title: "Frontend Development", description: "Building responsive, performant, and accessible web applications using React, Next.js, and modern CSS frameworks.", features: ["React / Next.js", "Responsive Design", "Performance Optimization", "Accessibility"], color: "from-blue-500 to-cyan-500" },
        { icon: "Server", title: "Backend Development", description: "Creating robust APIs and server-side applications with Node.js, Express, and MongoDB for scalable solutions.", features: ["Node.js / Express", "REST APIs", "MongoDB", "Authentication"], color: "from-green-500 to-emerald-500" },
        { icon: "Palette", title: "UI/UX Design", description: "Designing intuitive user interfaces with a focus on usability, aesthetics, and modern design trends.", features: ["Figma Design", "Wireframing", "Prototyping", "Design Systems"], color: "from-pink-500 to-rose-500" },
        { icon: "Smartphone", title: "Responsive Design", description: "Ensuring your website looks and works perfectly on all devices, from mobile phones to large desktops.", features: ["Mobile-First", "Cross-Browser", "Fluid Layouts", "Touch Optimization"], color: "from-violet-500 to-purple-500" },
        { icon: "Zap", title: "Performance Tuning", description: "Optimizing web applications for speed and efficiency, ensuring smooth user experiences.", features: ["Code Splitting", "Caching", "Lazy Loading", "Core Web Vitals"], color: "from-amber-500 to-orange-500" },
        { icon: "Shield", title: "Security & SEO", description: "Implementing security best practices and SEO strategies to improve visibility and protect applications.", features: ["HTTPS Setup", "SEO Optimization", "Best Practices", "Analytics"], color: "from-red-500 to-pink-500" },
      ],
      process: [
        { title: "Discovery", description: "Understanding your vision, goals, and requirements through detailed discussions." },
        { title: "Planning", description: "Creating a comprehensive roadmap with timelines, milestones, and technical approach." },
        { title: "Design & Develop", description: "Bringing your ideas to life with modern designs and clean, maintainable code." },
        { title: "Launch & Support", description: "Deploying your project and providing ongoing support for continued success." },
      ],
    },
    testimonials: {
      subtitle: "Client Reviews",
      titleHighlight: "Say",
      testimonials: [
        { name: "Sarah Mitchell", role: "CEO, TechStart", location: "San Francisco, USA", avatar: "SM", content: "Robiul delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and problem-solving skills made the entire process seamless. Highly recommended!", rating: 5 },
        { name: "James Rodriguez", role: "Product Manager, InnovateCo", location: "London, UK", avatar: "JR", content: "Working with Robiul was a fantastic experience. He transformed our outdated website into a modern, high-performing application. His communication and technical expertise are top-notch.", rating: 5 },
        { name: "Emily Chen", role: "Founder, DesignHub", location: "Toronto, Canada", avatar: "EC", content: "Robiul brings a unique blend of technical skill and creative vision to every project. He built our platform from scratch and we're thrilled with the results. A true professional!", rating: 5 },
        { name: "Michael Thompson", role: "CTO, DataFlow", location: "New York, USA", avatar: "MT", content: "Exceptional developer who truly understands modern web technologies. Robiul's work on our dashboard improved performance by 40%. We'll definitely be working together again.", rating: 5 },
        { name: "Lisa Anderson", role: "Creative Director, BrandStudio", location: "Sydney, Australia", avatar: "LA", content: "Robiul's ability to translate design into code is remarkable. He brought our Figma designs to life with pixel-perfect precision. The attention to detail is outstanding.", rating: 5 },
      ],
    },
    contact: {
      subtitle: "Get in Touch",
      titleHighlight: "Connect",
      description: "Have a project in mind? Let's work together to bring your ideas to life.",
      location: "Dhaka, Bangladesh",
      availability: "Mon - Sat, 9AM - 8PM (UTC+6)",
      email: "robiul0278@gmail.com",
      socialLinks: [
        { label: "Email", url: "mailto:robiul0278@gmail.com", icon: "Mail" },
        { label: "GitHub", url: "https://github.com/robiul0278", icon: "Github" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/robiul-hasan-54ba1824b", icon: "Linkedin" },
        { label: "Twitter", url: "#", icon: "Twitter" },
      ],
    },
    footer: {
      brandName: "dev.robiul",
      brandTagline: "Full-Stack Developer crafting beautiful, performant web experiences. Let's work together to bring your ideas to life.",
      navLinks: [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#services", label: "Services" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#contact", label: "Contact" },
      ],
      socialLinks: [
        { label: "GitHub", url: "https://github.com/robiul0278", icon: "Github" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/robiul-hasan-54ba1824b", icon: "Linkedin" },
        { label: "Twitter", url: "#", icon: "Twitter" },
        { label: "Email", url: "mailto:robiul0278@gmail.com", icon: "Mail" },
      ],
      email: "robiul0278@gmail.com",
      location: "Dhaka, Bangladesh",
      availabilityText: "Available for freelance",
      copyrightName: "Robiul Hasan",
      bottomTagline: "CRAFTING DIGITAL EXPERIENCES",
    },
  };

  const result = await siteContentModel.create(defaultContent);
  return result;
};

export const contentServices = {
  getContent,
  updateContent,
  seedDefaultContent,
};
