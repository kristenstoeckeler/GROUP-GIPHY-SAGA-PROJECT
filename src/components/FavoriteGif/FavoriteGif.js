import React, { Component } from 'react';
//Connect to the redux store
import {connect} from 'react-redux';

export class FavoriteGif extends Component {

    render() {
        return (
            <div>
                <img src={this.props.url}></img>
                <p>{this.props.category}</p>
            </div>
        )
    }
}




export default connect()(FavoriteGif);