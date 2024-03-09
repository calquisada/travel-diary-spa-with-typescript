import React from 'react'
import Main from './components/MainComponent'
import Footer from './components/FooterComponent'
import './App.css'

const Pic = require('./components/travel.jpg');

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hello Fellow Travelers! Welcome!</h1>
      <Main />
      <Footer />
      <img src={Pic} alt='travel' />
    </div>
  );
}

export default App;