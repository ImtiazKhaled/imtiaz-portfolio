import React from 'react';
import Hoverable from './toggleHover';
import { OnAboutHover, OnAboutRelease } from './toggleAbout';
import { OnContactHover, OnContactRelease } from './toggleContact';
import { OnProjectHover, OnProjectRelease } from './toggleProject';
import DetailsAbout from './details/detailsAbout';
import DetailsProject from './details/detailsProject';
import DetailsContact from './details/detailsContact';
import DetailsBlank from './details/detailsBlank';
import { styles } from '../styles/styles';
import { Row, Col } from 'antd';


export default class Mainbody extends React.Component {
    state = { hoveredAbout: false, hoveredProject: false, hoveredContact: false, hovered: false, };

    onAboutClick = e => {
        this.setState({
            hoveredProject: false,
            hoveredContact: false,
            hoveredAbout: !this.state.hoveredAbout
        })
    }

    onPorjectClick = e => {
        this.setState({
            hoveredAbout: false,
            hoveredContact: false,
            hoveredProject: !this.state.hoveredProject
        })
    }

    onContactClick = e => {
        this.setState({
            hoveredProject: false,
            hoveredAbout: false,
            hoveredContact: !this.state.hoveredContact
        })
    }


    render() {
        return (
            <div styles={styles.backGround}>
                <Row>
                    <Col span={8}>
                        <Hoverable showDetails={this.onAboutClick}>
                            {hovered => <div>{hovered ? <OnAboutHover /> : <OnAboutRelease />}</div>}
                        </Hoverable>
                    </Col>
                    <Col span={8}>
                        <Hoverable showDetails={this.onPorjectClick}>
                            {hovered => <div>{hovered ? <OnProjectHover /> : <OnProjectRelease />}</div>}
                        </Hoverable>
                    </Col>
                    <Col span={8}>
                        <Hoverable showDetails={this.onContactClick}>
                            {hovered => <div>{hovered ? <OnContactHover /> : <OnContactRelease />}</div>}
                        </Hoverable>
                    </Col>

                    {this.state.hoveredAbout ?
                        <DetailsAbout />
                        :
                        this.state.hoveredProject ?
                            <DetailsProject />
                            :
                            this.state.hoveredContact ?
                                <DetailsContact />
                                :
                                <DetailsBlank />
                    }
                </Row>
            </div>
        );
    }
}
