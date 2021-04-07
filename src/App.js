import React, { useState } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar, { pages } from './components/Navbar';
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
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        <section id="page-content">
            {currentPageEl}
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
