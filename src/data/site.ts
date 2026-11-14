// Identity, links and creator content for the home page.
// YouTube videos and Instagram handles were checked on 2026-11-14.

export const site = {
  name: "Sahil Khan",
  role: "AI & Software Developer | Full-Stack Engineer | Technology Creator",
  tagline: "Building intelligent technology. Creating things that matter.",
  description:
    "Sahil Khan builds speech AI, LLM tools and full-stack products. Machine Learning Engineer at DeepInfinity.ai and Computer Science student at JNTUA College of Engineering.",
  url: "https://ssahil.vercel.app",
  email: "sorakayalapetasahilkhan@gmail.com",
  links: {
    github: "https://github.com/ssahilkhan",
    linkedin: "https://www.linkedin.com/in/sahil-khan-sorakayalapeta-9006a028a",
    youtube: "https://www.youtube.com/@ai.sahilkhan",
    instagram: "https://www.instagram.com/claudeai.sahil/",
    threads: "https://www.threads.net/@claudeai.sahil",
    x: "https://x.com/SahilkhanS2006",
    leetcode: "https://leetcode.com/u/ssahilkhan/",
  },
}

export interface Video {
  id: string
  title: string
  date: string
  short?: boolean
}

export const videos: Video[] = [
  { id: "8FjC8ZaZ1Xc", title: "Don't Miss These 5 GitHub Repos!", date: "2026-11-14" },
  { id: "Kpb37THvW20", title: "The Future of Creativity | Every Frame Is Code", date: "2026-11-11" },
  { id: "GUCaquw-vnU", title: "Stop Uploading Private Docs to Edit PDFs | Free Tools, No Sign-Up", date: "2026-11-10" },
  { id: "-5V6Q8OyLcI", title: "I Woke Up at Night to Test Claude on My First Face Video", date: "2026-11-08" },
  { id: "puNy7jaJCrE", title: "Be careful with this new OpenAI update", date: "2026-11-06" },
  { id: "BlvAjwYT-ck", title: "Claude skills", date: "2026-11-05" },
]

export const instagramAccounts = [
  {
    handle: "claudeai.sahil",
    url: "https://www.instagram.com/claudeai.sahil/",
    about: "AI tools, Claude workflows and the things I build, explained in short videos.",
  },
  {
    handle: "space_time_dilation",
    url: "https://www.instagram.com/space_time_dilation/",
    about: "Astronomy and space science for 1K+ followers.",
  },
  {
    handle: "sahilkhan.e",
    url: "https://www.instagram.com/sahilkhan.e/",
    about: "Personal account.",
  },
]
