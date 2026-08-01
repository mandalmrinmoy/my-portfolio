export const profile = {
  name: 'Mrinmoy Mandal',
  role: 'MERN Stack Developer',
  tagline: 'I build things that work — and feel considered.',
  location: 'Kolkata, India · Remote',
  email: 'mrinmoymandal270@gmail.com',
  phone: '+91 7872989153',
  resume: '/resume.pdf',
  roles: [
    'MERN Stack Developer',
    'React Developer',
    'Frontend Engineer',
    'Node.js Developer',
    'Full-Stack Developer',
  ],
  bio: `MERN stack developer with hands-on experience building full-stack web
  applications using MongoDB, Express.js, React.js, and Node.js. I focus on
  responsive interfaces, REST APIs, authentication systems, and
  database-driven applications — and I like shipping things people can
  actually click on.`,
  socials: [
    { label: 'GitHub', href: 'https://github.com/mandalmrinmoy', key: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mrinmoy-mandal-3b70351b8',
      key: 'linkedin',
    },
    { label: 'Instagram', href: 'https://instagram.com/', key: 'instagram' },
    { label: 'Email', href: 'mailto:mrinmoymandal270@gmail.com', key: 'email' },
    { label: 'Phone', href: 'tel:+917872989153', key: 'phone' },
  ],
}

// icon keys map to react-icons/si components in Skills.jsx; color is the
// technology's real brand color
export const skills = [
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
  { name: 'React.js', icon: 'react', color: '#61DAFB' },
  { name: 'Redux Toolkit', icon: 'redux', color: '#764ABC' },
  { name: 'Node.js', icon: 'nodedotjs', color: '#5FA04E' },
  { name: 'Express.js', icon: 'express', color: '#EDEAE0' },
  { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
  { name: 'Mongoose', icon: 'mongoose', color: '#F04D35' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#38BDF8' },
  { name: 'JSON Web Tokens', icon: 'jsonwebtokens', color: '#EDEAE0' },
  { name: 'Postman', icon: 'postman', color: '#FF6C37' },
  { name: 'Git', icon: 'git', color: '#F05032' },
  { name: 'GitHub', icon: 'github', color: '#EDEAE0' },
]

// stage: 'plan' | 'build' | 'ship' — mirrors a real pipeline, used to color-code
export const projects = [
  {
    id: 'p1',
    stage: 'ship',
    title: 'ShopNest',
    year: '2025',
    image: '/projects/shopnest.png',
    description:
      'Full-stack MERN e-commerce platform with JWT authentication, product management, shopping cart, order processing, and an admin dashboard.',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux Toolkit',
      'JWT',
      'Cloudinary',
      'Razorpay',
    ],
    href: 'https://shopnest-mnq1.onrender.com',
    github: 'https://github.com/mandalmrinmoy/ShopNest',
  },
  {
    id: 'p2',
    stage: 'ship',
    title: 'Hotel-Booking Web App',
    year: '2025',
    image: '/projects/hotel-booking.png',
    description:
      'Responsive hotel-booking app for browsing hotels and rooms, viewing amenities and pricing, and navigating a full multi-page flow with filterable room listings.',
    tags: ['React', 'React Router', 'Tailwind CSS', 'JavaScript'],
    href: 'https://hotel-booking-app-chi-nine.vercel.app/',
    github: 'https://github.com/mandalmrinmoy/Hotel_booking_reactjs',
  },
  {
    id: 'p3',
    stage: 'ship',
    title: 'Agency-AI',
    year: '2026',
    image: '/projects/agency-ai.png',
    description:
      'Responsive landing page for an AI agency, showcasing services and solutions with reusable UI components and animated, motion-driven layouts.',
    tags: ['React', 'Tailwind CSS', 'Motion', 'Vercel'],
    href: 'https://agency-ai-two-rouge.vercel.app/',
    github: 'https://github.com/mandalmrinmoy/agency.AI',
  },
]

export const experience = [
  {
    id: 'e1',
    period: 'May 2025 — Present',
    role: 'MERN Stack Trainee',
    org: 'Euphoria Genx',
    description:
      'Trained in modern web development with HTML, CSS, Tailwind CSS, JavaScript, React.js, and Node.js. Built responsive, component-based apps with hands-on API integration and frontend optimization across multiple projects.',
  },
  {
    id: 'e2',
    period: 'Jul 2022 — Sep 2022',
    role: 'Node.js & Express Trainee',
    org: 'WebGuru Infosystems Pvt. Ltd.',
    description:
      'Learned Node.js fundamentals, event-driven programming, and the Express framework. Led a group project building an e-commerce website, scoring the highest marks among all groups.',
  },
  {
    id: 'e3',
    period: '2019 — 2023',
    role: 'B.Tech, Computer Science Engineering',
    org: 'Brainware University',
    description: 'Graduated with a CGPA of 8.01/10.',
  },
]
