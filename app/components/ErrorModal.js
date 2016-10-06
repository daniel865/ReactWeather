import React from 'react';
import ReactDOM from 'react-dom';

export default class ErrorModal extends React.Component {
  
  componentDidMount(){
  	let modal = new Foundation.Reveal($('#error-modal'));
  }

  render(){
    return (
    	<div id="error-modal" className="reveal tiny text-center" data-reveal="">
    		<h4>Some Title</h4>
    		<p>Our error message:</p>
    		<p>
    			<button className="button hollow" data-close="">
    				Okay
    			<button>
    		</p>
    	</div>
    );
  }
}