import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>voting client</h1>
                {React.cloneElement(this.props.children, {pair: pair, tally: tally })}
            </div>
        )
    }
});
