import Link from 'next/link'
import { Users, Lightbulb, Library, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: Users,
    title: 'Connect',
    description: 'Network with peers, mentors, and industry leaders from across the continent.',
  },
  {
    icon: Lightbulb,
    title: 'Gain Skills',
    description: 'Sharpen your expertise in software, design tools, and career development.',
  },
  {
    icon: Library,
    title: 'Access Content',
    description: 'Unlock exclusive workshops, lectures, and networking opportunities.',
  },
  {
    icon: Globe,
    title: 'Shape the Future',
    description: 'Celebrate African design heritage while defining its future trajectory.',
  },
]

export default function Community() {
  return (
    <section
      id="community"
      className="container mx-auto px-4 py-24 sm:py-32 md:px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Why Join AETHER?
        </h2>
        <p className="mt-6 text-lg text-foreground/80 md:text-xl">
          Become part of a dynamic ecosystem dedicated to growth, collaboration, and innovation in African design.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Card
            key={benefit.title}
            className="transform-gpu rounded-xl border-0 bg-transparent shadow-none transition-all duration-300 hover:bg-card hover:shadow-2xl hover:shadow-primary/10"
             style={{ animation: `fadeInUp 0.5s ease-out ${index * 150}ms forwards`, opacity: 0 }}
          >
            <CardContent className="flex flex-col items-center p-8 text-center md:items-start md:text-left">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{benefit.title}</h3>
              <p className="mt-2 text-base text-foreground/70">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
