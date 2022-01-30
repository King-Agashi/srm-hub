import './App.css';
import React from 'react';
import Nav from './Navbar.js';
import Home from './Home.js';
import Restaurant from './Restaurant.js';
import Notes from './Notes.js';
import Contact from './Contact.js';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/restaurants" element={<Restaurant/>}/>
            <Route path="/notes" element={<Notes/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
