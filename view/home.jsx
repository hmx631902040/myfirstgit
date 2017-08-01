import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../controls/change.jsx';
import Segment from '../controls/segment.jsx';

var Page = React.createClass({

    render: function (){
        return <div>
            <Hello/>
            <Segment/>
        </div>
    }
});

ReactDOM.render(<Page/>, document.getElementById('example'));
