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
        var buttonStyle = {
          margin: 1
        };
        return(
          <div className="row" id="comments_container">
              <div className="col-sm-12">
                  <List items={this.state.items}/>
              </div>
              <div>
                  <div className="row">
                      <form onSubmit={this.handleSubmit}>
                        <div className="col-sm-8">
                            <textarea rows="4" className="form-control" onChange={this.onChange} value={this.state.newItemText}></textarea>
                        </div>
                        <div className="col-sm-2">
                            <input type="button" className="btn btn-default" value="Clear" style={buttonStyle} onClick={this.clearClick}/>
                            <input type="submit" className="btn btn-warning" value="Add" style={buttonStyle}/>
                        </div>
                      </form>
                  </div>
              </div>
          </div>
        );
    }
});

module.exports= ListManager;
