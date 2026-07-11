import { ArrowUpIcon } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className='border-t border-t-border px-4 py-8 flex items-center justify-center gap-10'>
      <p className='text-center text-xs text-muted-foreground'>
        made with passion by{' '}
        <span className='text-foreground'>cristian sbardelotto</span>.{' '}
        {new Date().getFullYear()}
      </p>

      <Button
        variant='ghost'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        back to top <ArrowUpIcon size={14} />
      </Button>
    </footer>
  );
}
