// previously incl. { useState }
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// previously: Navbar, { pages }
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  
  // const [ currentPage, setCurrentPage ] = useState('homepage');

  // let currentPageEl
  
  // switch (currentPage) {
  //   case pages[1].id:
  //     currentPageEl = (
  //     <Portfolio />
  //     )
  //     break; 
  //   case pages[2].id:
  //     currentPageEl = (
  //       <Resume />
  //     )
  //     break; 
  //   case pages[3].id:
  //     currentPageEl = (
  //       <Contact />
  //     )
  //     break; 
  //   case pages[0].id:
  //     default: currentPageEl = (
  //       <>
  //         <About />
  //       </>
  //     )
  // }

  return (
    <Router>
      <>
        <Navbar />
          {/* currentPage={currentPage}
          setCurrentPage={setCurrentPage} */}
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
