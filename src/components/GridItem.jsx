var React = require('react');
var Modal = require('react-modal');

var GridItem = React.createClass({
  render: function(){
    return(
      <div className="col-md-3" onClick={this.onClick}>
        <div className="grid_container">
          <img alt="example" src={this.props.imageRoute} className="grid_item"/>
        </div>
      </div>
    );
  }
});

module.exports = GridItem;
