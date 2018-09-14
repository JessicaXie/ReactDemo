import React,{Component} from 'react'

import Main from './components/main'
import Search from './components/search'

export default class App extends Component{
  // 初始化状态
  state = {
    searchName :''

  }
  setSearchName = (searchName) => {
    //更新状态
    this.setState({
      searchName
    })
  }

  render () {
    //得到状态数据
    const {searchName} = this.state
    return (
      <div className="container">
        <Search setSearchName={this.setSearchName}/>
        <Main searchName={searchName}/>
      </div>
    )
  }

}