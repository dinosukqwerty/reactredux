import React, { Component } from 'react'
import JumbotronComponents from './Components/JumbotronComponents'
import NavbarComponents from './Components/NavbarComponents'

export default class App extends Component {
  state ={
    title : "selamat datang :p"
  }
  render() {
    return (
      <div>
        <NavbarComponents />
        <JumbotronComponents title={this.state.title}/>
      </div>
    )
  }
}
