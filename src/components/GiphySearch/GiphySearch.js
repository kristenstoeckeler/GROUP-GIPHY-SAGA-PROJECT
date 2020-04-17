import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '../AppBar/AppBar';


const mapStateToProps = reduxState => ({
  reduxState
});

class GiphySearch extends Component {

  state = {
    search: "",
    hasSearched: false
  };

  handleChange = event => {
    this.setState({
      ...this.state,
      search: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this);
    event.preventDefault();
    console.log(this.state.search);
    this.props.dispatch({ type: "GET_GIF", payload: this.state.search });
    this.state.hasSearched = true;
  };

  addToFav = (url) => {
      this.props.dispatch({type:"POST_FAV",payload:{imageurl:url, category: 0}})
  }

  render() {
    if (this.state.hasSearched) {
        console.log(this.props.reduxState.searchReducer.pagination.count)
      return (
        <>
        <div className="search">
            <header><h2>Search for a Giphy!</h2></header>
            <input value={this.state.search} onChange={this.handleChange} />
              <Button variant="contained" color="primary" onClick={this.handleSubmit}>Search</Button>
          <ul>
              <h1>Showing {this.props.reduxState.searchReducer.pagination.count} of {this.props.reduxState.searchReducer.pagination.total_count}</h1>
            {this.props.reduxState.searchReducer.data.map( giphy => {
              return (
                <>
                  <li>
                    <img src={giphy.images.fixed_height_downsampled.url}></img>
                          <Button variant="contained" color="primary" onClick={(event) => this.addToFav(giphy.images.fixed_height_downsampled.url)}>Add to Favorites</Button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        </>
      );
    } else {
      return (
        <>
        <div className="search">
              <header><h2>Search for a Giphy!</h2></header>
          <input value={this.state.search} onChange={this.handleChange} />
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Search</Button>
        </div>
        </>
      );
    }
  }
}

export default withStyles()(connect(mapStateToProps)(GiphySearch));

