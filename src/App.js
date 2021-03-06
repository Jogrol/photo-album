import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import { Route } from 'react-router-dom'
import AlbumsListContainer from './components/AlbumsListContainer'
import PhotoPageContainer from './components/PhotoPageContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Route exact path="/" component={AlbumsListContainer} />
        <Route exact path="/albums/:id" component={PhotoPageContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
