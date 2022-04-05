import React from 'react';
import './App.css';
import About from './components/about/about.component';
import Header from './components/header/header.component';
import Skills from './components/skills/skills.component';
import Footer from './components/footer/footer.component';
function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
