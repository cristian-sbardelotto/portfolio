import { skills } from '@/constants/skills';
import { SectionTitle } from '../section-title';

export function Skills() {
  return (
    <section>
      <SectionTitle className='mb-16'>skills.</SectionTitle>

      <div className='flex flex-wrap gap-[7vw] sm:justify-start justify-center'>
        {Object.entries(skills).map(([category, skills]) => (
          <div
            key={category}
            className=''
          >
            <h3 className='text-muted-foreground/50 lowercase text-xs'>
              // {category}
            </h3>

            <ul className='flex flex-col gap-3 pt-7'>
              {skills.map(skill => (
                <li
                  key={skill}
                  className='pl-2 list-[square] marker:text-primary text-muted-foreground ml-3'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
