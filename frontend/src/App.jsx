import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatedBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
