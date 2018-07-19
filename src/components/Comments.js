import React, { Component } from 'react';
import { 
  Layout,
  Breadcrumb, 
  Table, 
  Button, 
  Pagination, 
  Input, 
  Loading,
  MessageBox,
  Message,
} from 'element-react';

class Comments extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      total: 100,
      columns: [
        {
          type: 'index',
          prop: 'id',
          
        },
        {
          label: "Post Title",
          prop: "post_title",
          width: 180
        },
        {
          label: "Comment",
          prop: "comment"
        },
        {
          label: "Author",
          prop: "author"
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
          width: 90,
          render: (row, column, index) => {
            return (
              <Button type="danger" size="mini" onClick={ this.onTrash.bind(this, row, index) }>Trash</Button>
            )
          }
        }
      ],
    }
  }

  onTrash = (row, index) => {
    MessageBox.confirm('Are you sure about this?', 'Tip', {
      type: 'warning'
    }).then(() => {
      // TODO: remove one
      // should fetch again
      const { data, total } = this.state;
      data.splice(index, 1)
      
      this.setState({ data, total: total - 1 })
      Message({
        type: 'success',
        message: 'Ok!'
      });
    }).catch(() => {
      // cancel..
    });
  }

  fetch = (page) => {
    page = page || 1;
    // TODO: fetch data from remote
    this.setState({ loading: true });
    const list = [];
    for(let i = 0 ; i < 10 ; i++ ){
      list.push({
        id: parseInt(page) * 100 + i,
        post_title: 'hello world',
        author: 'Wangfan',
        comment: 'balbalbalbal',
        state: 'published',
        publishat: '2016-05-02',
      })
    }
    setTimeout(()=>{
      this.setState({
        data: list,
        loading: false,
      });
    }, 500);
    
  }

  componentDidMount(){
    
    this.fetch(1);
  }

  changePage = (page) => {

    this.fetch(page)
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
        <Loading loading={this.state.loading}>
          <Table
            style={{width: '100%'}}
            className="margin-top-10"
            columns={this.state.columns}
            data={this.state.data}
            border={true}
          />
          <Pagination layout="prev, pager, next" small={true} total={ this.state.total } onCurrentChange={ this.changePage } />
        </Loading>
      </Layout.Row>
   )
  }
  
}
  
export default Comments;