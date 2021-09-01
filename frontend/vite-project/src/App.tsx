import React, { useState } from 'react'
import './styleSheets/App.css'
import {Switch, Route, Redirect} from "react-router";
import HomePage from './pages/HomePage';


function App() {

  

  return (
    <div className="App ">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/placestostay">
          
        </Route>
      </Switch>
    
    </div>
  )
}

export default App
