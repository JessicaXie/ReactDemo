import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Item from '../item/item'

import './list.css'

export default class List extends Component{

  //声明变量
  static propTypes = {
    comments:PropTypes.array.isRequired,
    deleteComment:PropTypes.func.isRequired
  }

  render () {
    //得到传来的数据
    const {comments,deleteComment} = this.props
    const display = comments.length?'none':'block'
    return (
        <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>
          <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className="list-group">
            {
              comments.map((comment, index) => <Item key={index} comment={comment} index={index} deleteComment={deleteComment}/>)
            }
          </ul>
        </div>
    )
  }
  
}