export interface PersonalInfo {
  name: string
  phone: string
  email: string
  location: string
  current_year: string
  student_id: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  cgpa?: string
  score?: string
  current_status?: string
  board?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  location: string
  impact: string
  responsibilities: string[]
  what_i_learned?: string[]
  technologies: string[]
}

export interface TechStack {
  [key: string]: string
}

export interface Project {
  title: string
  impact: string
  problem: string
  solution: string
  tech_stack: TechStack
  key_features: string[]
  outcome: string
  period: string
}

export interface Achievement {
  title: string
  description: string
  date: string
}

export interface Certification {
  title: string
  provider: string
  date: string
  link?: string
  image?: string
}

export interface Strength {
  strength: string
  evidence: string
}

export interface About {
  who_i_am: string
  what_im_doing_now: string
  what_i_aim_to_become: string
  strengths: Strength[]
}

export interface Branding {
  headlines: string[]
  tagline: string
  unique_positioning: string
  tone: string
}

export interface ContactLinks {
  email: string
  github: string
  linkedin: string
  leetcode: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  avatar?: string
}

export interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

export interface SkillJourneyMilestone {
  title: string
  date: string
  description: string
  type: "course" | "project" | "achievement"
}

export interface SkillJourney {
  category: string
  items: string[]
  milestones: SkillJourneyMilestone[]
  linkedProjects: string[]
}

export interface RoleTransition {
  title: string
  period: string
  note?: string
}

export interface SpaceJourneyEntry {
  platform: string
  handle: string
  followers: string
  period: string
  focus: string[]
  milestones: string[]
}

export interface PortfolioData {
  personal_info: PersonalInfo
  branding_hint: {
    tagline: string
    focus_areas: string[]
    unique_selling_point: string
    target_roles: string[]
  }
  summary: string
  education: Education[]
  skills: Record<string, string[]>
  experience: Experience[]
  projects: Project[]
  achievements: Achievement[]
  certifications: Certification[]
  coursework: string[]
  areas_of_interest: string[]
  contact_links: ContactLinks
  branding: Branding
  about: About
}
