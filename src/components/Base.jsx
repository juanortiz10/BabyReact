var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Base = React.createClass({
  render: function(){
    var styleButton = {
      display: 'block',
      margin: '0 auto'
    };
    return(
      <div className="container">
        <div className="row">
            {this.props.children}
            <Link to="collage">
              <button className="btn btn-default" style={styleButton}>Galeria</button>
            </Link>
        </div>
      </div>
    );
  }
});

module.exports = Base;
