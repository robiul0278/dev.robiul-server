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
        { value: "2+", label: "Years Experience" },
        { value: "20+", label: "Projects Delivered" },
        { value: "15+", label: "Happy Clients" },
        { value: "30+", label: "Technologies Used" },
      ],
      experiences: [
        {
          role: "Web Developer",
          company: "Velocity Digital Inc",
          location: "Canada (Remote)",
          period: "2025 - Present",
          type: "Full-time",
          description: "Working as a Web Developer at Velocity Digital Inc. Building and maintaining web applications, collaborating with cross-functional teams to deliver high-quality digital solutions.",
          achievements: ["Contributing to production-level web applications", "Collaborating with international development team", "Delivering responsive and performant web solutions"],
          technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"],
        },
        {
          role: "Freelance Full-Stack Developer",
          company: "Self-Employed",
          location: "Remote",
          period: "2023 - Present",
          type: "Freelance",
          description: "Building custom web applications for clients worldwide. Specializing in React/Next.js frontends with Node.js backends.",
          achievements: ["Developed custom web applications for multiple clients", "Maintained high client satisfaction", "Delivered projects on time and within budget"],
          technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
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

        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#services", label: "Services" },
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
