import React, { Component } from 'react';
import { Layout, Card, Icon, Form, Select, Switch, Checkbox, Button, Input, Radio, DatePicker, TimePicker,
  Upload, Dialog } from 'element-react';

class NewPost extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        name: '',
        region: '',
        date1: null,
        date2: null,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  }
  
  onSubmit(e) {
    e.preventDefault();
  }
  
  onChange(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
  }
  
  handleRemove(file, fileList) {
    console.log(file, fileList);
  }
  
  handlePictureCardPreview(file) {
    this.setState({
      dialogImageUrl: file.url,
      dialogVisible: true,
    })
  }

  render() {
    const { dialogImageUrl, dialogVisible } = this.state;
    return (
      <Layout.Row>
        <Layout.Col span="24">
          <h3>New Post</h3>
        </Layout.Col>
        <Layout.Col span="16">
          <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
            <Form.Item label="URL:">
              <Input value={this.state.form.url} onChange={this.onChange.bind(this, 'url')}></Input>
            </Form.Item>
            <Form.Item label="Title:">
              <Input value={this.state.form.title} onChange={this.onChange.bind(this, 'title')}></Input>
            </Form.Item>
            <Form.Item label="Keyword:">
              <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
            </Form.Item>
            <Form.Item label="Descrip:">
              <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
            </Form.Item>
            <Form.Item label="Category:">
              <Select value={this.state.form.region} placeholder="Unrecgnized">
                <Select.Option label="Unrecgnized" value="Unrecgnized"></Select.Option>
                <Select.Option label="Blog" value="Blog"></Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Tags:">
              <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
            </Form.Item>
            <Form.Item label="Cover:">
            <div>
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                onPreview={file => this.handlePictureCardPreview(file)}
                onRemove={(file, fileList) => this.handleRemove(file, fileList)}
              >
                <i className="el-icon-plus"></i>
              </Upload>
              <Dialog
                visible={dialogVisible}
                size="tiny"
                onCancel={() => this.setState({ dialogVisible: false })}
              >
                <img width="100%" src={dialogImageUrl} alt="" />
              </Dialog>
            </div>
            </Form.Item>
            <Form.Item label="Content:">
              <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" nativeType="submit">立即创建</Button>
              <Button>取消</Button>
            </Form.Item>
          </Form>
        </Layout.Col>
      </Layout.Row>
    )
  }
  }
  
  export default NewPost;