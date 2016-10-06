import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
  render(){
    return (
    	<div>
    		<h1 className="text-center">About</h1>
    		<p>
    			This is a weather application build on React. I have built this for The Complete 
				React Web App Developer Course.
    		</p>
    		<p>
    			Here are some of tools are used:
    		</p>
    		<ul>
    			<li>
    				<a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
    			</li>
    			<li>
    				<a href="http://openweathermap.org">Open Weather Map</a> - I ued OpenWeatherMap  to search 
    				for weather data by city name.
    			</li>
    		</ul>
    	</div>
    );
  }
}