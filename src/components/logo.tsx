import { cn } from '@/lib/utils'

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('text-2xl font-bold tracking-wider', className)}>
      AETHER <span className="text-primary group-hover:text-primary">HUB</span>
    </div>
  )
}
