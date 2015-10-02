import React from 'react/addons';

export default React.createClass({
    mixins: [React.addons.PureRenderMixin],
    render: function() {
        return <div>
            <h2>Blah</h2>
        </div>;
    }
});