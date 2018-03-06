'use strict';
/**
 * Javascript
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

/**
 * Commons
 */
import Navigation from '../js/components/partials/Navigation';
import Footer from '../js/components/partials/Footer';

/**
 * Pages
 */
import Greeting from '../js/components/views/home/Greeting';
import About from '../js/components/views/about/About';

console.log("React: ", React);

/**
 * Styles
 */
import '../less/app.less';

class Layout extends React.Component {

    render () {

        return (
            <HashRouter hashType="slash" basename="/">
                <div className="page-view">
                    <Navigation />
                    <div className="site-main">
                        <Switch>
                            <Route exact path='/' component={Greeting} />
                            <Route path='/about' component={About} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        );

    }

}

const Root = document.getElementById('root');
ReactDOM.render(<Layout />, Root);


// import * as moduleOne from '../js/module/module-one';
// import * as moduleTwo from '../js/module/module-two';

// moduleOne.init();

// console.log("app.js");

// var testTemplate = `hello world`;
// console.log(testTemplate);