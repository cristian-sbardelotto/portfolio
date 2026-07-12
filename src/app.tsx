import { Header } from './components/sections/header';
import { Footer } from './components/sections/footer';
import { About } from './components/sections/about';
import { Projects } from './components/sections/projects';
import { Skills } from './components/sections/skills';
import { Contact } from './components/sections/contact';
import { Hero } from './components/sections/hero';
import { Separator } from './components/ui/separator';
import { FadeIn } from './components/fade-in';

export function App() {
  return (
    <>
      <div className='flex min-h-svh flex-col p-6 pt-20'>
        <Header />

        <div className='container mt-20 flex min-w-0 flex-col gap-4 text-sm leading-loose pt-20'>
          <FadeIn delay={400}>
            <Hero />
          </FadeIn>

          <FadeIn delay={600}>
            <Separator
              id='about'
              className='my-16'
            />

            <About />
          </FadeIn>

          <FadeIn>
            <Separator
              id='projects'
              className='my-16'
            />

            <Projects />
          </FadeIn>

          <FadeIn>
            <Separator
              id='skills'
              className='my-16'
            />

            <Skills />
          </FadeIn>

          <FadeIn>
            <Separator
              id='contact'
              className='my-16'
            />

            <Contact />
          </FadeIn>
        </div>
      </div>

      <div className='mt-10'>
        <Footer />
      </div>
    </>
  );
}

export default App;
