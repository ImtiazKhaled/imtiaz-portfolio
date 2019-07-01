import React from 'react';
import Hoverable from './toggleHover';
import { OnAboutHover, OnAboutRelease } from '../aboutComponents/toggleAbout';
import DetailsAbout from '../aboutComponents/detailsAbout';
import { OnWorkHover, OnWorkRelease } from '../workComponents/toggleWork';
import DetailsWork from '../workComponents/detailsWork';
import { OnContactHover, OnContactRelease } from '../contactComponents/toggleContact';
import DetailsContact from '../contactComponents/detailsContact';
import DetailsBlank from './detailsBlank';
import { styles } from '../../styles/styles';
import { Row, Col } from 'antd';


export default class Mainbody extends React.Component {
    state = { hoveredAbout: false, hoveredWork: false, hoveredContact: false, hovered: false };

    onAboutClick = e => {
        this.setState({
            hoveredWork: false,
            hoveredContact: false,
            hoveredAbout: !this.state.hoveredAbout
        })
    }

    onPorjectClick = e => {
        this.setState({
            hoveredAbout: false,
            hoveredContact: false,
            hoveredWork: !this.state.hoveredWork
        })
    }

    onContactClick = e => {
        this.setState({
            hoveredWork: false,
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
                            {hovered => <div>{hovered ? <OnWorkHover /> : <OnWorkRelease />}</div>}
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
                        this.state.hoveredWork ?
                            <DetailsWork />
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
