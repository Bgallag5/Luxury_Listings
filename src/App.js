import React from 'react';

import Header from './components/Header';
import House from './components/HousePage/House';
import HouseAbout from './components/HouseAbout/HouseAbout';



function App() {
  return (
    <div className='app-container'>
    <Header />
    <House/>
    <HouseAbout />
    </div>
  );
}

export default App;
