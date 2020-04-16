import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
//links
import GiphySearch from '../GiphySearch/GiphySearch';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import './App.css';

class App extends Component {

  handleClick = (event, linkTo) => {
    console.log( 'Got click on', linkTo );
    this.props.history.push( linkTo );
  }


  render() {
    return (
      <div className="App">
        <Router>
          <nav className='navBar'>
            <p className = "link"><Link to='/favorites'>See Favorites </Link></p>
            <p className = "link"><Link to='/'>Search for more Gifs </Link></p>
          </nav>
          <Route exact path='/' component={ GiphySearch } />
          <Route exact path='/favorites' component={ FavoritesPage } />
        </Router>
      </div>
    );
  }

}

export default withRouter(App);
