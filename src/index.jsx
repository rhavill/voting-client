import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
        store.dispatch(setState(state))
);

React.render((
    <Provider store={store}>
        {() => <Router>
        <Route path="/" component={App}>
            <IndexRoute component={VotingContainer} />
            <Route path="results" component={ResultsContainer}/>
        </Route>
    </Router>}
    </Provider>
), document.getElementById('app'))