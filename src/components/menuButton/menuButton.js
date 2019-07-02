import React from 'react';
import { Affix, Button, Modal, Typography, Row } from 'antd';
import { styles } from '../../styles/menuButtonStyles';
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

    render() {


        return (
            <div>
                <Affix offsetTop={20} style={styles.menuButtonLanding} >
                    <Button type='primary' shape='circle' icon='menu' size='large' onClick={this.openMenu} />
                </Affix>
                <Modal
                    centered
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    style={{ alignContent: 'center' }}
                >
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
