import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  // const [aboutSelected, setAboutSelected] = useState(false);
  
  const renderPage = () => {
    switch (handlePageChange) {
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
    <Router>
    <div>
      <Header
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
        // aboutSelected={aboutSelected}
        // setAboutSelected={setAboutSelected}
        // handlePageChange={handlePageChange}
      ></Header>
      <main>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/resume" component={Resume} /> */}
          <div>{renderPage(currentCategory)}</div>
        </Switch>
      </main>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
