import React, { Component } from 'react';
// import signInImg from '../../assets/sign-in.jpg';
// import signOutImg from '../../assets/sign-out.jpg';

class Home extends Component {
  render() {
    return (
      <div className="main-view home">
        <h2>Practice</h2>
        <p>基于Redux-Data-Flow课程作业，对项目进行Reudx异步数据流改造，以满足以下要求：</p>
        <ol>
          <li>
            请使用<code>redux-thunk</code>, <code>redux-promise</code> 或其他Redux异步数据流处理库对
            <strong>登录</strong>过程进行改造
          </li>
          <li>
            对于登录过程，需要新增两种状态，并实现成如下效果：
            <ul>
              <li>状态-登录中：</li>
              <img alt="登录中"/>
              <li>状态-登录失败：</li>
              <img alt="登录失败"/>
            </ul>
          </li>
        </ol>
      </div>
    );
  }
}

export default Home;