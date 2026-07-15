import { projects } from '@/constants/projects';
import { ProjectCard } from '../project-card';
import { SectionTitle } from '../section-title';

export function Projects() {
  return (
    <section>
      <SectionTitle>projects.</SectionTitle>

      <div className='flex flex-wrap justify-center items-center gap-4'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            index={String(index).padStart(2, '0')}
          />
        ))}
      </div>
    </section>
  );
}
