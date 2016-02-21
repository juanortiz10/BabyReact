var React= require('react');
var ReactDOM= require('react-dom');
var List= require('./List.jsx');

var ListManager= React.createClass({
    getInitialState: function(){
        return {items: [], newItemText: ''};
    },
    onChange: function(e){
      this.setState({
        newItemText: e.target.value
      });
    },
    clearClick: function(e){
      this.setState({
        newItemText: ''
      });
    },
    handleSubmit: function(e){
        e.preventDefault();
        if(this.state.newItemText != ""){
          var currentItems= this.state.items;
          currentItems.push(this.state.newItemText);
          this.setState({items: currentItems, newItemText: ''});
        }else{
          alert("Please a valid comment");
        }
    },
    render: function(){
        var divStyle ={
          marginTop: 50,
          padding: 20
        };
        var buttonStyle = {
          margin: 1
        };
        return(
          <div className="col-sm-12" style={divStyle}>
              <div className="panel panel-primary">
                  <div className="row panel-body">
                    <form onSubmit={this.handleSubmit}>
                    <div className="col-sm-9">
                      <textarea rows="4" className="form-control" onChange={this.onChange} value={this.state.newItemText}></textarea>
                    </div>
                    <div className="col-sm-2">
                      <input type="button" className="btn btn-default" value="Clear" style={buttonStyle} onClick={this.clearClick}/>
                      <input type="submit" className="btn btn-warning" value="Add" style={buttonStyle}/>
                    </div>
                    </form>
                  </div>
                  <List items={this.state.items}/>
              </div>
          </div>
        );
    }
});

module.exports= ListManager;
