import { Users, Lightbulb, Library, Globe, Award, Heart, Cpu } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const pillars = [
  {
    icon: Users,
    title: 'Mentorship & Guidance',
    description: 'Structured mentorship from professionals, alumni, and senior students to guide your growth and career pathway.',
  },
  {
    icon: Lightbulb,
    title: 'Skill Development',
    description: 'Workshops and projects in BIM, parametric design, sustainability, and more—bringing classroom learning to real-world application.',
  },
  {
    icon: Library,
    title: 'Collaboration & Community',
    description: 'Work together across schools, disciplines, and regions through team challenges, critiques, and peer feedback.',
  },
  {
    icon: Award,
    title: 'Recognition & Portfolio',
    description: 'Showcase your projects, earn digital badges, and gain visibility with competitions and professional feedback.',
  },
  {
    icon: Heart,
    title: 'Mental Wellness',
    description: 'Resources, webinars, and peer support to help you manage stress and stay resilient.',
  },
  {
    icon: Globe,
    title: 'Innovation & Sustainability',
    description: 'Explore experimental projects, sustainable design, and climate-responsive architecture solutions.',
  },
  {
    icon: Cpu,
    title: 'Technology-Enabled',
    description: 'AI, VR/AR, cloud collaboration, and gamification to make learning, mentorship, and recognition smarter and more interactive.',
  },
]

export default function Community() {
  return (
    <section
      id="pillars"
      className="container mx-auto px-4 py-24 sm:py-32 md:px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-sans text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
          Core Pillars
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pillars.map((pillar, index) => (
          <Card
            key={pillar.title}
            className="group transform-gpu rounded-2xl border-2 border-border/50 bg-card shadow-premium transition-all duration-500 hover:-translate-y-2 hover:border-gradient-from/50 hover:shadow-glow"
            style={{ animation: `fadeInUp 0.6s ease-out ${index * 150}ms forwards`, opacity: 0 }}
          >
            <CardContent className="flex flex-col items-center p-8 text-center md:items-start md:text-left">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gradient-from to-gradient-via text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:shadow-glow">
                <pillar.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-sans text-xl font-bold">{pillar.title}</h3>
              <p className="mt-2 text-base text-foreground/60">{pillar.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
