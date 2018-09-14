import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './item.css'

export default class Item extends Component{
  //声明变量
  static propTypes = {
    comment:PropTypes.object.isRequired,
    index:PropTypes.number.isRequired,
    deleteComment:PropTypes.func.isRequired
  }

  //删除评论
  deleteComment = () => {
    //得到数据
    const {comment,index,deleteComment} = this.props
    if (window.confirm(`你确定要删除${comment.username}的评论吗？`)) {
      //调用删除函数
      deleteComment(index)
    }

  }

  render () {
    //得到传来的数据
    const {username,content} = this.props.comment

    return (
        <li className="list-group-item">
          <div className="handle">
            <a href="javascript:;" onClick={this.deleteComment}>删除</a>
          </div>
          <p className="user"><span>{username}</span><span>说:</span></p>
          <p className="centence">{content}</p>
        </li>

    )
  }
  
}