import React, { Component } from 'react';
//Connect to the redux store
import {connect} from 'react-redux';
//Import to do routing
import {withRouter} from 'react-router-dom';

export class FavoritesPage extends Component {
    
    render() {
        return (
            <h2>FAVORITE GIFS!!!</h2>
        )
    }
}
const putPropsOnReduxStore = (reduxStore) => ({
    
});



export default withRouter(connect(putPropsOnReduxStore)(FavoritesPage));