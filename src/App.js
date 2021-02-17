import React, { Component } from 'react'
import NavbarComponents from './components/NavbarComponents'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomeContainer from './container/HomeContainer';
import CreateUserContainer from './container/CreateUserContainer';
import EditUserContainer from './container/EditUserContainer';
import DetailUserContainer from './container/DetailUserContainer';
import DataGitContainer from './container/DataGitContainer';
import DataContainer from './container/DataContainer';
import DetailDataGitContainer from './container/DetailDataGitContainer';
import RepositoriContainer from './container/RepositoriContainer';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavbarComponents />
        <BrowserRouter>
          <Route path="/" exact component = {HomeContainer} />
          <Route path="/create" exact component = {CreateUserContainer} />
          <Route path="/edit/:id" exact component = {EditUserContainer} />
          <Route path="/detail/:id" exact component = {DetailUserContainer} />
          <Route path="/detaildatagit/:id" exact component = {DetailDataGitContainer} />
          <Route path="/datagit" exact component = {DataGitContainer}/>
          <Route path="/dataappresapi" exact component = {DataContainer}/>
          <Route path="/repositori" exact component= {RepositoriContainer}/>
        </BrowserRouter>
      </div>
    )
  }
}
