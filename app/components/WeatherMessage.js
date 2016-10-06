import React from 'react';
import ReactDOM from 'react-dom';

export default class WeatherMessage extends React.Component {

  constructor(props){
  	super(props);
  }

  render(){
    return (
    	<div>
    	  <h1 className="text-center">It's {this.props.temp} in {this.props.location}</h1>
    	</div>
    );
  }
}