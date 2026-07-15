import { ArrowUpRightIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

interface ProjectProps {
  title: string;
  index: string;
  description: string;
  area: string;
  technologies: string[];
  github?: string;
  deploy?: string;
}

export function ProjectCard({
  title,
  index,
  description,
  area,
  technologies,
  github,
  deploy,
}: ProjectProps) {
  return (
    <div className='project-card bg-card/20 border p-8 flex flex-col gap-3 w-80 h-75 hover:border-ring hover:translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300'>
      <div className='text-muted-foreground/40 text-xs mb-4 flex items-center justify-between uppercase'>
        <span>{index}</span> <span>{area}</span>
      </div>

      <h4 className='text-base'>{title}</h4>

      <ScrollArea className='h-15'>
        <p className='text-muted-foreground text-xs'>{description}</p>
      </ScrollArea>

      <div className='flex flex-wrap gap-2 -mt-2'>
        {technologies.map(tech => (
          <Badge
            key={tech}
            variant='secondary'
            className='bg-primary/10 border border-primary/20 px-2 py-0.5 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 cursor-default'
          >
            {tech}
          </Badge>
        ))}
      </div>

      <Separator className='mt-5' />

      <div className='flex items-center gap-3 mt-auto'>
        {github && (
          <a
            href={github}
            className='flex gap-1 items-center text-xs text-muted-foreground hover:text-primary group'
            target='_blank'
            rel='noopener noreferrer'
          >
            github{' '}
            <ArrowUpRightIcon
              className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform'
              size={12}
            />
          </a>
        )}
        {deploy && (
          <a
            href={deploy}
            className='flex gap-1 items-center text-xs text-muted-foreground hover:text-primary group'
            target='_blank'
            rel='noopener noreferrer'
          >
            deploy{' '}
            <ArrowUpRightIcon
              className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform'
              size={12}
            />
          </a>
        )}
      </div>
    </div>
  );
}
