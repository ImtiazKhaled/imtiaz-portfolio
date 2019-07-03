import React from 'react';
import '../../App.css';
import { Typography, Row, Col, Layout, Affix, Button } from 'antd';
import { styles } from '../../styles/landingPageStyles';
import LandingSidebar from './landingSidebar';
import Breakpoint from 'react-socks';
import { LandingXSmall, LandingSmall, LandingMed, LandingLarge, LandingXLarge } from './landingPages';
import { MenuButton } from '../menuButton/menuButton';
import WOW from 'wowjs';
import { colorThemes } from '../../styles/colorThemes';


export default class LandingPageResponsive extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <Layout>
                <MenuButton  color={colorThemes.landingHeaderFooter} title='home' />
                <Breakpoint xsmall only>
                    <LandingXSmall />
                </Breakpoint>
                <Breakpoint small only>
                    <LandingSmall />
                </Breakpoint>
                <Breakpoint medium only>
                    <LandingMed />
                </Breakpoint>
                <Breakpoint large only>
                    <LandingLarge />
                </Breakpoint>
                <Breakpoint xlarge only>
                    <LandingXLarge />
                </Breakpoint>
            </Layout>
        );
    }
}
