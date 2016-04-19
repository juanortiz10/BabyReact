//Export Libraries
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


//Export Components
var Base = require('./components/Base.jsx');
var Image01 = require('./components/Image01.jsx');
var GridCollage = require('./components/GridCollage.jsx');

var Routes = (
    <Router>
        <Route path="/" component={Base}>
            <Route path="/collage" component={GridCollage}/>
            <Route path="/image01" component={Image01}/>
        </Route>
    </Router>
);

module.exports = Routes;
