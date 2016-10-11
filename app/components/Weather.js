import React from 'react';
import ReactDOM from 'react-dom';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../api/OpenWeatherMap';
import ErrorModal from './ErrorModal';

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

    this.setState({
        isLoading: true, 
        errorMessage: undefined, 
        location: undefined, 
        temp: undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp){
        that.setState({
            location: location,
            temp: temp,
            isLoading: false
        });
    }, function(e){
        that.setState({
            isLoading: false, 
            errorMessage: 'City not found'    
        });
    });
  } 

  componentDidMount(){
    let location = this.props.location.query.location; 

    if (location && location.length > 0){
        this.handleSearch(location);
        window.location.hash = '#/';
    }   
  }

  componentWillReceiveProps(nextProps){
    let location = nextProps.location.query.location;
    if (location && location.length > 0){
        this.handleSearch(location);
        window.location.hash = '#/';
    }    
  }
    
  render(){
    let {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage(){
        if (isLoading){
        return (
            <h3 className="text-center">Fetching weather...</h3>
        )
        }else if (location && temp){
            return (
                <WeatherMessage location={location} temp={temp} />
            )
        }
    }

    function renderError(){
        if (typeof errorMessage === 'string' ){
            return <ErrorModal message={errorMessage} />
        }
    }

    return (
    	<div>
    	  <h1 className="text-center page-title">Get Weather</h1>
    	  <WeatherForm onSearch={this.handleSearch} />
    	  {renderMessage()}
          {renderError()}
    	</div>
    );
  }
}