import { LinkPopover } from './link-popover';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';

interface ExperienceProps {
  id: string;
  title: string;
  company: {
    name: string;
    url: string;
  };
  duration: string;
  description: string;
}

function ExperienceCardContent({
  title,
  company,
  duration,
}: Pick<ExperienceProps, 'title' | 'company' | 'duration'>) {
  return (
    <div className='flex-1 text-left'>
      <div className='flex items-center gap-2 text-paragraph flex-wrap'>
        <h6>{title}</h6>
        <span className='text-muted-foreground text-xs'>at</span>
        <LinkPopover
          className='underline hover:text-foreground'
          href={company.url}
        >
          {company.name}
        </LinkPopover>
      </div>
      <p className='text-muted-foreground text-xs opacity-80 mt-2 lg:mt-0'>
        {duration}
      </p>
    </div>
  );
}

export function ExperienceCard({
  id,
  title,
  company,
  duration,
  description,
}: ExperienceProps) {
  return (
    <>
      {/* < lg: accordion */}
      <AccordionItem
        value={id}
        className='lg:hidden bg-sidebar/20 border px-4'
      >
        <AccordionTrigger className='py-4 hover:no-underline [&>svg]:ml-2'>
          <ExperienceCardContent
            title={title}
            company={company}
            duration={duration}
          />
        </AccordionTrigger>
        <AccordionContent className='pb-4 pt-0'>
          <p className='text-muted-foreground'>{description}</p>
        </AccordionContent>
      </AccordionItem>

      {/* >= lg: hover-card */}
      <HoverCard
        openDelay={0}
        closeDelay={0}
      >
        <HoverCardTrigger asChild>
          <div className='hidden lg:block bg-sidebar/20 border p-4 hover:bg-sidebar/70 hover:scale-[1.02] transition-all group'>
            <ExperienceCardContent
              title={title}
              company={company}
              duration={duration}
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          sideOffset={20}
          side='left'
          className='max-w-xl w-full shadow-2xl'
        >
          <p>{description}</p>
        </HoverCardContent>
      </HoverCard>
    </>
  );
}
