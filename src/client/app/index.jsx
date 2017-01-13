// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {browserHistory, Router, Route, Link} from 'react-router';

class Home extends Component {
    render(){
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="cars">Olar</Link>
            </div>
        );
    }
}

// More components
class Car extends Component {
    render(){
        return (<h1>Cars page</h1>);
    }
}

class About extends Component {
    render(){
        return (<h1>About page</h1>);
    }
}

render(
    <Router history={browserHistory}> 
        <Route path="/" component={Home}/>
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('container')
);