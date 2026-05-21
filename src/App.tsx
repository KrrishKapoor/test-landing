import { Nav } from './components/Nav';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Roles } from './components/Roles';
import { AgentDiagram } from './components/AgentDiagram';
import { Projects } from './components/Projects';
import { Stack } from './components/Stack';
import { Process } from './components/Process';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <TopBar />
      <div className="shell-grid">
        <Nav />
        <main id="main" className="content">
          <div className="content-inner">
            <Hero />
            <Roles />
            <AgentDiagram />
            <Projects />
            <Stack />
            <Process />
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
