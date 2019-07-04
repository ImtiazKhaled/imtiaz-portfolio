import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../styles/workPageStyles'
import Breakpoint from 'react-socks';
import { Work, Structure } from './structure';
import { colorThemes } from '../styles/colorThemes';
const { Title } = Typography;
const { Header, Footer } = Layout;


export default class WorkPageResponsive extends React.Component {
    render() {
        return (
            <Layout>
                {/* <MenuButton color={colorThemes.workHeaderFooter} title={'work'} /> */}
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
                    <Structure />
                {/* </Breakpoint> */}
            </Layout>
        );
    }
}
