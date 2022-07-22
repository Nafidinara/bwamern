import React from 'react';
import 'assets/scss/style.scss';
import LandingPage from "pages/LandingPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return <div className="App">
      <Router>
            <Routes>
              <Route path="/" element={<LandingPage/>}></Route>
            </Routes>
      </Router>
    </div>;
}

export default App;
