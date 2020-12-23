import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Results from './components/Results/Results';
import { obj } from './requests';

function App() {

  const [selectedOption, setSelectedOption] = useState(obj.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
      <Footer />
    </div>
  );
}

export default App;
