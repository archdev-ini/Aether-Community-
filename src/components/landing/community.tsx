import Link from 'next/link'
import { Users, Lightbulb, Library, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: Users,
    title: 'Connect',
    description: 'Connect with peers, mentors, and industry leaders.',
  },
  {
    icon: Lightbulb,
    title: 'Gain Skills',
    description: 'Gain skills in software, design tools, and career development.',
  },
  {
    icon: Library,
    title: 'Access Content',
    description: 'Access workshops, lectures, and networking opportunities.',
  },
  {
    icon: Globe,
    title: 'Shape the Future',
    description: 'Celebrate African design heritage while shaping its future.',
  },
]

export default function Community() {
  return (
    <section
      id="community"
      className="container mx-auto px-4 py-24 sm:py-32 md:px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Why Join AETHER?
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <Card
            key={benefit.title}
            className="border-0 bg-transparent shadow-none"
          >
            <CardContent className="flex flex-col items-center p-6 text-center md:items-start md:text-left">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{benefit.title}</h3>
              <p className="mt-2 text-foreground/80">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button asChild size="lg">
          <Link href="#">Join the Community</Link>
        </Button>
      </div>
    </section>
  )
}
