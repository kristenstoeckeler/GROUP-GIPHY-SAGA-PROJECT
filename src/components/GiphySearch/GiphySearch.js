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
  componentDidMount() {
    console.log(this.props.reduxState.searchReducer.data);
  }

  handleSubmit = event => {
    console.log(this);
    event.preventDefault();
    console.log(this.state.search);
    this.props.dispatch({ type: "GET_GIF", payload: this.state.search });
    this.state.hasSearched = true;
  };

  render() {
    if (this.state.hasSearched) {
      return (
        <div>
          <header>Search for a Giphy</header>
          <input value={this.state.search} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>search</button>
          <ul>
            {this.props.reduxState.searchReducer.data.map(giphy => {
              return (
                <>
                  <li>
                    <img src={giphy.images.fixed_height_downsampled.url}></img>
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
