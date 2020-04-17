import React, { Component } from 'react';
//Connect to the redux store
import {connect} from 'react-redux';

export class FavoriteGif extends Component {

    state = {
        category: '',
    }

    handleClick = () => {
        console.log( 'Category Selected', this.props.favorite.id, this.state );
        this.props.dispatch({ type: 'PUT_FAV', payload: { id: this.props.favorite.id, category: this.state.category } } );
        this.setState({
            category: '',
        })
    }

    handleChange = ( event ) => {
        console.log( 'Category changed to', event.target.value );
        this.setState({
            category: event.target.value,
        })
    }
    delete = (id) => {
        this.props.dispatch({type: 'DELETE_FAV', payload: id})
    }
    setCategory( category ) {
        if( category === null ) {
            return <p>Category:</p>
        }
        else {
            return <p>Category: {category}</p>
        }
    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                <img src={this.props.favorite.URL} alt="FavGif" />
                <p>{this.props.favorite.category}</p>
                <div className="category">
                    { this.setCategory(this.props.favorite.name) }
                    <label htmlFor="category"><button onClick={ this.handleClick}>Set Category</button></label>
                    <select id="category" onChange={ (event) => this.handleChange( event )}>
                        <option></option>
                        <option value="1">Funny</option>
                        <option value="2">Cohort</option>
                        <option value="3">Cartoon</option>
                        <option value="4">NSFW</option>
                        <option value="5">Meme</option>

                    </select>
                    <button onClick={(event) => this.delete(this.props.favorite.id)}>Remove Fav</button>    
                </div>
            </div>
        )
    }
}




export default connect()(FavoriteGif);