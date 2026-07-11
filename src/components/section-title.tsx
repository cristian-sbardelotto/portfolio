import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'text-2xl mb-8 text-muted-foreground font-semibold',
        className,
      )}
    >
      <span className='text-primary'>#</span> {children}
    </h2>
  );
}
