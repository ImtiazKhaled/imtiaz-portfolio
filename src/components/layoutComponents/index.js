import React from 'react';
import MainPage from './mainPage';
import LandingPage from './landingPage';
import { styles } from '../../styles/styles';



export default class Index extends React.Component {
    state = { viewMain: false };

    showPage = e => {
        this.setState({
            viewMain: true
        })
    }

    render() {
        return (
            <div onClick={this.showPage}> { this.state.viewMain ? <MainPage /> : <LandingPage  /> } </div>
        );
    }
}
