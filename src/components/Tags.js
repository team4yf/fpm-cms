import React, { Component } from 'react';
import { Layout, Card, Icon, Breadcrumb, Tag, Input, Button } from 'element-react';

class Tags extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      dynamicTags: ['Tag1', 'Tag12', 'Tag13'],
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
  

    render () {
      return (
        <div>
          <Layout.Row gutter="20">
            <div>
              <Breadcrumb separator="/" className="breadcrumb">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Tags</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Layout.Col span="24">
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
            </Layout.Col>
          </Layout.Row>
        </div>
      )
    }
  }
  
  export default Tags;