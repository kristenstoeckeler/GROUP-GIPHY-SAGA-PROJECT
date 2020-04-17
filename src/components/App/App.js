import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
//links
import GiphySearch from '../GiphySearch/GiphySearch';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import './App.css';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';


class App extends Component {

  handleClick = (event, linkTo) => {
    console.log( 'Got click on', linkTo );
    this.props.history.push( linkTo );
  }

  render() {
    return (
      <>
      <div className="App"> 
        <Router>
          <AppBar>
          <nav className='navBar'>
            <p className = "link"><Link to='/favorites'>See Favorites </Link></p>
            <p className = "link"><Link to='/'>Search for more Gifs </Link></p>
          </nav>
          </AppBar>
          <Route exact path='/' component={ GiphySearch } />
          <Route exact path='/favorites' component={ FavoritesPage } />
        </Router>
      </div>
      
      </>
    );
  }

}

export default connect()(withRouter(App));
