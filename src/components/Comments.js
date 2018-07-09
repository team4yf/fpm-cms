import React, { Component } from 'react';
import { Layout, Card, Icon, Breadcrumb, Tag, Table, Button, Pagination, Input } from 'element-react';

class Comments extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      columns: [
        {
          type: 'index',
          prop: 'id',
        },
        {
          label: "Title",
          prop: "title",
          width: 180
        },
        {
          label: "Category",
          prop: "category",
        },
        {
          label: "Author",
          prop: "author"
        },
        {
          label: "Viewers",
          prop: "viewers"
        },
        {
          label: "Comments",
          prop: "comments"
        },
        {
          label: "State",
          prop: "state"
        },
        {
          label: "PublishAt",
          prop: "publishat"
        },
        {
          label: '-',
          render: function(){
            return (
              <span>
               <Button plain={true} type="info" size="mini">Edit</Button>
               <Button type="danger" size="mini">Remove</Button>
              </span>
            )
          }
        }
      ],
      data: [{
        id: 100,
        title: 'hello world',
        category: 'Blog',
        author: 'Wangfan',
        viewers: 100,
        comments: 200,
        state: 'published',
        publishat: '2016-05-02',
      }]
    }
  }
  
  render() {
    return (
      <Layout.Row>
        <div>
          <Breadcrumb separator="/" className="breadcrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Comments</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Layout.Col span="24">
          <div className="fl">
            <Button type="text">All</Button> |<Button type="text">Approved</Button> |<Button type="text">Trashed</Button>
          </div>
          <div className="fr">
            <Input
              icon="search"
              placeholder="filter"
            />
          </div>
        </Layout.Col>
        <div className="cf"></div>
        <Table
          style={{width: '100%'}}
          className="margin-top-10"
          columns={this.state.columns}
          data={this.state.data}
          border={true}
          height={600}
        />
        <Pagination layout="prev, pager, next" total={50} small={true}/>
      </Layout.Row>
   )
  }
  
}
  
export default Comments;