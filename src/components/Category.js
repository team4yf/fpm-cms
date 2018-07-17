import React, { Component } from 'react';
import { 
  Layout, 
  Breadcrumb,
  Tree, 
  Input, 
  Button 
} from 'element-react';

class Category extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: [{
        id: 1,
        label: 'Root',
        children: [{
          id: 4,
          label: 'Blog',
          children: [{
            id: 9,
            label: 'Home'
          }, {
            id: 10,
            label: 'News'
          }]
        }]
      }],
      options: {
        children: 'children',
        label: 'label'
      }
    }
    this.id = 100;
  }
  
  append(store, data) {
    store.append({ id: this.id++, label: `testtest_${this.id}`, children: [] }, data);
  }
  
  remove(store, data) {
    store.remove(data);
  }
  
  renderContent(nodeModel, data, store) {
    return (
      <span>
        <span>
          <span>{data.label}</span>
        </span>
        <span style={{float: 'right', marginRight: '20px'}}>
          <Button size="mini" onClick={ () => this.append(store, data) }>+</Button>
          <Button size="mini" onClick={ () => this.remove(store, data) }>-</Button>
        </span>
      </span>);
  }
  
  render() {
    const { data, options } = this.state
  
    return (
      <Layout.Row gutter="20">
        <div>
          <Breadcrumb separator="/" className="breadcrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Category</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Layout.Col span="8">
          <Tree
            data={data}
            options={options}
            isShowCheckbox={true}
            nodeKey="id"
            defaultExpandAll={true}
            expandOnClickNode={false}
            renderContent={(...args)=>this.renderContent(...args)}
          />
        </Layout.Col>
      </Layout.Row>
      
    )
  }
  
}
  
export default Category;