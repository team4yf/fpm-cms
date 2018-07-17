import React, { Component } from 'react';
import { 
  Layout, 
  Icon, 
  Form, 
  Select,
  Button, 
  Input,  
  Breadcrumb,
  Message, 
} from 'element-react';
import { Tag, Upload } from './input';
// for richeditor
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

class NewPost extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      editorState: null,
      dialogImageUrl: '',
      dialogVisible: false,
      form: { 
        content: undefined,
        url: '/post/1',
        title: 'UnTitled',
        category: '2',
        tags: 'Tag A, Tag DDDD'.split(','),
        cover: [
          {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, 
          {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'},
        ]
      }
    };
  }
  
  onSubmit(e) {
    e.preventDefault();
    console.info(this.state.form)
    //TODO: validate & save data to remote
    Message({
      message: 'Create Success',
      type: 'success'
    });
  }
  
  onChange(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
  }

  onEditorStateChange = (editorState) =>{
    console.info(editorState)
    if(!editorState){
      return;
    }
    this.setState({
      editorState,
    });
    this.onChange('content', draftToHtml(convertToRaw(editorState.getCurrentContent())))
  };

  render() {
    const { editorState } = this.state;
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
        <Layout.Col span="20">
          <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
            <Form.Item label="URL:">
              <Input value={this.state.form.url} disabled></Input>
            </Form.Item>
            <Form.Item label="Title:">
              <Input value={this.state.form.title} onChange={this.onChange.bind(this, 'title')}></Input>
            </Form.Item>
            <Form.Item label="Keyword:">
              <Input value={this.state.form.keyword} onChange={this.onChange.bind(this, 'keyword')}></Input>
            </Form.Item>
            <Form.Item label="Excerpt:">
              <Input value={this.state.form.excerpt} onChange={this.onChange.bind(this, 'excerpt')}></Input>
            </Form.Item>
            <Form.Item label="Category:">
              <Select value={this.state.form.category} placeholder="Unrecgnized" onChange={this.onChange.bind(this, 'category')}>
                <Select.Option label="Unrecgnized" value="1"></Select.Option>
                <Select.Option label="Blog" value="2"></Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Tags:">
              <Tag value={this.state.form.tags} onChange={this.onChange.bind(this, 'tags')}/>
            </Form.Item>
            <Form.Item label="Cover:">
            <div>
              <Upload value={this.state.form.cover} 
                onChange={this.onChange.bind(this, 'cover')}
                onError={(error) => {
                  console.error('upload error', error)
                }}/>
            </div>
            </Form.Item>
            <Form.Item label="Content:">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
              />
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