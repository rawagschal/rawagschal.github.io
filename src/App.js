import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  // const [aboutSelected, setAboutSelected] = useState(false);
  
  const renderPage = () => {
    switch (currentCategory) {
      // case 'Resume':
      //   return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  
//   const [categories] = useState([
//     {
//         name: "About Me",
//         description: " ",
//     },
//     {
//         name: "Portfolio", 
//         description: "Projects I have worked on",
//     },
//     {
//         name: "Resume",
//         description: " ",
//     },
// ]);

// const [currentCategory, setCurrentCategory] = useState(categories[0]);
const [currentCategory, handlePageChange] = useState();


  return (
    <div>
      <Header
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
        // aboutSelected={aboutSelected}
        // setAboutSelected={setAboutSelected}
        handlePageChange={handlePageChange}
      ></Header>
      <main>
        {/* {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )} 
        {!aboutSelected ? (
          <>
            <Portfolio></Portfolio>
            <Contact></Contact>
          </>
        ) : (
            <About></About>
        )}  */}
        <div>{renderPage(currentCategory)}</div>
      </main>
    </div>
  );
}

export default App;
