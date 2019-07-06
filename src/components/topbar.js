import React from 'react';
import { Typography, Row, Col, Layout, Button, Divider, Affix, Modal } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';
import { Landing } from './landingPage';
import { Who } from './whoPage';
import { Work } from './workPage';
import { Contact } from './contactPage';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
const { Title, Text } = Typography;
const { Header, Footer } = Layout;


export class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            scrollPos: 0,
            visible: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount = e => {
        new WOW.WOW().init();
        window.addEventListener("scroll", this.handleScroll);
        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }
    componentWillUnmount = e => {
        window.removeEventListener("scroll", this.handleScroll);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    handleScroll = e => {
        const { scrollPos } = this.state;
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > scrollPos
        });
    }
    openMenu = e => {
        this.setState({
            visible: true,
        });
    }
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            this.props.responsive.TopBar ?
                <div>
                    <Affix offsetTop={20} style={styles.menuButtonLanding} >
                        <div>
                            <Button style={styles.NavBarSmall} type='link' shape='circle' icon='menu' size='large' onClick={this.openMenu} />
                        </div>
                    </Affix>
                    <Modal
                        centered
                        bodyStyle={styles.NavBarColor}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <text>
                            {this.props.worked}
                        </text>
                        <Row>
                            <Link activeClass="active" to="who" isDynamic={true} spy={true} smooth={true} duration={500} style={styles.NavBarText}>
                                who
                    </Link>
                        </Row>
                        <Row>
                            <Link activeClass="active" to="work" isDynamic={true} spy={true} smooth={true} duration={500} style={styles.NavBarText}>
                                work
                    </Link>
                        </Row>
                        <Row>
                            <Link activeClass="active" to="contact" isDynamic={true} spy={true} smooth={true} duration={500} style={styles.NavBarText}>
                                contact
                    </Link>
                        </Row>
                    </Modal>
                </div>
                :
                <div>
                    <Affix style={this.state.show ? styles.showNavbar : styles.hideNavbar}>
                        <div style={styles.NavBar}>
                            <Row>
                                <Col span={8}>
                                    <Divider>
                                        <Link activeClass="active" to="who" isDynamic={true} spy={true} smooth={true} duration={500} style={styles.SubtitleTwo}>
                                            who
                                    </Link>
                                    </Divider>
                                </Col>
                                <Col span={8}>
                                    <Divider>
                                        <Link activeClass="active" to="work" isDynamic={true} spy={true} smooth={true} duration={500} style={styles.SubtitleTwo}>
                                            work
                                    </Link>
                                    </Divider>
                                </Col>
                                <Col span={8}>
                                    <Divider>
                                        <Link activeClass="active" to="contact" isDynamic={true} spy={true} smooth={true} duration={500} style={styles.SubtitleTwo}>
                                            contact
                                    </Link>
                                    </Divider>
                                </Col>
                            </Row>
                        </div>
                    </Affix>
                </div>
        );
    }
}
