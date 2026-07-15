import { LinkPopover } from '../link-popover';
import { SectionTitle } from '../section-title';

export function Contact() {
  return (
    <section>
      <SectionTitle className='mb-14'>contact.</SectionTitle>

      <div className='flex items-start gap-2 lg:gap-8 justify-between flex-col lg:flex-row'>
        <div className='flex flex-col gap-8 lg:order-1 order-2'>
          <p className='max-w-[50ch] text-muted-foreground'>
            feel absolutely free to reach out, i'm always open to new
            connections and opportunities. whether you have a question, a
            project or just want to say hi.
          </p>

          <LinkPopover
            href='mailto:cristian.k.sbardelotto@gmail.com'
            className='text-primary underline-offset-8'
          >
            cristian.k.sbardelotto@gmail.com
          </LinkPopover>

          <div className='flex items-center gap-5 flex-wrap'>
            <LinkPopover
              className='text-muted-foreground/80 hover:text-foreground/80 no-underline hover:underline'
              href='https://github.com/cristian-sbardelotto'
            >
              github
            </LinkPopover>

            <LinkPopover
              className='text-muted-foreground/80 hover:text-foreground/80 no-underline hover:underline'
              href='https://linkedin.com/in/cristian-k-sbardelotto'
            >
              linkedin
            </LinkPopover>

            <LinkPopover
              className='text-muted-foreground/80 hover:text-foreground/80 no-underline hover:underline'
              href='https://discord.com/users/669660510093967371'
            >
              discord
            </LinkPopover>
          </div>
        </div>

        <h2 className='-mt-4 max-w-[16ch] text-3xl lg:text-end lg:text-5xl leading-[1.2] font-bold mb-2 order-1 lg:order-2'>
          i'd love to hear from you.
        </h2>
      </div>
    </section>
  );
}
