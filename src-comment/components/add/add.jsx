import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Add extends Component{

  static propType = {
    addComment:PropTypes.func.isRequired
  }

  //
  submit = () => {
    //得到数据
    const username = this.refs.username.value.trim()
    const content = this.refs.content.value.trim()
    //检查合法性
    if (!username || !content){
      return
    }

    //封装成comment函数
    const comment = {
      username,
      content
    }

    //调用addComment方法
    this.props.addComment(comment)
    //清除输入
    this.refs.username.value = ''
    this.refs.content.value = ''

  }


  render () {
    return (
        <div className="col-md-4">
          <form className="form-horizontal">
            <div className="form-group">
              <label>用户名</label>
              <input type="text" className="form-control" placeholder="用户名" ref='username'/>
            </div>
            <div className="form-group">
              <label>评论内容</label>
              <textarea className="form-control" rows="6" placeholder="评论内容" ref='content'></textarea>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
              </div>
            </div>
          </form>
        </div>
    )
  }
  
}