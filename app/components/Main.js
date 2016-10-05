import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Weather from './Weather';

export default class Main extends React.Component {
  render(){
    return (
    	<div>
    		<Nav />
    		<h2>Main Component</h2>
    		{this.props.children}
    	</div>
    		
    );
  }
}