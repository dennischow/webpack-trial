import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {

    render () {

        return (

            <button
                type="button"
                className={`ui-button ${this.props.cssClass}`}>{this.props.text}</button>

        );

    }

}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    cssClass: PropTypes.string
};

Button.defaultProps = {
    cssClass: ''
};
