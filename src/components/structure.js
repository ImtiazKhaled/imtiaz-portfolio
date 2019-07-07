import React from 'react';
import { Typography, Row, Col, Layout, Button, Divider } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';
import { Landing } from './landingPage';
import { Who } from './whoPage';
import { Work } from './workPage';
import { Contact } from './contactPage';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { NavBar } from './navBar';
const { Title, Text } = Typography;
const { Header, Footer } = Layout;


export class Structure extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
        Events.scrollEvent.register('begin', function (to, element) {
        });

        Events.scrollEvent.register('end', function (to, element) {
        });
        scrollSpy.update();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop = e => {
        scroll.scrollToTop();
    }

    render() {
        return (
            <div>
                <Row style={styles.Page}>
                    <h1 style={{backgroundColor: 'white', color: 'black'}}>this website is still under construction, {this.props.responsive.indentifier}</h1>
                    <NavBar responsive={this.props.responsive} />
                    <Landing responsive={this.props.responsive} />
                    <Who responsive={this.props.responsive} />
                    <Work responsive={this.props.responsive} />
                    <Contact responsive={this.props.responsive} />
                    <Footer style={this.props.responsive.Footer}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}
