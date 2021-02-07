import React, { Component } from 'react'
import JumbotronComponents from './Components/JumbotronComponents'
import NavbarComponents from './Components/NavbarComponents'
import { TableComponents } from './Components/TableComponents'

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
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
        nama: "sukma",
        alamat: "jakarta",
        umur: 12,
        no_hp: "081"
      },
      {
        id: 1,
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
        <TableComponents users={this.state.users}/>
      </div>
    )
  }
}
