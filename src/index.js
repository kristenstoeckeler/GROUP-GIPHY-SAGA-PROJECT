import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {takeEvery, put} from 'redux-saga/effects';
import {Provider} from 'react-redux';
import axios from 'axios';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/App/App';

const searchReducer = () => {
    console.log('in searchReducer');
    return 'blah'
    //Need to buildout reducer
}

const favoriteReducer = () => {
    console.log('in favoriteReducer');
    return 'blah'
    //Need to buildout reducer
}

function* rootSaga(){
    yield takeEvery('GET_GIF', getGifSaga);
    yield takeEvery('POST_FAVORITE', postFavoriteSaga);
}

function* getGifSaga(action){
    console.log('in getGifSaga', action);
    //Need to buildout Axios request
}

function* postFavoriteSaga(action) {
    console.log('in postFavoriteSaga', action);
    //Need to buildout Axios request
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

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('react-root'));
