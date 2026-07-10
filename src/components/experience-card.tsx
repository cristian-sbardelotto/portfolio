import { LinkPopover } from './link-popover';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';

interface ExperienceProps {
  title: string;
  company: {
    name: string;
    url: string;
  };
  duration: string;
  description: string;
}

export function ExperienceCard({
  title,
  company,
  duration,
  description,
}: ExperienceProps) {
  return (
    <HoverCard
      openDelay={0}
      closeDelay={0}
    >
      <HoverCardTrigger asChild>
        <div className='bg-sidebar/20 border p-4 hover:bg-sidebar/70 hover:scale-[1.02] transition-all group'>
          <div className='flex items-center gap-2 text-paragraph'>
            <h6>{title}</h6>

            <span className='text-muted-foreground text-xs'>at</span>

            <LinkPopover
              className='underline hover:text-foreground'
              href={company.url}
            >
              {company.name}
            </LinkPopover>
          </div>

          <p className='text-muted-foreground text-xs opacity-80'>{duration}</p>
        </div>
      </HoverCardTrigger>

      <HoverCardContent
        sideOffset={20}
        side='left'
        className='max-w-xl w-full shadow-2xl '
      >
        <p>{description}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
