import { cn } from '@/lib/utils'

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'font-sans text-2xl font-bold tracking-tighter',
        className
      )}
    >
      AETHER
    </div>
  )
}
