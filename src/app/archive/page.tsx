import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Construction } from 'lucide-react';

export default function ArchiveComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <section className="container mx-auto max-w-7xl px-4 md:px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <Construction className="mx-auto h-16 w-16 text-primary mb-8" />
            <h2 className="font-sans text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              Coming Soon
            </h2>
            <p className="mt-6 text-lg text-foreground/70 md:text-xl">
              The Open Knowledge Archive is under construction. We're busy curating a rich collection of African design, research, and case studies. Join our Telegram channel for updates and sneak peeks!
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="group">
                    <Link href="https://t.me/archivault_official" target="_blank">
                        Join the Archive Channel <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
