import React, { Component } from 'react';
//Connect to the redux store
import {connect} from 'react-redux';

export class FavoriteGif extends Component {

    render() {
        return (
            <div>
                {/* {this.props.favorite ? */}
                <img src={this.props.favorite.URL} alt="FavGif" />
                <p>{this.props.favorite.category}</p>
            </div>
        )
    }
}




export default connect()(FavoriteGif);