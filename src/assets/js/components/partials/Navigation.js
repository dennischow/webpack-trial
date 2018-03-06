import React from 'react';
import {Link} from 'react-router-dom';

// Source: https://stackoverflow.com/questions/42993848/hashrouter-tips-error-in-react-router-4-x
export default class Navigation extends React.Component {

    render () {

        return (
            <nav className="navigation">
                <ul className="navigation__navlist">
                    <li className="navigation__navlist-item">
                        <Link className="navigation__navlist-link" to='/'>Home</Link>
                    </li>
                    <li className="navigation__navlist-item">
                        <Link className="navigation__navlist-link" to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        );
    }

}