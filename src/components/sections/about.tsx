import { Separator } from '../ui/separator';
import { LinkPopover } from '../link-popover';
import { experiences } from '@/constants/experience';
import { ExperienceCard } from '../experience-card';

export function About() {
  return (
    <section id='about'>
      <h2 className='text-2xl mb-8 text-muted-foreground font-semibold'>
        <span className='text-primary'>#</span> about me.
      </h2>

      <div className='flex justify-between'>
        <article className='space-y-6'>
          <p className='text-muted-foreground text-paragraph max-w-[50ch] leading-loose'>
            I'm a web programmer that loves to create and learn new things. I'm
            completely passionate about solving problems (whether they are
            important or not) and also building new stuff.
          </p>

          <p className='text-muted-foreground text-paragraph max-w-[50ch] leading-loose'>
            I started programming when I was 14, back in 2022, exploring the
            world of web. Since then, I've been trying to improve my skills and
            get better at it each day. My main stack is{' '}
            <span className='text-foreground'>
              Next.js, Vue, and Typescript
            </span>
            , and for backend I generally use{' '}
            <span className='text-foreground'>Python, Go, or Node.js</span>. I
            also mess around with <span className='text-foreground'>C</span>{' '}
            sometimes.
          </p>

          <p className='text-muted-foreground text-paragraph max-w-[50ch] leading-loose'>
            If you want to know more about me, you can find my personal website
            in{' '}
            <LinkPopover href='https://sbardelotto.dev'>
              sbardelotto.dev
            </LinkPopover>
            .
          </p>
        </article>

        <div className='flex flex-col max-w-md w-full'>
          <h3 className='text-muted-foreground'>
            // experiences{' '}
            <span className='text-xs text-muted-foreground/70'>
              (hover for description)
            </span>
          </h3>
          <Separator className='mt-2 mb-4' />

          <div className='flex flex-col gap-4'>
            {experiences.map(xp => (
              <ExperienceCard {...xp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
