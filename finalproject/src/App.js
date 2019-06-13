import React from 'react';
import './App.css';
import CardCont from './Components/CardCont';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <CardCont></CardCont>
      <Footer />
    </div>
  );
}

export default App;
