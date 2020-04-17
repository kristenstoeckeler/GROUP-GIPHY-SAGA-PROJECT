import React, { Component } from "react";
import { connect } from "react-redux";
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
        <div>
          <header>Search for a Giphy</header>
          <input value={this.state.search} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>search</button>
          <ul>
              <h1>Showing {this.props.reduxState.searchReducer.pagination.count} of {this.props.reduxState.searchReducer.pagination.total_count}</h1>
            {this.props.reduxState.searchReducer.data.map( giphy => {
              return (
                <>
                  <li>
                    <img src={giphy.images.fixed_height_downsampled.url}></img><button onClick={ (event) => this.addToFav(giphy.images.fixed_height_downsampled.url)}>Add To Favorites</button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <header>Search for a Giphy</header>
          <input value={this.state.search} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>search</button>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(GiphySearch);