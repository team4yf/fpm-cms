import React, { Component } from 'react';
import { Layout, Card, Icon } from 'element-react';

class Dashboard extends Component {
    render () {
      return (
        <div>
          <Layout.Row gutter="20">
            <Layout.Col span="24">
                <h3>Dashboard</h3>
            </Layout.Col>
            <Layout.Col span="8">
              <div className="grid-content bg-purple">
                <div className="panel">
                  <span className="size-12 color-gray"><Icon name={'caret-right'} />Newest Post</span>
                  <h4 className="panel-title">Hello World</h4>
                  <div className="clearfix">
                    <span className="size-12 color-gray">Post @ 1min ago</span>
                    <span className="size-12 color-gray fr">By: Wangfan</span>
                  </div>
                  <hr className="bgcolor-gray" />
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <span className="size-12 color-gray">Viwers: 1000+</span>
                </div>
              </div>
            </Layout.Col>
            <Layout.Col span="8">
              <div className="grid-content bg-purple">
                <div className="panel">
                  <span className="size-12 color-gray"><Icon name={'caret-right'} />Newest Post</span>
                  <h4 className="panel-title">Hello World</h4>
                  <div className="clearfix">
                    <span className="size-12 color-gray">Post @ 1min ago</span>
                    <span className="size-12 color-gray fr">By: Wangfan</span>
                  </div>
                  <hr className="bgcolor-gray" />
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <span className="size-12 color-gray">Viwers: 1000+</span>
                </div>
              </div>
            </Layout.Col>
            <Layout.Col span="8">
              <div className="grid-content bg-purple">
                <div className="panel">
                  <span className="size-12 color-gray"><Icon name={'caret-right'} />Newest Post</span>
                  <h4 className="panel-title">Hello World</h4>
                  <div className="clearfix">
                    <span className="size-12 color-gray">Post @ 1min ago</span>
                    <span className="size-12 color-gray fr">By: Wangfan</span>
                  </div>
                  <hr className="bgcolor-gray" />
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <p>Hello fdjkaslfdjakslfdasfdsf</p>
                  <span className="size-12 color-gray">Viwers: 1000+</span>
                </div>
              </div>
            </Layout.Col>
          </Layout.Row>
        </div>
      )
    }
  }
  
  export default Dashboard;