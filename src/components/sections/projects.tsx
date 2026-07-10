import { projects } from '@/constants/projects';
import { ProjectCard } from '../project-card';

export function Projects() {
  return (
    <section>
      <h2 className='text-2xl mb-8 text-muted-foreground font-semibold'>
        <span className='text-primary'>#</span> projects.
      </h2>

      <div className='flex flex-wrap items-center gap-4'>
        {projects.map((project, index) => (
          <ProjectCard
            {...project}
            index={String(index).padStart(2, '0')}
          />
        ))}
      </div>
    </section>
  );
}
