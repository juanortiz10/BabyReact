var React = require('react');
var Modal = require('react-modal');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var GridItem = React.createClass({
  getInitialState: function(){
    return{
      imageref: ''
    };
  },
  componentWillMount: function(){
    this.setState({imageref: this.getRoute()});
  },
  getRoute: function(){
    var route = '';
    var param = this.props.imageRoute;
    if(param.includes('01')){
        route = 'image01';
    }else if(param.includes('02')){
        route = 'image01';
    }else if(param.includes('03')){
        route = 'Image01';
    }else if(param.includes('04')){
        route = 'Image01';
    }else if(param.includes('05')){
        route = 'Image01';
    }else if(param.includes('06')){
        route = 'Image01';
    }else if(param.includes('07')){
        route = 'image01';
    }else if(param.includes('08')){
        route = 'image01';
    }
    return route;
  },
  render: function(){
    return(
      <div className="col-md-3">
        <div className="grid_container">
          <img alt="example" src={this.props.imageRoute} className="grid_item"/>
          <Link to={this.state.imageref}>Comentar</Link>
        </div>
      </div>
    );
  }
});

module.exports = GridItem;
