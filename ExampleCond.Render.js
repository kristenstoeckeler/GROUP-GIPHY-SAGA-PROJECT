import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class GiphySearch extends Component {
    state = {
        search: '',
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            search: event.target.value

        })
    }


    handleSubmit = (event) => {
        console.log(this);
        event.preventDefault();
        console.log(this.state.search);
        this.props.dispatch({ type: 'GET_GIF', payload: this.state.search })
    }
    render() {
        return (
            <div>
                <header>Search for a Giphy</header>
                <input value={this.state.search}
                    onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>search</button>

                {this.props.search.data ?
                    <div>
                        {this.props.search.data.map((gifObject) => {
                            return (
                                <>
                                    <img src={gifObject.images.fixed_height.url} />
                                </>
                            );
                        })}
                    </div>
                    :
                    ''}
                {/* {JSON.stringify(this.props.search)}  */}
            </div>
        )
    }
}
const putPropsOnReduxStore = (reduxStore) => ({
    search: reduxStore.searchReducer,
});



export default withRouter(connect(putPropsOnReduxStore)(GiphySearch));