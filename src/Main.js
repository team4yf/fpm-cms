import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Layout, Card, Icon } from 'element-react';
import { Dashboard, NewPost, Tags, Category, Setting } from './components';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/newpost' component={NewPost}/>
      <Route path='/tags' component={Tags}/>
      <Route path='/category' component={Category}/>
      <Route path='/setting' component={Setting}/>
    </Switch>
  </main>
)
export default Main;