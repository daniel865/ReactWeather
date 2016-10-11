import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

export default class Nav extends React.Component {

  constructor(props){
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }  
  
  onSearch(e){
    e.preventDefault();
    
    let location = this.refs.searchCity.value;
    let encodedLocation = encodeURIComponent(location);

    if (location.length > 0){
        this.refs.searchCity.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
    }
  }

  render(){
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Weather App</li>
                    <li>
                        <IndexLink to="/">Get Weather</IndexLink>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/examples">Examples</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                    <ul className="menu">
                        <li>
                            <input type="search" ref="searchCity" placeholder="Search weather by city" />
                        </li>
                        <li>
                            <input type="submit" className="button" value="Get weather" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>	
    );
  }
}

    