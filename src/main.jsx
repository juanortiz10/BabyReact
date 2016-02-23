var React= require('react');
var ReactDOM = require('react-dom');
var Toolbar = require('./components/Toolbar.jsx');
var ListManager = require('./components/ListManager.jsx');
var GridCollage = require('./components/GridCollage.jsx');

ReactDOM.render(<Toolbar/>, document.getElementById('toolbar'));
ReactDOM.render(<GridCollage/>, document.getElementById('body'));
//  ReactDOM.render(<ListManager />, document.getElementById('body'));
