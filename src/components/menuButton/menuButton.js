import React from 'react';
import { Affix, Button, Modal, Typography, Row } from 'antd';
import { styles } from '../../styles/menuButtonStyles';
import WOW from 'wowjs';
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
                        <Text onHover={styles.menuOptionSelected} style={styles.menuOptions}>Intro</Text>
                    </Row>
                    <Row>
                        <Text style={styles.menuOptions}>Who</Text>
                    </Row>
                    <Row>
                        <Text style={styles.menuOptions}>Work</Text>
                    </Row>
                    <Row>
                        <Text style={styles.menuOptions}>Contact</Text>
                    </Row>
                </Modal>
            </div>
        );
    }
}
