var React = require('react');

var Box = React.createClass({
  render: function(){
    var divStyle = {
      width: '100%',
      height: '20px',
      textAlign: 'center',
      border: '1px solid rgba(86,61,124,.2)',
      backgroundColor: '#ddd',
      marginBottom: '20px'
    };
    var pStyle= {
      color: '#2D2E2E',
    };
    console.log(this.props.text);
    return(
      <div style={divStyle}>
        <div>
          <p style={pStyle}>{this.props.text}</p>
        </div>
      </div>
    );
  }
});

module.exports = Box;
