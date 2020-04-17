import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import './FavoriteGif.css';


export class FavoriteGif extends Component {

    state = {
        category: '',
    }

    handleClick = () => {
        console.log('Category Selected', this.props.favorite.id, this.state);
        this.props.dispatch({ type: 'PUT_FAV', payload: { id: this.props.favorite.id, category: this.state.category } });
        this.setState({
            category: '',
        })
    }

    handleChange = (event) => {
        console.log('Category changed to', event.target.value);
        this.setState({
            category: event.target.value,
        })
    }
    delete = (id) => {
        this.props.dispatch({ type: 'DELETE_FAV', payload: id })
    }

    render() {
        return (
            <div>
                {/* {this.props.favorite ? */}
                <img src={this.props.favorite.URL} alt="FavGif" />
                <p>{this.props.favorite.category}</p>
                <div className="category">
                    <p>Category: {this.props.favorite.category}</p>
                    <label htmlFor="category"><button onClick={this.handleClick}>Set Category</button></label>
                    <select id="category" onChange={(event) => this.handleChange(event)}>
                        <option></option>
                        <option value="funny">Funny</option>
                        <option value="cohort">Cohort</option>
                        <option value="cartoon">Cartoon</option>
                        <option value="nsfw">NSFW</option>
                        <option value="meme">Meme</option>
                    </select>
                    <button onClick={(event) => this.delete(this.props.favorite.id)}>Remove Fav</button>
                </div>
            </div>
        )
    }
}




export default connect()(FavoriteGif);