import Image from "next/image"
import { Code, Briefcase, Mail } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import Button3D from "@/components/ui/Button3D"

export default function HeroSection() {
  const { personal_info, branding_hint, contact_links } = portfolioData
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-32 pb-16 sm:px-6 md:grid-cols-[1.4fr_1fr] md:pt-40">
      <div>
        <p className="mb-3 text-muted">Hi, I&apos;m</p>
        <h1 className="font-display text-5xl leading-[1.02] font-extrabold sm:text-7xl">{personal_info.name}</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">{branding_hint.tagline}</p>
        <p className="mt-2 max-w-xl text-muted">{personal_info.location}. Machine Learning Engineer at DeepInfinity.ai.</p>
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
          <Button3D href="/projects" color="sun" size="lg">See my projects</Button3D>
          <Button3D href="#youtube" color="coral" size="lg">Watch my videos</Button3D>
          <Button3D href={contact_links.github} color="ink" icon={<Code size={18} />}>GitHub</Button3D>
          <Button3D href={contact_links.linkedin} color="cobalt" icon={<Briefcase size={18} />}>LinkedIn</Button3D>
          <Button3D href="/contact" color="mint" icon={<Mail size={18} />}>Contact</Button3D>
        </div>
      </div>
      <div className="mx-auto w-full max-w-xs">
        <Image
          src="/images/sahil_professional_Image.jpeg"
          alt={`Portrait of ${personal_info.name}`}
          width={640}
          height={800}
          priority
          className="aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-[0_12px_0_var(--brand-navy-light),0_28px_40px_rgba(0,0,0,0.35)]"
        />
      </div>
    </section>
  )
}
