import React, { Component } from 'react'
import JumbotronComponents from './Components/JumbotronComponents'
import NavbarComponents from './Components/NavbarComponents'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomeContainer from './Container/HomeContainer';
import CreateUserContainer from './Container/CreateUserContainer';
import EditUserContainer from './Container/EditUserContainer';
import DetailUserContainer from './Container/DetailUserContainer';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavbarComponents />
        <JumbotronComponents />

        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer/>
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer/>
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer/>
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
