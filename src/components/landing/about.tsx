import {
  DraftingCompass,
  GraduationCap,
  Cpu,
  Landmark,
  Network,
  TestTube,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

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
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          What is AETHER?
        </h2>
        <p className="mt-6 text-lg text-foreground/80 md:text-xl">
          AETHER is a creative ecosystem that empowers architects and designers
          across Africa. Inspired by the idea of aether — the medium where light
          and creativity flow — we provide the space between education,
          practice, and innovation.
        </p>
      </div>

      <div className="mt-20">
        <h3 className="text-center text-3xl font-bold">
          Our Pillars
        </h3>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.title}
              className="transform-gpu border-border/20 bg-card text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl dark:bg-card/50"
              style={{ animationDelay: `${index * 100}ms`, animation: `fadeInUp 0.5s ease-out forwards` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <p className="mt-4 text-lg font-semibold">{pillar.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
