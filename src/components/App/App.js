import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
//links
import GiphySearch from '../GiphySearch/GiphySearch';
import FavoritesPage from '../FavoritesPage/FavoritesPage';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={ GiphySearch } />
          <Route exact path='/favorites' component={ FavoritesPage } />
        </Router>
      </div>
    );
  }

}

export default withRouter(App);
