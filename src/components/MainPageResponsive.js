import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import Breakpoint from 'react-socks';
// import { Structure } from './structure';
import { Structure } from './structure';
import { colorThemes } from '../styles/colorThemes';
import { responsive } from '../data/responsive';
const { Title } = Typography;
const { Header, Footer } = Layout;


export default class WorkPageResponsive extends React.Component {
    render() {
        return (
            <Layout>
                <h1>this website is still under construction</h1>
                <Breakpoint xsmall only>
                    <Structure responsive={responsive[0]} />
                </Breakpoint>
                <Breakpoint small up>
                    <Structure responsive={responsive[1]} />
                </Breakpoint>
                {/* <Breakpoint small only>
                    <WhoSmall />
                </Breakpoint>
                <Breakpoint medium only>
                    <WhoMed />
                </Breakpoint>
                <Breakpoint large only>
                    <WhoLarge />
                </Breakpoint>
                <Breakpoint xlarge only>
                </Breakpoint> */}
            </Layout>
        );
    }
}
