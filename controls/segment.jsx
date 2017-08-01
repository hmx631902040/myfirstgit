import React from 'react';
// require('./less');

var Segment = React.createClass({
    getInitialState:function(){
        return {
            checked:false
        };
    },
    handleClick:function(){
        this.setState({
            checked:!this.state.checked
        });
    },
    render:function(){
        var rowStyle = {
            color:this.state.checked ? 'orange' : '#ccc'
        };
        return (
            <div>
                <span className="left" onClick={this.handleClick} style={rowStyle}>自选</span>
                <span> | </span>
                <span className="right" onClick={this.handleClick} style={rowStyle}>市场</span>
            </div>
            );
    }
})

module.exports = Segment;
