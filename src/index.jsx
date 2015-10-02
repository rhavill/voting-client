import React from 'react';
import App from './components/App';
import Results from './components/Results';
import Voting from './components/Voting';
import { Router, Route, IndexRoute } from 'react-router';

React.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Voting}  pair="{pair}"/>
            <Route path="results" component={Results}/>
        </Route>
    </Router>
), document.getElementById('app'))