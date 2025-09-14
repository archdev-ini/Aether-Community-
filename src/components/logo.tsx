import { cn } from '@/lib/utils'

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('font-headline text-2xl font-bold tracking-wider', className)}>
      AETHER <span className="text-primary">HUB</span>
    </div>
  )
}
