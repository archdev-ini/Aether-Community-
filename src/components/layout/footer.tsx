import Link from 'next/link'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import Logo from '@/components/logo'

export default function Footer() {
  return (
    <footer className="bg-muted/30 dark:bg-card/20">
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row md:px-6">
          <Logo className="text-xl" />
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Aether Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
