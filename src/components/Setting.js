import React, { Component } from 'react';
import { 
  Layout, 
  Breadcrumb,
  Form, 
  Select, 
  Message,
  Button, 
  Input,
} from 'element-react';

class Setting extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      form: { }
    };

  }

  componentDidMount(){
    // TODO: Fetch remote data
    const data = {
      domain: 'http://yunplus.io',
      lang: 'en',
      sitecode: 'Babc',
      email: 'support@yunplus.io',
      phone: '1377878978',

    }
    this.setState({
      form: data,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.info('form data', this.state.form)
    //TODO: validate & post data to remote server
    Message({
      message: 'Saved Success',
      type: 'success'
    })
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
            <Breadcrumb.Item>Setting</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Layout.Col span="24">
          <h3>Setting</h3>
        </Layout.Col>
        <Layout.Col span="12">
          <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
            <Form.Item label="Domain:">
              <Input value={this.state.form.domain} onChange={this.onChange.bind(this, 'domain')}></Input>
            </Form.Item>
            <Form.Item label="Language:">
              <Select value={this.state.form.lang} placeholder="Language" onChange={this.onChange.bind(this, 'lang')}>
                <Select.Option label="EN" value="en"></Select.Option>
                <Select.Option label="ZH" value="zh"></Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Site Code:">
              <Input value={this.state.form.sitecode} onChange={this.onChange.bind(this, 'sitecode')}></Input>
            </Form.Item>
            <Form.Item label="Email:">
              <Input value={this.state.form.email} onChange={this.onChange.bind(this, 'email')}></Input>
            </Form.Item>
            <Form.Item label="Phone:">
              <Input value={this.state.form.phone} onChange={this.onChange.bind(this, 'phone')}></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" nativeType="submit">Save</Button>
            </Form.Item>
          </Form>
        </Layout.Col>
      </Layout.Row>
    )
  }
}
  
export default Setting;