import React from 'react';

import Button from '../../partials/Button';

export default class Greeting extends React.Component {

    constructor () {
        super();
        this.state = {
            timeClicked: 1,
            isLightenUp: false
        };
        // this.onClickCounter = this.onClickCounter.bind(this);
    }

    onClickCounter (event) {
        console.log("Clicked");
        this.setState({
            timeClicked: this.state.timeClicked + 1,
            isLightenUp : !this.state.isLightenUp
        });
        // this.setState({isLightenUp : !this.state.isLightenUp } );
    }

    render () {

        var divStyle = {
            textAlign: 'center'
        };

        return (

            <div className="content-wrapper page-home">

                <h1 style={divStyle}
                    className="greeting-message">Greeting Component Works</h1>

                <h2 id="heading">Bundled up. Whoa!!!</h2>

                <p id="dev-server-message">Development server running</p>
                <p>Submitted time: {this.state.timeClicked}</p>
                <p>Toogle state: {this.state.isLightenUp ? 'true' : 'false'}</p>

                <div className="btn-container">
                    <button className={`home__btn ui-button ${this.state.isLightenUp ? 'is-active' : ''}`}
                        type="button"
                        onClick={this.onClickCounter.bind(this)}>Click me (Count & Toggle)</button>
                </div>

                <p>Biker</p>
                <p><img src="assets/img/home/img_biker.png" alt="" /></p>

                <p>HTML5</p>
                <p><img src="assets/img/home/blog-html-5-400x400.png" alt="" /></p>

                <p>Front-End</p>
                <p><img src="assets/img/home/html5-css-javascript-logos.png" alt="" /></p>
                <p><img src="assets/img/home/bg-people-infront-of-water-fountain-1920-960.jpg" alt="" /></p>

            </div>


        );
    }

}