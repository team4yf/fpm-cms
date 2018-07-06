import React, { Component } from 'react';
import { Layout, Icon, Form, Select, Switch, Checkbox, Button, Input, Radio,
  Tag,
  Upload, Dialog, Breadcrumb } from 'element-react';

class Setting extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
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
              <Select value={this.state.form.lang} placeholder="Language">
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