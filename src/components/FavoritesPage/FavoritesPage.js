import React, { Component } from 'react';
//Connect to the redux store
import {connect} from 'react-redux';
//Import to do routing
import {withRouter} from 'react-router-dom';
import FavoriteGif from '../FavoriteGif/FavoriteGif';

export class FavoritesPage extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_FAV' });
    }

    render() {
        return (
            <section className="favorites">
                {this.props.favorites.map( favorite =>
                    <FavoriteGif key={favorite.id} favorite={favorite} />
                    )}
            </section>
        )
    }
}
const putPropsOnReduxStore = (reduxStore) => ({
    favorites: reduxStore.favoriteReducer,
});



export default withRouter(connect(putPropsOnReduxStore)(FavoritesPage));