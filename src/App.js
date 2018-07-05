import React, { Component } from 'react';
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
          <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
            <Menu.Item index="0"><img style={{ height: '40px' }} src={logo} /></Menu.Item>
            <Menu.Item index="1"><Link to="/dashboard">Dashboard</Link></Menu.Item>
            <Menu.SubMenu index="2" title="Post">
              <Menu.Item index="2-1"><Link to="/newpost">New</Link></Menu.Item>
              <Menu.Item index="2-2">Published</Menu.Item>
              <Menu.Item index="2-3">Draft</Menu.Item>
              <Menu.Item index="2-3">Trashed</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item index="3">Page</Menu.Item>
            <Menu.Item index="4">Category</Menu.Item>
            <Menu.Item index="5">Tag</Menu.Item>
            <Menu.Item index="5">DataMeta</Menu.Item>
            <Menu.Item index="6">Setting</Menu.Item>
          </Menu>
        </nav>
      </Layout.Row>
      <Main/>
      </div>
    )
  }

  onSelect() {
    
    }

  onOpen() {
    
    }
    
    onClose() {
    
    }
}

export default App;

