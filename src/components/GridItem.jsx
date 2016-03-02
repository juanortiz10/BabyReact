var React = require('react');
var Modal = require('react-modal');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var GridItem = React.createClass({
  render: function(){
    return(
      <div className="col-md-3" onClick={this.onClick}>
        <div className="grid_container">
          <img alt="example" src={this.props.imageRoute} className="grid_item"/>
          <Link to="/image01">click</Link>
        </div>
      </div>
    );
  }
});

module.exports = GridItem;
