var React = require('react');
var ReactDOM = require('react-dom');
var Toolbar = require('./Toolbar.jsx');

var Base = React.createClass({
  render: function(){
    return(
      <div className="container">
        <div className="row">
            {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Base;
