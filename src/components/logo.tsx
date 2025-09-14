import { cn } from '@/lib/utils'

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('text-xl font-bold tracking-tighter', className)}>
      AETHER <span className="text-primary/80">HUB</span>
    </div>
  )
}
