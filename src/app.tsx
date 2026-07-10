import { Button } from '@/components/ui/button';
import { Kbd } from './components/ui/kbd';
import { DownloadIcon } from 'lucide-react';
import { Separator } from './components/ui/separator';
import { Badge } from './components/ui/badge';
import { Header } from './components/sections/header';
import { useTheme } from './components/theme-provider';
import { Footer } from './components/sections/footer';
import { About } from './components/sections/about';
import { Projects } from './components/sections/projects';

export function App() {
  const { theme, setTheme } = useTheme();

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className='flex min-h-svh flex-col p-6 pt-20'>
      <Header />

      <div className='container mt-20 flex min-w-0 flex-col gap-4 text-sm leading-loose pt-20'>
        <div className='space-y-8'>
          <p className='text-xs text-muted-foreground mb-2'>
            &gt;_ fullstack developer
          </p>

          <h1 className='max-w-[12ch] text-5xl leading-[1.2] font-bold mb-2'>
            cristian sbardelotto.
          </h1>

          <p className='mb-8 text-foreground'>
            passionate developer and soon to be a Computer Science student.
          </p>

          <div className='flex items-center gap-3'>
            <Badge
              variant='secondary'
              className='bg-primary/10 border border-primary/20 px-2 py-0.5 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 cursor-default'
            >
              next.js
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 border border-primary/20 px-2 py-0.5 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 cursor-default'
            >
              vue
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 border border-primary/20 px-2 py-0.5 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 cursor-default'
            >
              python
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 border border-primary/20 px-2 py-0.5 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 cursor-default'
            >
              go
            </Badge>
          </div>

          <div className='flex items-center gap-2 *:m-0'>
            <a
              download='cristian-sbardelotto-cv.pdf'
              href='https://docs.google.com/document/d/1_0vOwqThS8tTWe9cDrGe7lM8OJl09nyTgpWbjDZzlP8/export?format=pdf'
              className='mt-2'
            >
              <Button>
                download cv <DownloadIcon />
              </Button>
            </a>

            <a href='#about'>
              <Button
                variant='outline'
                className='font-light'
              >
                about me
              </Button>
            </a>
          </div>
        </div>

        <div className='font-mono text-xs text-muted-foreground mt-6'>
          (Press{' '}
          <Kbd
            onClick={switchTheme}
            className='hover:scale-120 cursor-pointer transition-transform pointer-events-auto'
          >
            t
          </Kbd>{' '}
          to toggle dark mode)
        </div>

        <Separator className='mt-16 mb-16' />

        <About />

        <Separator className='mt-16 mb-16' />

        <Projects />
      </div>

      <Footer />
    </div>
  );
}

export default App;
