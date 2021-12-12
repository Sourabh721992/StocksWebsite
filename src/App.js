import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import HeaderBar from "./components/Layout/HeaderBar";
import Footer from './components/Layout/Footer';
import './App.css';
import './css/Layout.css';

function App() {
  return (
      <Router>
          <HeaderBar></HeaderBar>
          <div className="container-fluid" style={{minHeight:"100vh"}}>
            <Route exact path="/" component={ Dashboard }></Route>
            <Route exact path="/technical" component={ Dashboard }></Route>
          </div>
          <Footer></Footer>
      </Router>
  );
}

export default App;
