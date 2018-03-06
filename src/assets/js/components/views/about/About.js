import React from 'react';

export default class About extends React.Component {

    render () {

        var divStyle = {
            textAlign: 'center'
        };

        return (

            <div className="content-wrapper page-about">

                <h1 style={divStyle}
                    className="about-message">About Component Rendered</h1>

                <h2 id="h2ading">Generated an about page</h2>

                <p id="dev-server-message">Development server running</p>
                <p>Smile</p>
                <p><img src="assets/img/about/smile.png" alt="" /></p>
                <p><img src="assets/img/about/toronto.jpg" alt="" /></p>

            </div>

        );
    }

}