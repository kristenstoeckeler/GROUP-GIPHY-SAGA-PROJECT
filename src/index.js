import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {takeEvery, put} from 'redux-saga/effects';
import {Provider} from 'react-redux';
import axios from 'axios';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import App from './components/App/App';

const searchReducer = (state = [], action) => {
    console.log('in searchReducer');
    switch (action.type){
        case 'SEARCH_RESULTS':
            return action.payload
    default:
        return state
    }
}

const favoriteReducer = (state=[], action) => {
    console.log('in favoriteReducer', action.type);
    switch (action.type){
        case 'FAVES':
            return action.payload     
    
    default:
        return state   
    }
}

function* rootSaga(){
    yield takeEvery('GET_GIF', getGifSaga);
    yield takeEvery('GET_FAV', getFavoriteSaga);
    yield takeEvery('POST_FAV', postFavoriteSaga);
}

function* getGifSaga(action){
    console.log('in getGifSaga', action.payload);
    try{
        const response = yield axios.get('/api/search');
        console.log('heres the GET response');
        yield put({type: 'SEARCH_RESULTS', payload: response.data})
    }
    catch(error){
        console.log('Error with Faves GET', error);
    }
}

//Need to build GET Favorites
function* getFavoriteSaga(action) {
    console.log('in getGifSaga', action);
    //Need to buildout Axios request
}

function* postFavoriteSaga(action) {
    console.log('in postFavoriteSaga', action.payload);
    try {
        yield axios.post('/api/favorite', action.payload)
    }
    catch(error){
        console.log('Error on POST', error);
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers ({ 
        searchReducer,
        favoriteReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
