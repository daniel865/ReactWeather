import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Examples extends React.Component {
  render(){
    return (
    	<div>
    		<h1 className="text-center">Examples</h1>
			<p>Here a few examples locations to try out: </p>
			<ol>
				<li>
					<Link to='/?location=Medellin'>Medellin</Link>
				</li>
				<li>
					<Link to='/?location=cali'>Cali</Link>
				</li>
			</ol>
    	</div>
    );
  }
}