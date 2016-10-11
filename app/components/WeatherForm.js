import React from 'react';
import ReactDOM from 'react-dom';

export default class WeatherForm extends React.Component {
  
  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city" /> 
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }

}