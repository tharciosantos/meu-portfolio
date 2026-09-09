import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import Capabilities from './components/sections/Capabilities';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { ClientAnalytics } from './components/ClientAnalytics';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Projects />
      <Process />
      <Capabilities />
      <About />
      <Contact />
      <ClientAnalytics />
    </div>
  );
}
