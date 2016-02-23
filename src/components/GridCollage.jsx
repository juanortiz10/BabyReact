var React = require('react');
var GridItem = require('./GridItem.jsx');

var GridCollage = React.createClass({
  getInitialState: function(){
    return {
      items:['./imgs/example01.jpg','./imgs/example02.jpg','./imgs/example03.jpg',
            './imgs/example04.jpg','./imgs/example05.jpg','./imgs/example06.jpg',
            './imgs/example07.jpg','./imgs/example08.jpg']
    };
  },
  render: function(){
    var createImageBox = function(src,index){
      return <GridItem imageRoute={src} key={index}/>;
    };
    return(
      <div className="row">
        {this.state.items.map(createImageBox)}
      </div>
    );
  }
});

module.exports = GridCollage;
