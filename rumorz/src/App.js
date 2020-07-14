import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/MainComponent';
import Header from './Components/Header'
import './Components/Footer';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
        <Header/>
    <MainComponent>
      This is a container
    </MainComponent>
      <Footer />
   </div>
  );
  }

export default App;
