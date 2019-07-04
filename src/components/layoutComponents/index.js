import React from 'react';
import WorkPageResponsive from '../workPage/workPageResponsive';
import MainPage from './mainPage';
import LandingPageResponsive from '../landingPage/landingPageResponsive';
import WhoPageResponsive from '../whoPage/whoPageResponsive';
import ContactPageResponsive from '../contactPage/contactPageResponsive';
import { Route, Switch } from 'react-router-dom';

export default class Index extends React.Component {
    state = { viewMain: false };

    showPage = e => {
        this.setState({
            viewMain: true
        })
    }

    render() {
        return (
            // <div onClick={this.showPage}> { this.state.viewMain ? <MainPage /> : <LandingPageResponsive/> } </div>
            <Switch>
                <Route exact path='/' component={LandingPageResponsive} />
                <Route exact path='/who' component={WhoPageResponsive} />
                <Route exact path='/work' component={WorkPageResponsive} />
                <Route exact path='/contact' component={ContactPageResponsive} />
            </Switch>

        );
    }
}
