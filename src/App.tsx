// src/App.tsx
import { Navbar }        from './components/Navbar';
import { SidebarSocial } from './components/SidebarSocial';
import { Footer }        from './components/Footer';
import { Hero }          from './sections/Hero';
import { About }         from './sections/About';
import { Skills }        from './sections/Skills';
import { Projects }      from './sections/Projects';
import { Education }     from './sections/Education';
import { Contact }       from './sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <SidebarSocial />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
