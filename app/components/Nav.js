import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

export default class Nav extends React.Component {
  render(){
    return (
    	<div>
    	  <h2>Nav</h2>
    	  <IndexLink to="/">Get Weather</IndexLink>
    	  <Link to="/about">About</Link>
    	  <Link to="/examples">Examples</Link>
    	</div>
    );
  }
}