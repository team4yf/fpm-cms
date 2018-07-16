import React, { Component } from 'react';
import { 
  Upload,
  Button,
} from 'element-react';

class UploadInput extends Component{
  // Sometimes, the component receive a `value` prop
  // if you want to feedback the change values, you should bind an change callback, `onChange` prop
  // .. prop:value ; it must be string array ['tag a', 'tag b']
  // .. prop:onChange ; it's should be an function
  constructor(props) {
    super(props);

  }
  
  handleRemove(file, fileList) {
    if(this.props.onChange){
        this.props.onChange(fileList)
    }
  }

  handleFileOnSuccess(response, file, fileList){
    if(this.props.onChange){
        this.props.onChange(fileList)
    }
  }

  handleFileOnError(error){
    if(this.props.onError){
        this.props.onError(error)
    }
  }
  
  handlePreview(file) {
    console.log(file);
  }

  render() {
    return (
        <Upload
            className="upload-demo"
            action={ this.props.action || "//jsonplaceholder.typicode.com/posts/" }
            onPreview={file => this.handlePreview(file)}
            onSuccess = {(response, file, fileList) => this.handleFileOnSuccess(response, file, fileList)}
            onError = {(error, file, fileList) => this.handleFileOnError(error, file, fileList)}
            onRemove={(file, fileList) => this.handleRemove(file, fileList)}
            fileList={ this.props.value }
            listType="picture"
            tip={<div className="el-upload__tip">Only jpg/png Allowed, At Last 500kb</div>}
            >
            <Button size="small" type="primary">Choose Images</Button>
        </Upload>
    )
  }
}

export default UploadInput;