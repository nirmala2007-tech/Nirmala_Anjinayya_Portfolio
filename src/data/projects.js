
export const categories = ['all', 'web', 'design'];

export const projectsData = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A personal website to showcase my skills and projects.',
    longDesc:
      'A responsive React portfolio featuring personal information, skills, projects, and contact details.',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'web',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Product Cost Calculator',
    description: 'A Java program to calculate the total product cost.',
    longDesc:
      'A beginner Java application that accepts a product name, price, and quantity and calculates the total cost.',
    tech: ['Java', 'Scanner', 'Basic Calculations'],
    category: 'web',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Python Coding Practice',
    description: 'Practice programs for problem-solving and DSA.',
    longDesc:
      'A learning collection of Python exercises covering arrays, loops, conditions, and fundamental problem-solving techniques.',
    tech: ['Python', 'DSA', 'Problem Solving'],
    category: 'design',
    featured: false,
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const SKILLS = [
  { name: 'HTML', level: 'Beginner', icon: '🌐' },
  { name: 'CSS', level: 'Beginner', icon: '🎨' },
  { name: 'JavaScript', level: 'Beginner', icon: '⚡' },
  { name: 'React', level: 'Beginner', icon: '⚛️' },
  { name: 'Java', level: 'Learning', icon: '☕' },
  { name: 'Python', level: 'Learning', icon: '🐍' }
];
