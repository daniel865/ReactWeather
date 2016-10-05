import React from 'react';
import ReactDOM from 'react-dom';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../api/OpenWeatherMap';

export default class Weather extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  } 

  handleSearch(location){
    let that = this;

    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function(temp){
        that.setState({
            location: location,
            temp: temp,
            isLoading: false
        });
    }, function(errorMessage){
        that.setState({isLoading: false});
        alert(errorMessage);
    });
  } 
    
  render(){
    let {isLoading, location, temp} = this.state;

    function renderMessage(){
        if (isLoading){
        return (
            <h3>Fetching weather...</h3>
        );
        }else if (location && temp){
            return (
                <WeatherMessage location={location} temp={temp} />
            );
        }
    }

    return (
    	<div>
    	  <h1>Weather Component</h1>
    	  <WeatherForm onSearch={this.handleSearch} />
    	  {renderMessage()}
    	</div>
    );
  }
}