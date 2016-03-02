//Export Libraries
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


//Export Components
var Base = require('./components/Base.jsx');
var Image01 = require('./components/Image01.jsx');
var Image02 = require('./components/Image02.jsx');
var Image03 = require('./components/Image03.jsx');
var Image04 = require('./components/Image04.jsx');
var Image05 = require('./components/Image05.jsx');
var Image06 = require('./components/Image06.jsx');
var Image07 = require('./components/Image07.jsx');
var Image08 = require('./components/Image08.jsx');
var GridCollage = require('./components/GridCollage.jsx');

var Routes = (
    <Router>
        <Route path="/" component={Base}>
            <Route path="/collage" component={GridCollage}/>
            <Route path="/image01" component={Image01}/>
            <Route path="/image02" component={Image02}/>
            <Route path="/image03" component={Image03}/>
            <Route path="/image04" component={Image04}/>
            <Route path="/image05" component={Image05}/>
            <Route path="/image06" component={Image06}/>
            <Route path="/image07" component={Image07}/>
            <Route path="/image08" component={Image08}/>
        </Route>
    </Router>
);

module.exports = Routes;
