var React = require('react');
var ReactDOM = require('react-dom');

var Box = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col-md-9 col-sm-9 col-xs-9 col-lg-9"></div>
        <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
          <img src="imgs/user.png" alt="user_avatar" id="avatar"/>
        </div>
      </div>
    );
  }
});

module.exports= Box;
