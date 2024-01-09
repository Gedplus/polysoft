import logo from './logo.svg';
import './App.css';
import react, { useEffect } from 'react'
import Header from './components/home/header/header';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import HomePage from './components/pageContent/homePage';
import Footer from './components/homes/Footer';

import AboutP from './components/about/AboutP';
import Contact from './components/contact/Contact';

import AOS from "aos"
import "aos/dist/aos.css"
import Head from './components/home/header/head';
import SericeP from './components/services/ServiceP';


function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
   <Router>
   
    <Header/>
    <Switch>
      <Route path='/' exact component={HomePage}/>
      <Route path='/blog' exact component={SericeP}/>
      <Route path='/About' exact component={AboutP}/>
      <Route path='/Contact' exact component={Contact}/>

      </Switch> 
      <Footer/>  </Router>

    </>
  );
}

export default App;
