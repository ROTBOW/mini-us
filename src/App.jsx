import React from 'react';
import './styles/App.scss';

import Header from './blocks/header/header';
import Calculator from './blocks/calculator/calculator';
import Clock from './blocks/clock/clock';
import RedButton from './blocks/redButton/redButton';
import Notes from './blocks/notes/notes';

const App = () => {

  return (
    <div>
      <Header/>
      <div className='container-main'>
        <Calculator/>
        <Clock/>
        <RedButton/>
        <Notes/>
      </div>
    </div>
  )
}

export default App;
