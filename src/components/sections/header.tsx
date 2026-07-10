import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-0 mb-96 h-fit w-full border-b bg-background/90 px-10 py-5 transition-colors duration-300 ${
        scrolled ? 'border-b-border' : 'border-b-transparent bg-transparent'
      }`}
    >
      <nav className='mx-auto flex max-w-2xl list-none items-center justify-around text-xs text-muted-foreground'>
        <li>
          <a
            className='transition-colors hover:text-foreground'
            href='#about'
          >
            <span className='text-primary'>$ </span>
            about me
          </a>
        </li>
        <li>
          <a
            className='transition-colors hover:text-foreground'
            href='#projects'
          >
            <span className='text-primary'>$ </span>
            projects
          </a>
        </li>
        <li>
          <a
            className='transition-colors hover:text-foreground'
            href='#skills'
          >
            <span className='text-primary'>$</span> skills
          </a>
        </li>
        <li>
          <a
            className='transition-colors hover:text-foreground'
            href='#contact'
          >
            <span className='text-primary'>$</span> contact
          </a>
        </li>
      </nav>
    </header>
  );
}
