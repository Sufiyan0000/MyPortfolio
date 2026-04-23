import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(() => {
    // check saved theme OR default to light
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-[#f9f9f7] dark:bg-[#0e0e0d] 
                    text-neutral-900 dark:text-neutral-100 
                    transition-colors duration-300 font-sans">

      <Navbar dark={dark} onToggle={() => setDark(prev => !prev)} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;