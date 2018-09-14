import React,{Component} from 'react'
import logo from './logo.svg'

import './App.css'

export default class App extends Component{
  render () {
    return (
        <div>
          <img src={logo} alt="logo" className='logo'/>
          <h1 className='title'>这个是App组件</h1>
        </div>
    )
  }
}
