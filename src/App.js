import React, { useState } from 'react';
import Header, { pages } from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  
  const [ currentPage, setCurrentPage ] = useState('homepage');

  let currentPageEl
  
  switch (currentPage) {
    case pages[1].id:
      currentPageEl = (
      <Portfolio />
      )
      break; 
    case pages[2].id:
      currentPageEl = (
        <Resume />
      )
      break; 
    case pages[3].id:
      currentPageEl = (
        <Contact />
      )
      break; 
    case pages[0].id:
      default: currentPageEl = (
        <>
          <About />
        </>
      )
  }

  return (
    <>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {currentPageEl}
      </main>
      <Footer/>
    </>
  );
}

export default App;
