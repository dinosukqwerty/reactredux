import React, { Component } from 'react'
import JumbotronComponents from './components/JumbotronComponents'
import NavbarComponents from './components/NavbarComponents'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomeContainer from './container/HomeContainer';
import CreateUserContainer from './container/CreateUserContainer';
import EditUserContainer from './container/EditUserContainer';
import DetailUserContainer from './container/DetailUserContainer';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavbarComponents />
        <JumbotronComponents />

        <BrowserRouter>
          <Route path="/" exact component = {HomeContainer} />
          <Route path="/create" exact component = {CreateUserContainer} />
          <Route path="/edit/:id" exact component = {EditUserContainer} />
          <Route path="/detail/:id_mahasiswa" exact component = {DetailUserContainer} />
        </BrowserRouter>
      </div>
    )
  }
}
