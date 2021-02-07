import React, { Component } from 'react'
import JumbotronComponents from './Components/JumbotronComponents'
import NavbarComponents from './Components/NavbarComponents'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import HomeContainer from './Container/HomeContainer';
import CreateUserContainer from './Container/CreateUserContainer';
import EditUserContainer from './Container/EditUserContainer';
import DetailUserContainer from './Container/DetailUserContainer';

export default class App extends Component {
  state ={
    title : "selamat datang :p",
    users : [
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 2,
        nama: "rizki",
        alamat: "bandung",
        umur: 21,
        no_hp: "082"
      },
      {
        id: 3,
        nama: "Udin",
        alamat: "Bogor",
        umur: 22,
        no_hp: "088"
      },
      {
        id: 4,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 5,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 6,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 7,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 8,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 9,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 10,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 11,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 12,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 13,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 14,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 15,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 16,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },            
    ]
  }
  render() {
    return (
      <div>
        <NavbarComponents />
        <JumbotronComponents title={this.state.title}/>

        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer users={this.state.users}/>
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
