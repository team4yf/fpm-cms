import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Layout, Card, Icon } from 'element-react';
import { Dashboard, NewPost, Tags, Category, Setting, Pages, Posts, Datameta, DatametaEdit } from './components';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/newpost' component={NewPost}/>
      <Route path='/tags' component={Tags}/>
      <Route path='/category' component={Category}/>
      <Route path='/setting' component={Setting}/>
      <Route path='/pages' component={Pages}/>
      <Route exact path='/posts' component={Posts}/>
      <Route path='/posts/:state' component={Posts}/>
      <Route exact path='/datameta' component={Datameta}/>
      <Route path='/datameta/edit/:id' component={DatametaEdit}/>
    </Switch>
  </main>
)
export default Main;