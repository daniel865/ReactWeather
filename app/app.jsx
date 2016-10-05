import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hasHistory } from 'react-router';

import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hasHistory}>
  	<Route path="/" component={Main}>
  		<Route path="about" component={About} />
  		<Route path="examples" component={Examples} />
  		<IndexRoute component={Weather} />
  	</Route>
  </Router>	,
  document.getElementById('app')
);
