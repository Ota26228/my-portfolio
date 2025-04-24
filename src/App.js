import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';


function App() {
  return (
    <div className="bg-slate-50 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

