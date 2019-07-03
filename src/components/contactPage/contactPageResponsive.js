import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/contactPageStyles'
import Breakpoint from 'react-socks'
import { Contact } from './contactPages';
import { MenuButton } from '../menuButton/menuButton'
import { colorThemes } from '../../styles/colorThemes';
const { Title } = Typography;
const { Header, Footer } = Layout;


export default class WhoPageResponsive extends React.Component {
    render() {
        return (
            <Layout>
                <MenuButton color={colorThemes.contactHeaderFooter} title={'contact'} />
                {/* <Breakpoint xsmall only>
                    <WhoXSmall />
                </Breakpoint>
                <Breakpoint small only>
                    <WhoSmall />
                </Breakpoint>
                <Breakpoint medium only>
                    <WhoMed />
                </Breakpoint>
                <Breakpoint large only>
                    <WhoLarge />
                </Breakpoint>
                <Breakpoint xlarge only> */}
                    <Contact />
                {/* </Breakpoint> */}
            </Layout>
        );
    }
}
