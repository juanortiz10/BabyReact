var React = require('react');
var BadWords= ['pinche','ojete','puto','mierda','chingada','verga','verguita',
               'joto', 'muerte','muere','pendejo','giño','culo','puñetas',
              'chinga tu madre','puta'];

var Image01 = React.createClass({
  getInitialState: function(){
    return{
      comments: '',
      isError: ''
    };
  },
  onChange: function(e){
    this.setState({comments: e.target.value});
  },
  onOk: function(){
    var comm = this.state.comments;
    if(!comm.length <= 0){
      var results = BadWords.map(this.checkIfWordIsBad);
      if(this.analyzeResults(results)){
        this.setState({isError: 'Ups!, parece que haz introducido malas palabras'});
      }else{
        //TODO
        this.setState({isError: ''});
        var d = new Date();
        var n = d.getTime();

      }
    }else{
      alert("Introduce un comentario válido!");
    }
  },
  onCancel: function(){
    this.setState({comments: ''});
  },
  checkIfWordIsBad: function(wholeWord){
      if(this.state.comments.includes(wholeWord))
        return true;

      return false;
  },
  analyzeResults(results){
    for(var i = 0; i < results.length; i++){
      if(results[i] == true)
        return true
    }
    return false;
  },
  render: function(){
    var style = {
      margin: '10px',
      backgroundColor: 'white',
      borderRadius: '10px 10px 10px 10px',
      MozBorderRadius: '10px 10px 10px 10px',
      WebkitBorderRadius: '10px 10px 10px 10px',
      border: '0px solid #000000'
    };
    var title = {
      fontSize: '2em',
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif'
    };
    var inp = {
      display: 'block',
      margin: '0 auto',
      padding: '5px',
      width: '60%'
    };
    var button = {
      margin: '10px 2px 10px 2px'
    };
    var containerButtons = {
      textAlign:'center'
    }
    var spanStyle = {
      fontSize: '0.9em',
      color: 'red',
      display: 'block',
      textAlign: 'center'
    };
    return(
      <div className="row" style={style}>
        <h2 style={title}>Comentarios</h2>
        <input onChange={this.onChange} style={inp} type="text" maxLength="200" value={this.state.comments}/>
        <div style={containerButtons}>
          <button onClick={this.onOk} style={button} className="btn btn-info">Aceptar</button>
          <button onClick={this.onCancel} style={button} className="btn btn-danger">Cancelar</button>
        </div>
        <span style={spanStyle}>{this.state.isError}</span>
      </div>
    );
  }
});

module.exports = Image01;
