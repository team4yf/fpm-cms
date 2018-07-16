import React, { Component } from 'react';
import { 
  Tag,
  Input,
  Button,
} from 'element-react';

class TagInput extends Component{
  // Sometimes, the tags receive a `value` prop
  // if you want to feedback the change values, you should bind an change callback, `onChange` prop
  // .. prop:value ; it must be string array ['tag a', 'tag b']
  // .. prop:onChange ; it's should be an function
  constructor(props) {
    super(props);

    this.state = {
      dynamicTags: props.value || [],
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
    
    if(this.props.onChange){
      // call the onChange of the parent component
      this.props.onChange(this.state.dynamicTags)
    }
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

    if(this.props.onChange){
      // call the onChange of the parent component
      this.props.onChange(this.state.dynamicTags)
    }
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

export default TagInput;