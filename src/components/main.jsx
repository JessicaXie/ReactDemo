import React,{Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


export default class Main extends Component{
  //声明变量
  static propTypes = {
    searchName:PropTypes.string.isRequired
  }

  //初始化状态
  state = {
    firstView : true,
    loading :false,
    users : [],
    errorMsg : ''
  }

  //发送ajax请求，在componentWillReceiveProps里写
  // 当接收到一个新的属性时自动回调
  componentWillReceiveProps({searchName}){// searchName发生了改变, 需要发ajax请求获取数据
    //更新状态中（发送ajax请求）
    this.setState ({
      firstView:false,
      loading:true
    })
    //发送ajax请求，得到数据
    const url = `http://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then((response) => {//请求成功，得到数据
        const users = response.data.items.map(item => ({
          url:item.html_url,
          header_url:item.avatar_url,
          name:item.login
        }))
        //更新状态
        this.setState({
          loading:false,
          users
        })
        console.log(response.data.items)
      })
      .catch(error => { //请求失败，得到失败信息
        //更新状态
        this.setState({
          loading: false,
          errorMsg: 'error'
        })
      })
  }


  render () {
    //读取状态数据
    const {firstView, loading, users, errorMsg} = this.state
    const {searchName} = this.props

    //根据状态显示数据
    if (firstView){
      return <h1>请输入关键字查询。。。{searchName}</h1>
    } else if (loading){
      return <h1>正在加载中，请稍等。。。</h1>
    } else if (errorMsg){
      return <h1>加载失败了！！！{errorMsg}</h1>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) => (
              <div className="card" key={index}>
                <a href={user.url} target="_blank">
                  <img src={user.header_url} style={{width:100}}/>
                </a>
                <p className="card-text">{user.name}</p>
              </div>
            ))
          }
        </div>
      )
    }

  }
  
}