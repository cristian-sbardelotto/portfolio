import { ArrowUpIcon } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className='border-t border-t-border py-4 px-8 sm:px-4 flex items-center justify-center gap-4 sm:gap-10 flex-col sm:flex-row'>
      <p className='text-center text-xs text-muted-foreground'>
        made with passion by{' '}
        <span className='text-foreground'>cristian sbardelotto</span>.{' '}
        {new Date().getFullYear()}
      </p>

      <Button
        variant='ghost'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className='hidden lg:inline'>back to top</span>{' '}
        <ArrowUpIcon size={14} />
      </Button>
    </footer>
  );
}
