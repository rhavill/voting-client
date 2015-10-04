import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: ['Sunshine', '28 Days Later'],
            tally: {Sunshine: 2}
        }
    }
});

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
        store.dispatch({type: 'SET_STATE', state})
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