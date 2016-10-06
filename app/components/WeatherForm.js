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

  onSearch(){

  }

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" /> 
          <button className="button expended hollow">Get Weather</button>
        </form>
      </div>
    );
  }

  

}