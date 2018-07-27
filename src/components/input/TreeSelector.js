import React, { Component } from 'react';
import { 
  Cascader,
} from 'element-react';

class TreeSelector extends Component{

    constructor(props) {
        super(props);

        this.state = {
            options:[{
                value: 'zhinan',
                label: '指南',
                children: [{
                  value: 'shejiyuanze',
                  label: '设计原则',
                  children: [{
                    value: 'yizhi',
                    label: '一致'
                  }, {
                    value: 'fankui',
                    label: '反馈'
                  }, {
                    value: 'xiaolv',
                    label: '效率'
                  }, {
                    value: 'kekong',
                    label: '可控'
                  }]
                }, {
                  value: 'daohang',
                  label: '导航',
                  children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  }]
                }]
              }, {
                value: 'zujian',
                label: '组件',
                children: [{
                  value: 'basic',
                  label: 'Basic',
                  children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                  }, {
                    value: 'color',
                    label: 'Color 色彩'
                  }, {
                    value: 'typography',
                    label: 'Typography 字体'
                  }, {
                    value: 'icon',
                    label: 'Icon 图标'
                  }, {
                    value: 'button',
                    label: 'Button 按钮'
                  }]
                }]
              }],
            value: (this.props.value || 'zujian-basic-icon').split('-'),
        }
    }

    onChange(value){
        this.setState({value})
        if(this.props.onChange){
            this.props.onChange(value.join('-'))
        }
        
    }

    render() {
        return (
        <Cascader
            options={this.state.options}
            expandTrigger="hover"
            changeOnSelect={true}
            value={this.state.value}
            onChange={this.onChange.bind(this)} />
        )
    }
}

export default TreeSelector;