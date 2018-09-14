import React,{Component} from 'react'

import List from './components/list/list'
import Add from './components/add/add'

export default class App extends Component{
  //初始化状态数据
  state = {
    comments:[
      {username:'Tom',content:'吃饭饭'},
      {username:'Mary',content:'睡觉觉'},
      {username:'Hery',content:'哈哈'}
    ]
  }

  //添加评论
  addComment = (comment) => {
    //取出原本状态数据
    const {comments} = this.state
    //更新数据
    comments.unshift(comment)
    //更新状态
    this.setState({
      comments
    })
  }

  //删除评论
  deleteComment = (index) => {
    //取出原本状态数据
    const {comments} = this.state
    // 更新数据
    comments.splice(index, 1)
    // 更新状态
    this.setState({
      comments
    })
  }


  render () {
    //读取状态数据
    const {comments} = this.state

    return (
        <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <Add addComment = {this.addComment}/>
            <List comments = {comments} deleteComment = {this.deleteComment}/>
          </div>
        </div>
    )
  }

}
