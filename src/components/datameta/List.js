import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layout, 
  Breadcrumb, 
  Table, 
  Button, 
  Pagination, 
  Input,
  MessageBox,
  Message,
} from 'element-react';

class Datameta extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      total: 10,
      columns: [
        {
          type: 'index',
          prop: 'id',
        },
        {
          label: "Data",
          prop: "data",
          width: 180
        },
        {
          label: "Manager",
          render: function(record, dom, index){
            return (
              <Link to={ `/datameta/edit/${record.id}` }>Click Me</Link>
            )
          }
        },
        {
            label: '-',
            render: (row, column, index) => {
                return (
                <span>
                    <Button type="danger" size="mini" onClick={this.onRemove.bind(this, row, index)}>Remove</Button>
                </span>
                )
            }
        }
      ],
      data: [{
        id: 100,
        data: 'Post',
      }]
    }
  }

  onRemove = (row, index) => {
    MessageBox.confirm('Are you sure about this?', 'Tip', {
      type: 'warning'
    }).then(() => {
      // TODO: remove one
      const { data } = this.state;
      data.splice(index, 1)
      
      this.setState({ data })
      Message({
        type: 'success',
        message: 'Ok!'
      });
    }).catch(() => {
      // cancel..
    });
  }

  onCreate = () => {
    MessageBox.prompt('Enter Info', 'Tip' ).then(({ value }) => {
      // TODO: Save data to remote server
      const { data } = this.state;
      data.push({ id: 200, data: value})
      this.setState({ data })
    }).catch(() => {
      // cancel 
    });
  }
  
  render() {
    return (
      <Layout.Row>
        <div>
          <Breadcrumb separator="/" className="breadcrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Datameta</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Layout.Col span="24">
          <div className="fl">
            <Button type="success" size="mini" onClick={ this.onCreate }>New</Button> 
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
        />
      </Layout.Row>
   )
  }
  
}
  
export default Datameta;