import Link from 'next/link'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import Logo from '@/components/logo'

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 text-center sm:flex-row md:px-6">
          <Logo />
          <p className="text-sm text-foreground/60 order-last sm:order-none">
            © {new Date().getFullYear()} Aether. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/aethernwk?s=09" aria-label="Twitter" target="_blank">
              <Twitter className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
            <Link href="https://www.linkedin.com/company/aether-ecosystem/" aria-label="LinkedIn" target="_blank">
              <Linkedin className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
