import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import React from 'react';
import App from './App';

// don't mind me, just putting some easter eggs
console.log('%cNow wait a second.', 'font-size: 20px')
console.log('%cWhat did you expect to find here huh?', 'font-size: 20px')
console.log('%cYou didn\'t think I\'d leave a console log here did you?', 'color:red; font-size: 20px')
console.log('%ctsk tsk tsk', 'color:red; font-size: 20px')
console.log('%cI thought higher of you 1 minute ago.', 'color:darkred; font-size: 15px')

console.log('Jokes aside, funny you\'d think to check the console on a tiny site like this, send me a connect request on linkedin. Make sure you let me know you found this!');
console.log('https://www.linkedin.com/in/josiah-leon/');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
