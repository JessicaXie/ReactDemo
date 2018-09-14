import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component{
  //声明变量
  static propTypes = {
    setSearchName:PropTypes.func.isRequired
  }

  searchName = () => {
    //得到searchName的值
    const searchName = this.refs.searchName.value.trim()
    //合法性判断
    if (searchName){
      // 调用setSearchName
      this.props.setSearchName(searchName)
    }
    //清空input
    this.refs.searchName.value = ''

  }



  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref='searchName'/>
          <button onClick={this.searchName}>Search</button>
        </div>
      </section>
    )
  }
  
}