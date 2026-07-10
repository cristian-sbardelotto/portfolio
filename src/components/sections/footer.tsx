import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';

export function Footer() {
  return (
    <footer>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href='https://example.com'
            target='_blank'
            className='w-fit text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline'
            rel='noopener noreferrer'
          >
            example
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>example.com</p>
        </TooltipContent>
      </Tooltip>
    </footer>
  );
}
