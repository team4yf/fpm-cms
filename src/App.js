import React, { Component } from 'react';
import './App.css'
import logo from './logo.svg';
import { Menu, Layout } from 'element-react';
import { Link } from 'react-router-dom';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
      <Layout.Row className="tac">
        <nav>
          <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
            <Menu.Item index="0"><img style={{ height: '40px' }} src={logo} /></Menu.Item>
            <Menu.Item index="1"><Link to="/dashboard">Dashboard</Link></Menu.Item>
            <Menu.SubMenu index="2" title="Post">
              <Menu.Item index="2-1"><Link to="/newpost">New</Link></Menu.Item>
              <Menu.Item index="2-2">Published</Menu.Item>
              <Menu.Item index="2-3">Draft</Menu.Item>
              <Menu.Item index="2-3">Trashed</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item index="3"><Link to="/pages">Page</Link></Menu.Item>
            <Menu.Item index="4"><Link to="/category">Category</Link></Menu.Item>
            <Menu.Item index="5"><Link to="/tags">Tag</Link></Menu.Item>
            <Menu.Item index="6"><Link to="/datameta">DataMeta</Link></Menu.Item>
            <Menu.Item index="7"><Link to="/setting">Setting</Link></Menu.Item>
          </Menu>
        </nav>
      </Layout.Row>
      <Main/>
      </div>
    )
  }
}

export default App;

