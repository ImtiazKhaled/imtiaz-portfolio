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
                <Breakpoint xsmall only>
                    <Structure responsive={responsive[0]} />
                </Breakpoint>
                <Breakpoint small only>
                    <Structure responsive={responsive[1]} />
                </Breakpoint>
                <Breakpoint medium only>
                    <Structure responsive={responsive[2]} />
                </Breakpoint>
                <Breakpoint large only>
                    <Structure responsive={responsive[3]} />
                </Breakpoint>
                <Breakpoint xlarge only>
                    <Structure responsive={responsive[4]} />
                </Breakpoint>
            </Layout>
        );
    }
}
