import {
  DraftingCompass,
  GraduationCap,
  Cpu,
  Landmark,
  Network,
  TestTube,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const pillars = [
  {
    icon: DraftingCompass,
    title: 'Architecture',
  },
  {
    icon: GraduationCap,
    title: 'Education',
  },
  {
    icon: Cpu,
    title: 'Technology',
  },
  {
    icon: Landmark,
    title: 'Heritage',
  },
  {
    icon: Network,
    title: 'Ecosystem',
  },
  {
    icon: TestTube,
    title: 'Research',
  },
]

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-24 sm:py-32 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-sans text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
          What is Aether?
        </h2>
        <p className="mt-6 text-lg text-foreground/70 md:text-xl">
          Aether is a holistic ecosystem designed to bridge architecture students to the industry. We combine mentorship, skill development, collaboration, and mental wellness—powered by technology and grounded in African culture and sustainability.
        </p>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <h3 className="font-sans text-2xl font-bold tracking-tight">Our Vision</h3>
          <p className="mt-4 text-lg text-foreground/70">
            To cultivate the next generation of African architects by providing guidance, practical skills, and opportunities to grow into industry-ready professionals.
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <h3 className="font-sans text-2xl font-bold tracking-tight">Our Mission</h3>
          <ul className="mt-4 space-y-3 text-left text-lg text-foreground/70">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>Connect students to mentors and industry experts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>Provide practical, project-based learning experiences.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>Support mental wellness and resilience.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>Showcase student work and achievements.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>Encourage innovation, sustainability, and African-context design.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
