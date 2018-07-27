import React, { Component } from 'react';
import { 
  Layout, 
  Breadcrumb, 
  Table, 
  Button, 
  Input,
  MessageBox,
  Message,
  Select,
  Dialog,
  Form,
  Switch,
} from 'element-react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDialogVisible: false,
      form: {},
      columns: [
        {
          type: 'index',
          prop: 'id',
        },{
          label: "Title",
          prop: "title",
        },{
          label: "Column Name",
          prop: 'column_name'
        },{
          label: "Form Type",
          prop: 'form_type'
        },{
          label: "Required",
          prop: 'required',
          render: (row, column, index)  => {
            return (
              <span>{ row['required'] === 1 ? 'Yes': 'No' }</span>
            )
          }
        },{
            label: '-',
            render: (row, column, index)  => {
                return (
                <span>
                    <Button plain={true} type="info" size="mini">Edit</Button>
                    <Button type="danger" size="mini" onClick={this.onRemove.bind(this, row, index)}>Remove</Button>
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
        required: 1,
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
  
  onSubmit(e) {
    e.preventDefault();
    console.info(this.state.form)
    this.setState({ editDialogVisible: false })
    //TODO: validate & save data to remote
    const { data } = this.state
    data.push(this.state.form)
    this.setState({data, form: {}})
    Message({
      message: 'Create Success',
      type: 'success'
    });
  }
  
  onChange(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
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
            <Button type="success" size="mini" onClick={ () => this.setState({ editDialogVisible: true }) }>New</Button> 
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

        <Dialog
          title="Edit"
          visible={ this.state.editDialogVisible }
          onCancel={ () => this.setState({ editDialogVisible: false }) }
        >
          <Dialog.Body>
            <Form model={this.state.form} labelWidth="120" onSubmit={ this.onSubmit.bind(this) }>
              <Form.Item label="Title">
                <Input value={this.state.form.title} onChange={this.onChange.bind(this, 'title')}></Input>
              </Form.Item>
              <Form.Item label="Name">
                <Input value={this.state.form.column_name} onChange={this.onChange.bind(this, 'column_name')}></Input>
              </Form.Item>
              <Form.Item label="Required">
                <Switch
                  value={this.state.form.required} onChange={this.onChange.bind(this, 'required')}
                  onValue={1}
                  onText={'Yes'}
                  offValue={0}
                  offText={'No'}>
                </Switch>
              </Form.Item>
              
              <Form.Item label="FormType">
                <Select value={this.state.form.form_type} placeholder="Text/Select/Image" onChange={this.onChange.bind(this, 'form_type')}>
                  <Select.Option label="Text" value="text"></Select.Option>
                  <Select.Option label="Select" value="select"></Select.Option>
                  <Select.Option label="Image" value="image"></Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" nativeType="submit">Ok</Button>
                <Button onClick={ () => this.setState({ editDialogVisible: false }) }>Cancel</Button>
              </Form.Item>
            </Form>
          </Dialog.Body>
        </Dialog>
      </Layout.Row>
   )
  }
  
}
  
export default Edit;