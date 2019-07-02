import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/whoPageStyles';
// import { LandingSidebar, LandingSidebarSmall, LandingSidebarXSmall } from './landingSidebar';
import WOW from 'wowjs';
import UTA from '../../assets/uta_image.png';
import SE from '../../assets/software_engineer.png';
import HOBBY from '../../assets/hobby_image.png';
const { Title, Text } = Typography;
const { Header, Footer } = Layout;


export class Who extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <div style={{ maxWidth: '100%' }}>
                <Row style={styles.whoPage}>
                    <Col span={24}>
                        <Header style={styles.whoHeader}>
                            <h1 className='wow jello' data-wow-duration='2s' data-wow-iteration='1' strong style={styles.whoTitle}>Who?</h1>
                        </Header>
                    </Col>
                    <Col style={styles.whoPageDetails} span={24}>
                        <Row>
                            <Col style={{ alignItems: 'center' }} span={12}>
                                <img className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImage} src={UTA} alt='image of uta' />
                            </Col>
                            <Col span={12}>
                                <div style={{ textAlign: 'left', padding: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetails}>Student.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSub}>University of Texas at Arlington</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}>Computer Science as my major, I am entering my junior year with a GPA of 3.89.</div>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}> I am apart of the prestigious Honors College at our school,</div>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}> and work as a Resident Assistant on campus. </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetails} span={24}>
                        <Row>
                            <Col span={12}>
                                <div style={{ textAlign: 'right', padding: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetails}>Intern Software Engineer.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSub}>Bluetech Solutions</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}>Over the summer of 2019 I interned at a small software development company</div>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}> where I learned the lifecycle of developing an application, and even worked </div>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}>the front end of said appliaction. This was an eye opening experience for me </div>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}>as I was able to see for myself what life would be like as a professional Software Engineeer. </div>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={12}>
                                <img className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImage} src={SE} alt='picture of me' />
                            </Col>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetails} span={24}>
                        <Row>
                            <Col style={{ alignItems: 'center' }} span={12}>
                                <img className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImage} src={HOBBY} alt='image of uta' />
                            </Col>
                            <Col span={12}>
                                <div style={{ textAlign: 'left', padding: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetails}>Hobbyist.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSub}>Stuff I do for fun</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4' style={styles.whoDetailsText}>I spent most of my free time (which I dont have much of) to work on little </div>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}>side project, or relax and watch some Netflix. Much like how people </div>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}>go on trips during the weekend, I like to attend hackathons. So far I along </div>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}>with my have won all but one of the hackathons we attended. </div>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsText}>If i'm doing none of that. I'm probably in my room playing destiny. </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}>
                        <Footer style={styles.whoFooter}>Imtiaz Mujtaba Khaled ©2019</Footer>
                    </Col>
                </Row>
                {/* <Row style={styles.landingSidebarXSmall}>
                    <LandingSidebarXSmall />
                </Row> */}
            </div>
        );
    }
}
