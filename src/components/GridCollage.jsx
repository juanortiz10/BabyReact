var React = require('react');
var GridItem = require('./GridItem.jsx');
var Modal = require('react-modal');

var GridCollage = React.createClass({
  getInitialState: function(){
    return {
      items:['./imgs/example01.jpg','./imgs/example02.jpg','./imgs/example03.jpg',
            './imgs/example04.jpg','./imgs/example05.jpg','./imgs/example06.jpg',
            './imgs/example07.jpg','./imgs/example08.jpg'],
      modalIsOpen: false
    }; 
  },
  openModal: function() {
      this.setState({modalIsOpen: true});
  },
  closeModal: function() {
      this.setState({modalIsOpen: false});
  },
  render: function(){
    var createImageBox = function(src,index){
      return <GridItem imageRoute={src} key={index}/>;
    };
    return(
      <div className="row" onClick={this.openModal}>
      <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}>
          <h2>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
      </Modal>
        {this.state.items.map(createImageBox)}
      </div>
    );
  }
});

module.exports = GridCollage;
