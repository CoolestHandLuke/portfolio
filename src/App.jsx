import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="flex justify-center">
            <main className="container">
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
