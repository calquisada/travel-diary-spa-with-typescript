import React from 'react'
import Main from './components/MainComponent'
import Footer from './components/FooterComponent'
import './App.css'
import Pic from './components/travel.jpg'

function App() {
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