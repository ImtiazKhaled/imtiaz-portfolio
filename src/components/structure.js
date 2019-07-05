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
import { TopBar } from './topbar';
const { Title, Text } = Typography;
const { Header, Footer } = Layout;


export class Structure extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
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
                    <TopBar />
                    <Landing />
                    <Who />
                    <Work />
                    <Contact />
                    <Footer style={styles.Footer}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}
