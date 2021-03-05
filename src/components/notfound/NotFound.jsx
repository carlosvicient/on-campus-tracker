import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

class NotFound extends Component {
    render() {
        return (
            <div className="notfound">
                <h1>404 - page not found!</h1>
                <Link to="/">Go home</Link>
            </div>
        )
    }
}

export default NotFound;