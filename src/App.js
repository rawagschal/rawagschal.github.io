import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
        name: "About Me",
        description: " ",
    },
    {
        name: "Portfolio", 
        description: "Projects I have worked on",
    },
    {
        name: "Resume",
        description: " ",
    },
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )} 
        
      </main>
    </div>
  );
}

export default App;
