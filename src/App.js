import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import './Styles/custom.scss';
import Home from './Pages/Home';
import ModelDetail from './Pages/ModelDetail';
import Footer from './Components/Footer';



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/model/:id?" component={ModelDetail} />   
      <Footer />
    </React.Fragment>
  );
}

export default App;