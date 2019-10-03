import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        {routes}
    </Provider>
    , document.querySelector('.container'));