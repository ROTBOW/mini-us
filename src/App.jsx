import React from 'react';
import './styles/App.scss';

import Header from './blocks/header/header';
import Calculator from './blocks/calculator/calculator';

const App = () => {

  return (
    <div>
      <Header/>
      <div className='main-container'>
        <Calculator/>
      </div>
    </div>
  )
}

export default App;
