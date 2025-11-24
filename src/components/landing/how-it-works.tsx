import { CheckCircle2, Users, Lightbulb, Trophy } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
    {
        icon: Lightbulb,
        title: 'Learn & Build Skills',
        description: 'Participate in workshops and project-based challenges.',
    },
    {
        icon: Users,
        title: 'Connect with Mentors',
        description: 'Get guidance and feedback from professionals and peers.',
    },
    {
        icon: CheckCircle2,
        title: 'Collaborate & Innovate',
        description: 'Work on team challenges or research-driven projects.',
    },
    {
        icon: Trophy,
        title: 'Showcase & Grow',
        description: 'Present your work, earn recognition, and prepare for your career.',
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="container mx-auto px-4 py-24 sm:py-32 md:px-6 bg-secondary/20">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-sans text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                    How It Works
                </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <div
                        key={step.title}
                        className="relative flex flex-col items-center text-center"
                    >
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-4 ring-background">
                            <step.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="mt-2 text-foreground/70">{step.description}</p>

                        {/* Connector line for desktop */}
                        {index < steps.length - 1 && (
                            <div className="absolute top-8 left-1/2 hidden h-0.5 w-full -translate-y-1/2 translate-x-1/2 bg-border lg:block" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
