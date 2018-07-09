import React, { Component } from 'react';
import { Layout, Icon, Form, Select, Switch, Checkbox, Button, Input, Radio,
  Tag,
  Upload, Dialog, Breadcrumb } from 'element-react';

class Tags extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      dynamicTags: ['TagA', 'TagB', 'TagA'],
      inputVisible: false,
      inputValue: ''
    }
  }
  
  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleInputConfirm();
    }
  }
  
  onChange(value) {
    this.setState({ inputValue: value });
  }
  
  handleClose(index) {
    this.state.dynamicTags.splice(index, 1);
    this.forceUpdate();
  }
  
  showInput() {
    this.setState({ inputVisible: true }, () => {
      this.refs.saveTagInput.focus();
    });
  }
  
  handleInputConfirm() {
    let inputValue = this.state.inputValue;
  
    if (inputValue) {
      this.state.dynamicTags.push(inputValue);
    }
  
    this.state.inputVisible = false;
    this.state.inputValue = '';
  
    this.forceUpdate();
  }
  
  render() {
    return (
      <div>
        {
          this.state.dynamicTags.map((tag, index) => {
            return (
              <Tag
                className="tag"
                key={Math.random()}
                closable={true}
                closeTransition={false}
                onClose={this.handleClose.bind(this, index)}>{tag}</Tag>
            )
          })
        }
        {
          this.state.inputVisible ? (
            <Input
              className="input-new-tag"
              value={this.state.inputValue}
              ref="saveTagInput"
              size="mini"
              onChange={this.onChange.bind(this)}
              onKeyUp={this.onKeyUp.bind(this)}
              onBlur={this.handleInputConfirm.bind(this)}
            />
          ) : <Button className="button-new-tag" size="small" onClick={this.showInput.bind(this)}>+ New Tag</Button>
        }
      </div>
    )
  }
}

class NewPost extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
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
        <div>
          <Breadcrumb separator="/" className="breadcrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Post</Breadcrumb.Item>
            <Breadcrumb.Item>New</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Layout.Col span="24">
          <h3>New Post</h3>
        </Layout.Col>
        <Layout.Col span="12">
          <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
            <Form.Item label="URL:">
              <Input value={this.state.form.url} onChange={this.onChange.bind(this, 'url')}></Input>
            </Form.Item>
            <Form.Item label="Title:">
              <Input value={this.state.form.title} onChange={this.onChange.bind(this, 'title')}></Input>
            </Form.Item>
            <Form.Item label="Keyword:">
              <Input value={this.state.form.keyword} onChange={this.onChange.bind(this, 'keyword')}></Input>
            </Form.Item>
            <Form.Item label="Summary:">
              <Input value={this.state.form.summary} onChange={this.onChange.bind(this, 'summary')}></Input>
            </Form.Item>
            <Form.Item label="Category:">
              <Select value={this.state.form.category} placeholder="Unrecgnized">
                <Select.Option label="Unrecgnized" value="1"></Select.Option>
                <Select.Option label="Blog" value="2"></Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Tags:">
              <Tags />
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
              <Input type="textarea" rows={10}
              value={this.state.form.contoent}
                value={this.state.form.content} onChange={this.onChange.bind(this, 'content')}></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" nativeType="submit">Post Now</Button>
              <Button>Cancel</Button>
            </Form.Item>
          </Form>
        </Layout.Col>
      </Layout.Row>
    )
  }
  }
  
  export default NewPost;