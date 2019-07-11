import React from 'react';
import { Row, Button, Divider, Affix, Modal, Tag, Col, Menu } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { WhoLink, WorkLink, ContactLink, ResumeLink, GithubLink, LinkedInLink, DevpostLink } from '../data/navBarLinks'


export class NavBar extends React.Component {
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
                <div style={{ paddingLeft: '2vw' }}>
                    <Affix offsetTop={20} style={styles.menuButtonLanding} >
                        <div>
                            <Button style={this.props.responsive.NavBar} type='link' shape='circle' icon='menu' size='large' onClick={this.openMenu} />
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
                            <Link activeClass="active" to="who" isDynamic={true} spy={true} smooth={true} duration={500} style={this.props.responsive.NavBarText}>
                                who
                    </Link>
                        </Row>
                        <Row>
                            <Link activeClass="active" to="work" isDynamic={true} spy={true} smooth={true} duration={500} style={this.props.responsive.NavBarText}>
                                work
                    </Link>
                        </Row>
                        <Row>
                            <Link activeClass="active" to="contact" isDynamic={true} spy={true} smooth={true} duration={500} style={this.props.responsive.NavBarText}>
                                contact
                    </Link>
                        </Row>
                        <Row>
                            <a href='https://drive.google.com/uc?export=download&id=1K7ron4NnobQEof6Wccj1W8QMn3aB0dyO'>
                                <Tag style={this.props.responsive.ContactMeTag}>Resume</Tag>
                            </a>
                        </Row>
                        <Row style={styles.NavBarLinks}>
                        <p style={styles.NavBarLinks}>Contact me at</p>
                        </Row>
                        <Row style={styles.NavBarLinks}>
                            <div style={{margin: '1vw'}}>
                            <GithubLink responsive={this.props.responsive} />
                            </div>
                            <div style={{margin: '1vw'}}>
                            <LinkedInLink responsive={this.props.responsive} />
                            </div>
                            <div style={{margin: '1vw'}}>
                            <DevpostLink responsive={this.props.responsive} />
                            </div>
                        </Row>
                    </Modal>
                </div>
                :
                <Affix>
                    <Menu style={this.props.responsive.NavBar} mode="horizontal">
                        <Menu.Item key='who'>
                            <WhoLink responsive={this.props.responsive} />
                        </Menu.Item>
                        <Menu.Item key='work'>
                            <WorkLink responsive={this.props.responsive} />
                        </Menu.Item>
                        <Menu.Item key='contact'>
                            <ContactLink responsive={this.props.responsive} />
                        </Menu.Item>
                        <Menu.Item key='resume'>
                            <ResumeLink responsive={this.props.responsive} />
                        </Menu.Item>
                        <Menu.Item key='github'>
                            <GithubLink responsive={this.props.responsive} />
                        </Menu.Item>
                        <Menu.Item key='linkedin'>
                            <LinkedInLink responsive={this.props.responsive} />
                        </Menu.Item>
                        <Menu.Item key='devpost'>
                            <DevpostLink responsive={this.props.responsive} />
                        </Menu.Item>
                    </Menu>
                </Affix>
        );
    }
}
