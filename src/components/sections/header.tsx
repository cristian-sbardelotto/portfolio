import { useEffect, useState } from 'react';
import { MenuIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useTheme } from '../theme-provider';

const links = [
  { href: '#about', label: 'about me' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' },
];

export function Header() {
  const { setTheme, isLight } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(val => !val);
  }

  function toggleTheme() {
    setTheme(isLight ? 'dark' : 'light');
  }

  useEffect(() => {
    function onScroll() {
      return setScrolled(window.scrollY > 10);
    }
    function onResize() {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) setMenuOpen(false);
    }

    onScroll();
    onResize();

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`z-50 fixed inset-0 h-fit w-full border-b bg-background/90 px-10 py-5 transition-colors duration-300 ${
        isMobile || scrolled
          ? 'border-b-border'
          : 'border-b-transparent bg-transparent'
      }`}
    >
      <nav className='mx-auto flex max-w-2xl list-none items-center justify-between sm:justify-center gap-[5vw] text-xs text-muted-foreground'>
        <h3
          className={`transition-all duration-300 ease-out ${
            isMobile || scrolled
              ? 'opacity-100 scale-100 max-w-5'
              : 'opacity-0 scale-75 max-w-0 mr-[-5vw] pointer-events-none'
          }`}
        >
          <a
            href='#'
            className='text-foreground'
          >
            home
          </a>
        </h3>

        <div className='hidden sm:contents'>
          {links.map(link => (
            <li key={link.href}>
              <a
                className='transition-colors hover:text-foreground'
                href={link.href}
              >
                <span className='text-primary'>$ </span>
                {link.label}
              </a>
            </li>
          ))}
        </div>

        <div className='sm:hidden flex gap-4 items-center'>
          <Button
            variant='outline'
            className='p-4'
            onClick={toggleTheme}
          >
            {isLight ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </Button>

          <Button
            variant='outline'
            className='p-4'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {menuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </Button>
        </div>
      </nav>

      {/* mobile hamburger menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='sm:hidden flex flex-col items-center gap-4 mt-5 text-xs text-muted-foreground'
          >
            {links.map(link => (
              <li key={link.href}>
                <a
                  className='transition-colors hover:text-foreground'
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className='text-primary'>$ </span>
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
