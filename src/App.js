import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
import Featured from './components/featured/index';
import VenuInfo from './components/VenuInfo/index';
import Highlights from './components/Highlights/index';
import Pricing from './components/Pricing/index';
import Location from './components/Location/Location';
import {Element} from 'react-scroll';

const App = () => {
  return (
    <div>
      <Header/>
      <Element name="featured">
      <Featured/>
      </Element>
      <Element name="venueinfo">
        <VenuInfo/>
      </Element>
      <Element name="highlights">
        <Highlights/>
      </Element>
      <Element name="pricing">
        <Pricing/>
      </Element>
      <Element name="location">
        <Location/>
      </Element>
      
      <Footer/>
    </div>
  );
}

export default App;
