import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { Who } from './whoPages';
import { styles } from '../../styles/whoPageStyles';
import { MenuButton } from '../menuButton/menuButton';
import { WhoXSmall, WhoSmall, WhoMed, WhoLarge, WhoXLarge } from './whoPages';
import Breakpoint from 'react-socks';
const { Title } = Typography;
const { Header, Footer } = Layout;


export default class WhoPageResponsive extends React.Component {
    render() {
        return (
            <Layout>
                <MenuButton />
                <Breakpoint xsmall only>
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
                <Breakpoint xlarge only>
                    <WhoXLarge />
                </Breakpoint>
            </Layout>
        );
    }
}
