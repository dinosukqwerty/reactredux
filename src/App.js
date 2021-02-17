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
import DataGitContainer from './container/DataGitContainer';
import DataContainer from './container/DataContainer';
import DetailDataGitContainer from './container/DetailDataGitContainer';

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
          <Route path="/detail/:id" exact component = {DetailUserContainer} />
          <Route path="/detaildatagit/:id" exact component = {DetailDataGitContainer} />
          <Route path="/datagit" exact component = {DataGitContainer}/>
          <Route path="/dataappresapi" exact component = {DataContainer}/>

        </BrowserRouter>
      </div>
    )
  }
}
