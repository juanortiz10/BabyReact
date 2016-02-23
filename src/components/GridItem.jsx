var React = require('react');

var GridItem = React.createClass({

  render: function(){
    return(
      <div className="col-md-3">
        <div className="grid_container">
          <img alt="example" src={this.props.imageRoute} className="grid_item"/>
          <div className="buttons_container">
            <img className="comment_icon" src="imgs/comment.png"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GridItem;
