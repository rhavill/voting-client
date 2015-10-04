import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>voting client</h1>
                {React.cloneElement(this.props.children)}
            </div>
        )
    }
});
