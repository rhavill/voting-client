import React from 'react';
import App from './components/App';
import Results from './components/Results';
import Voting from './components/Voting';
import { Router, Route, IndexRoute } from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';

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

React.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Voting}  pair="{pair}"/>
            <Route path="results" component={Results}/>
        </Route>
    </Router>
), document.getElementById('app'))