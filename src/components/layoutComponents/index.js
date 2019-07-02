import React from 'react';
import MainPage from './mainPage';
import LandingPageResponsive from '../landingPage/landingPageResponsive';
import WhoPageResponsive from '../whoPage/whoPageResponsive';

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
            // <LandingPageResponsive/>
            <WhoPageResponsive />
        );
    }
}
