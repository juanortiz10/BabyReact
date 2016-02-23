var React = require('react');

var Modal= React.createClass({
  render: function(){
    return(
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              <p>{this.props.paragraph}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports= Modal;
