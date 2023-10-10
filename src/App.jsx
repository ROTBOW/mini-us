import React from 'react';
import './styles/App.scss';

import Header from './blocks/header/header';
import Calculator from './blocks/calculator/calculator';
import Clock from './blocks/clock/clock';

const App = () => {

  return (
    <div>
      <Header/>
      <div className='container-main'>
        <Calculator/>
        <Clock/>
      </div>
    </div>
  )
}

export default App;
