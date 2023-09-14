import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
            <ToastContainer />
        </div>
    );
}

export default App;
