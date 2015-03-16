'use strict';

import React from 'react';
import Router, { Route, Link, Redirect, RouteHandler } from 'react-router';
import DustbinSimple from './_dustbin-simple';

/*
DragAroundNaive = require('./_drag-around-naive/index'),
DragAroundCustom = require('./_drag-around-custom/index'),
DustbinInteresting = require('./_dustbin-interesting'),
SortableSimple = require('./_sortable-simple'),
NestingSources = require('./_nesting-sources');
*/

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>react-dnd examples (<a target='_href' href='https://github.com/gaearon/react-dnd/blob/master/examples'>source</a>)</h1>
        <ul>
        </ul>
        <hr />
        <RouteHandler />
      </div>
    );
  }
});

/*
<ul>
  <li>Dustbin (<Link to='dustbin-simple'>simple</Link>, <Link to='dustbin-interesting'>interesting</Link>)</li>
  <li>Drag Around (<Link to='drag-around-naive'>naive</Link>, <Link to='drag-around-custom'>custom</Link>)</li>
  <li>Nesting (<Link to='nesting-sources'>drag sources</Link>)</li>
  <li>Sortable (<Link to='sortable-simple'>simple</Link>)</li>
</ul>
*/

const routes = (
  <Route handler={App}>
    <Route name='dustbin-simple' path='dustbin-simple' handler={DustbinSimple} />
    <Redirect from='/' to='dustbin-simple' />
  </Route>
);

/*
<Route name='dustbin-interesting' path='dustbin-interesting' handler={DustbinInteresting} />
<Route name='drag-around-naive' path='drag-around-naive' handler={DragAroundNaive} />
<Route name='drag-around-custom' path='drag-around-custom' handler={DragAroundCustom} />
<Route name='nesting-sources' path='nesting-sources' handler={NestingSources} />
<Route name='sortable-simple' path='sortable-simple' handler={SortableSimple} />
*/

Router.run(routes,
  process.env.NODE_ENV === 'production' ? Router.HashLocation : Router.HistoryLocation,
  (Handler) => React.render(<Handler/>, document.body)
);
