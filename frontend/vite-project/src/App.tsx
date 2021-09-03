import React, { useState } from 'react'
import './styleSheets/App.css'
import {Switch, Route, Redirect} from "react-router";
import HomePage from './pages/HomePage';

import PlacesToStayPage from './pages/PlacesToStayPage';

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
          <PlacesToStayPage/>
        </Route>
        <Route path="/hosting">
        </Route>

        <Route path="/staysin/:search">

        </Route>
      </Switch>
    
    </div>
  )
}

export default App
