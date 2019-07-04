import React from 'react';
import { Affix, Button, Modal, Typography, Row } from 'antd';
import { styles } from '../../styles/menuButtonStyles';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
const { Text } = Typography;


export class MenuButton extends React.Component {

    state = { visible: false }

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

    componentDidMount() {
        new WOW.WOW().init();
    };

    render() {

        return (
            <div>
                <Affix offsetTop={20} style={styles.menuButtonLanding} >
                    <div className='wow fadeInLeftBig' data-wow-duration='1s' data-wow-iteration='1'>
                        <Button style={{ color: this.props.color }} type='link' shape='circle' icon='menu' size='large' onClick={this.openMenu}>
                            {this.props.title}
                        </Button>
                    </div>
                </Affix>
                <Modal
                    centered
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <text>
                        {this.props.worked}
                    </text>
                    <Row>
                        <Link to='/' style={styles.menuOptions}>Intro</Link>
                    </Row>
                    <Row>
                        <Link to='/who' style={styles.menuOptions}>Who</Link>
                    </Row>
                    <Row>
                        <Link to='/work' style={styles.menuOptions}>Work</Link>
                    </Row>
                    <Row>
                        <Link to='/contact' style={styles.menuOptions}>Contact</Link>
                    </Row>
                </Modal>
            </div>
        );
    }
}
