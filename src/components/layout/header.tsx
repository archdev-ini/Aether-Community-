'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '../theme-toggle'

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/#community', label: 'Community' },
  { href: '/archive', label: 'Archive' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    // Set initial state
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClasses = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    isScrolled
      ? 'bg-background/80 shadow-sm backdrop-blur-xl'
      : 'bg-transparent'
  );

  const linkColorClass = isScrolled ? 'text-foreground/70' : 'text-white/80';
  const logoColorClass = isScrolled ? 'text-foreground' : 'text-white';


  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <Logo
            className={cn('dark:text-white', logoColorClass)}
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary-foreground',
                isScrolled ? 'text-foreground/70' : 'text-white/80 dark:text-white/80'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href="/join">Join Community</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(isScrolled ? '' : 'text-white hover:text-white', 'dark:text-white dark:hover:text-white')}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full bg-background text-foreground"
            >
              <SheetHeader className="flex-row items-center justify-between space-y-0 border-b pb-4">
                <SheetTitle>
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo />
                  </Link>
                </SheetTitle>
                 <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetHeader>
              <div className="flex h-full flex-col p-6 pt-8">
                <nav className="flex flex-1 flex-col items-center justify-center gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-2xl font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/join">Join the Community</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
