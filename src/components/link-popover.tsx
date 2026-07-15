import { ArrowUpRightIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';

interface LinkPopoverProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
  isExternal?: boolean;
}

export function LinkPopover({
  children,
  href,
  className,
  isExternal = true,
}: LinkPopoverProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          className={cn(
            'w-fit text-foreground underline-offset-4 transition-colors underline hover:text-primary hover:brightness-150',
            className,
          )}
          target='_blank'
          rel='noopener noreferrer'
          onClick={e => e.currentTarget.blur()}
        >
          {children ?? href}
        </a>
      </TooltipTrigger>

      <TooltipContent className='max-w-auto'>
        <p className='flex items-center gap-1'>
          {href} {isExternal && <ArrowUpRightIcon size={16} />}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
