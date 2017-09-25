/**
 * page.jsx: general page layout.
 *
 * Note: this script implements jsx (reactjs) syntax.
 *
 * Note: importing 'named export' (multiple export statements in a module),
 *       requires the object being imported, to be surrounded by { brackets }.
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import HomePage from '../content/home-page.jsx';
import NavBar from '../navigation/nav-bar.jsx';
import LoginLayout from './login.jsx';
import RegisterLayout from './register.jsx';
import UserMenuState from '../redux/container/user-menu.jsx';
import AnalysisLayoutState from '../redux/container/analysis-layout.jsx';

var PageLayout = React.createClass({
    render: function() {
      // local variables
        const history = createBrowserHistory();

      // default value: css classnames
        if (!!this.props && !!this.props.layout && !!this.props.layout.css) {
            var css = this.props.layout.css;
        }
        else {
            var css = 'container default';
        }

        return(
            <Router history={history}>
                <div>
                    <div className={css}>
                        <div className='menu-container'>
                            <UserMenuState />
                        </div>
                        <div className='main'>
                            <Route exact path='/login' component={LoginLayout} />
                            <Route exact path='/logout' component={LoginLayout} />
                            <Route exact path='/register' component={RegisterLayout} />
                            <Route exact path='/session' render = {(props) => {
                                return(
                                    <div>
                                        <NavBar />
                                        <AnalysisLayoutState />
                                    </div>
                                )
                            }} />
                        </div>
                    </div>
                    <Route exact path='/' component={HomePage} />
                </div>
            </Router>
        );
    }
});

// indicate which class can be exported, and instantiated via 'require'
export default PageLayout
