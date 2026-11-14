import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"
import { site } from "@/data/site"

export const dynamic = "force-static"

// Testimonials and blog are left out until their content is verified (see docs/PROJECT_INVENTORY.md).
const pages = ["", "projects", "about", "experience", "skills", "achievements", "resume", "contact"]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((p) => ({ url: `${site.url}/${p ? `${p}/` : ""}` })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}/` })),
  ]
}
