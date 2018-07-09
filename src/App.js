import React, { Component } from 'react';
import './App.css'
import logo from './logo.svg';
import { Menu, Layout } from 'element-react';
import { NavLink } from 'react-router-dom';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
      <Layout.Row className="tac">
        <nav>
          <Menu theme="dark" className="el-menu-demo" mode="horizontal">
            <Menu.Item index="0"><img style={{ height: '40px' }} src={logo} /></Menu.Item>
            <Menu.Item index="1"><NavLink to="/dashboard">Dashboard</NavLink></Menu.Item>
            <Menu.SubMenu index="2" title="Post">
              <Menu.Item index="2-1"><NavLink to="/newpost">New</NavLink></Menu.Item>
              <Menu.Item index="2-2"><NavLink to="/posts/published">Published</NavLink></Menu.Item>
              <Menu.Item index="2-3"><NavLink to="/posts/draft">Draft</NavLink></Menu.Item>
              <Menu.Item index="2-3"><NavLink to="/posts/trashed">Trashed</NavLink></Menu.Item>
            </Menu.SubMenu>
            <Menu.Item index="3"><NavLink to="/pages">Page</NavLink></Menu.Item>
            <Menu.Item index="4"><NavLink to="/comments">Comments</NavLink></Menu.Item>
            <Menu.Item index="5"><NavLink to="/category">Category</NavLink></Menu.Item>
            <Menu.Item index="6"><NavLink to="/tags">Tag</NavLink></Menu.Item>
            <Menu.Item index="7"><NavLink to="/datameta">DataMeta</NavLink></Menu.Item>
            <Menu.Item index="8"><NavLink to="/setting">Setting</NavLink></Menu.Item>
          </Menu>
        </nav>
      </Layout.Row>
      <Main/>
      </div>
    )
  }
}

export default App;

