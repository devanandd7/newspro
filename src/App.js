import "./App.css";
import NavBar from "./component/NavBar";
import News from "./component/News";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        
        <Routes>
          <Route exact path='/' element={<News key="everything" pagesize={9} category={""}/>}></Route>
          <Route exact path='/health' element={<News key="health" pagesize={9} category={"health"}/>}></Route>
          <Route exact path='/business' element={<News key="business" pagesize={9} category={"business"}/>}></Route>
          <Route exact path='/sport' element={<News key="sport" pagesize={9} category={"sport"}/>}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pagesize={9} category={"entertainment"}/>}></Route>
          <Route exact path='/science' element={<News key="science" pagesize={9} category={"science"}/>}></Route>
          <Route exact path='/technology' element={<News key="technology" pagesize={9} category={"technology"}/>}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
