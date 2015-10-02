import React from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>voting client</h1>
                {React.cloneElement(this.props.children, {pair: pair })}
            </div>
        )
    }
});
