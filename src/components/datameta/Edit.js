import React, { Component } from 'react';
import { 
  Layout, 
  Breadcrumb, 
  Table, 
  Button, 
  Input,
  MessageBox,
  Message,
} from 'element-react';

class Edit extends Component {
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
        },
        {
          label: "Column Name",
          prop: 'column_name'
        },
        {
            label: "Form Type",
            prop: 'form_type'
          },
        {
            label: '-',
            render: () => {
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
        title: 'SKU',
        column_name: 'sku',
        form_type: 'Number',
      }],
      title: 'Untitled',
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    console.info('id', id);
    // get the param
    // fetch the data
    this.setState({
      title: 'Post',

    });
  }
  
  render() {
    return (
      <Layout.Row>
        <div>
          <Breadcrumb separator="/" className="breadcrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Datameta</Breadcrumb.Item>
            <Breadcrumb.Item>Post</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Layout.Col span="24">
          <h3>Modify Datameta [{ this.state.title }]</h3>
          <div className="fl">
            <Button type="success" size="mini">New</Button> 
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
  
export default Edit;