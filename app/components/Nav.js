import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

export default class Nav extends React.Component {
  
  onSearch(e){
    e.preventDefault();
    alert('Not yet wired up!');
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
                            <input type="search" placeholder="Search weather" />
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

    