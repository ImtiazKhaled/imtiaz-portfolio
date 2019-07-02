import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { Who } from './whoPages';
import { styles } from '../../styles/whoPageStyles';
import { MenuButton } from '../menuButton/menuButton';
// import { LandingSidebar, LandingSidebarSmall, LandingSidebarXSmall } from './landingSidebar';
const { Title } = Typography;
const { Header, Footer } = Layout;


export default class WhoPageResponsive extends React.Component {
    render() {
        return (
            <Layout>
                <MenuButton />
                <Who />
            </Layout>
        );
    }
}
