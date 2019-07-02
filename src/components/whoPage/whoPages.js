import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/whoPageStyles';
import WOW from 'wowjs';
import UTA from '../../assets/uta_image.png';
import SE from '../../assets/software_engineer.png';
import HOBBY from '../../assets/hobby_image.png';
const { Header, Footer } = Layout;


export class WhoXSmall extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={{ maxWidth: '100%' }}>
                <Row style={styles.whoPageS}>
                    <Col span={24}>
                        <Header style={styles.whoHeaderS}>
                            <h1 className='wow jello' data-wow-duration='2s' data-wow-iteration='1' strong style={styles.whoTitleS}>Who?</h1>
                        </Header>
                    </Col>
                    <Col style={styles.whoPageDetailsS} span={24}>
                        <Row>
                            <Row style={{ alignItems: 'center' }}>
                                <img className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageS} src={UTA} alt='image of uta' />
                            </Row>
                            <Row>
                                <div style={{ textAlign: 'left', padding: '5vw' }}>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsS}>Student.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubXS}>University of Texas at Arlington</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextXS}>Computer Science as my major, I am entering my junior year with a GPA of 3.89.
                                         I am apart of the prestigious Honors College at our school,
                                         and work as a Resident Assistant on campus. </div>
                                    </Row>
                                </div>
                            </Row>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsS} span={24}>
                        <Row>
                            <Row>
                                <img className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageFirstS} src={SE} alt='picture of me' />
                            </Row>
                            <Row>
                                <div style={{ textAlign: 'right', padding: '5vw' }}>
                                    <Row>
                                        <div className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsS}>Intern Software Engineer.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubXS}>Bluetech Solutions</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextXS}>Over the summer of 2019 I interned at a small software development company
                                         where I learned the lifecycle of developing an application, and even worked
                                        the front end of said appliaction. This was an eye opening experience for me
                                        as I was able to see for myself what life would be like as a professional Software Engineeer. </div>
                                    </Row>
                                </div>
                            </Row>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsS} span={24}>
                        <Row>
                            <Row style={{ alignItems: 'center' }}>
                                <img className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageSecondS} src={HOBBY} alt='image of uta' />
                            </Row>
                            <Row>
                                <div style={{ textAlign: 'left', padding: '5vw' }}>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsS}>Hobbyist.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubXS}>Stuff I do for fun</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextXS}>I spent most of my free time (which I dont have much of) to work on little
                                        side project, or relax and watch some Netflix. Much like how people
                                        go on trips during the weekend, I like to attend hackathons. So far I along
                                        with my have won all but one of the hackathons we attended.
                                        If i'm doing none of that. I'm probably in my room playing destiny. </div>
                                    </Row>
                                </div>
                            </Row>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Footer style={styles.whoFooterS}>Imtiaz Mujtaba Khaled ©2019</Footer>
                    </Col>
                </Row>
            </div>
        );
    }
}

export class WhoSmall extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={{ maxWidth: '100%' }}>
                <Row style={styles.whoPageS}>
                    <Col span={24}>
                        <Header style={styles.whoHeaderS}>
                            <h1 className='wow jello' data-wow-duration='2s' data-wow-iteration='1' strong style={styles.whoTitleS}>Who?</h1>
                        </Header>
                    </Col>
                    <Col style={styles.whoPageDetailsS} span={24}>
                        <Row>
                            <Row style={{ alignItems: 'center' }}>
                                <img className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageS} src={UTA} alt='image of uta' />
                            </Row>
                            <Row>
                                <div style={{ textAlign: 'left', padding: '5vw' }}>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsS}>Student.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubS}>University of Texas at Arlington</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextS}>Computer Science as my major, I am entering my junior year with a GPA of 3.89.
                                         I am apart of the prestigious Honors College at our school,
                                         and work as a Resident Assistant on campus. </div>
                                    </Row>
                                </div>
                            </Row>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsS} span={24}>
                        <Row>
                            <Row>
                                <img className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageFirstS} src={SE} alt='picture of me' />
                            </Row>
                            <Row>
                                <div style={{ textAlign: 'right', padding: '5vw' }}>
                                    <Row>
                                        <div className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsS}>Intern Software Engineer.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubS}>Bluetech Solutions</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextS}>Over the summer of 2019 I interned at a small software development company
                                         where I learned the lifecycle of developing an application, and even worked
                                        the front end of said appliaction. This was an eye opening experience for me
                                        as I was able to see for myself what life would be like as a professional Software Engineeer. </div>
                                    </Row>
                                </div>
                            </Row>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsS} span={24}>
                        <Row>
                            <Row style={{ alignItems: 'center' }}>
                                <img className='wow fadeInDown' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageSecondS} src={HOBBY} alt='image of uta' />
                            </Row>
                            <Row>
                                <div style={{ textAlign: 'left', padding: '5vw' }}>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsS}>Hobbyist.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubS}>Stuff I do for fun</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInUp' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextS}>I spent most of my free time (which I dont have much of) to work on little
                                        side project, or relax and watch some Netflix. Much like how people
                                        go on trips during the weekend, I like to attend hackathons. So far I along
                                        with my have won all but one of the hackathons we attended.
                                        If i'm doing none of that. I'm probably in my room playing destiny. </div>
                                    </Row>
                                </div>
                            </Row>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Footer style={styles.whoFooterS}>Imtiaz Mujtaba Khaled ©2019</Footer>
                    </Col>
                </Row>
            </div>
        );
    }
}

export class WhoMed extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={{ maxWidth: '100%' }}>
                <Row style={styles.whoPageL}>
                    <Col span={24}>
                        <Header style={styles.whoHeaderL}>
                            <h1 className='wow jello' data-wow-duration='2s' data-wow-iteration='1' strong style={styles.whoTitleL}>Who?</h1>
                        </Header>
                    </Col>
                    <Col style={styles.whoPageDetailsL} span={24}>
                        <Row>
                            <Col style={{ alignItems: 'center' }} span={12}>
                                <img className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageL} src={UTA} alt='image of uta' />
                            </Col>
                            <Col span={12}>
                                <div style={{ textAlign: 'left', paddingLeft: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsL}>Student.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubL}>University of Texas at Arlington</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextM}>Computer Science as my major, I am entering my junior year with a GPA of 3.89.
                                         I am apart of the prestigious Honors College at our
                                          school,
                                         and work as a Resident Assistant on campus. </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsL} span={24}>
                        <Row>
                            <Col span={12}>
                                <div style={{ textAlign: 'right', padding: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsL}>Intern Software Engineer.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubL}>Bluetech Solutions</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextM}>Over the summer of 2019 I interned at a small software development company
                                         where I learned the lifecycle of developing an application, and even worked
                                        the front end of said appliaction. This was an eye opening experience for me
                                        as I was able to see for myself what life would be like as a professional Software Engineeer. </div>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={12}>
                                <img className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageFirstL} src={SE} alt='picture of me' />
                            </Col>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsL} span={24}>
                        <Row>
                            <Col style={{ alignItems: 'center' }} span={12}>
                                <img className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageL} src={HOBBY} alt='image of uta' />
                            </Col>
                            <Col span={12}>
                                <div style={{ textAlign: 'left', padding: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsL}>Hobbyist.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubL}>Stuff I do for fun</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextM}>I spent most of my free time (which I dont have much of) to work on little
                                        side project, or relax and watch some Netflix. Much like how people
                                        go on trips during the weekend, I like to attend hackathons. So far I along
                                        with my have won all but one of the hackathons we attended.
                                        If i'm doing none of that. I'm probably in my room playing destiny. </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Footer style={styles.whoFooterL}>Imtiaz Mujtaba Khaled ©2019</Footer>
                    </Col>
                </Row>
            </div>
        );
    }
}


export class WhoLarge extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={{ maxWidth: '100%' }}>
                <Row style={styles.whoPageL}>
                    <Col span={24}>
                        <Header style={styles.whoHeaderL}>
                            <h1 className='wow jello' data-wow-duration='2s' data-wow-iteration='1' strong style={styles.whoTitleL}>Who?</h1>
                        </Header>
                    </Col>
                    <Col style={styles.whoPageDetailsL} span={24}>
                        <Row>
                            <Col style={{ alignItems: 'center' }} span={12}>
                                <img className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageL} src={UTA} alt='image of uta' />
                            </Col>
                            <Col span={12}>
                                <div style={{ textAlign: 'left', paddingLeft: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsL}>Student.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubL}>University of Texas at Arlington</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextL}>Computer Science as my major, I am entering my junior year with a GPA of 3.89.
                                         I am apart of the prestigious Honors College at our
                                          school,
                                         and work as a Resident Assistant on campus. </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsL} span={24}>
                        <Row>
                            <Col span={12}>
                                <div style={{ textAlign: 'right', padding: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsL}>Intern Software Engineer.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubL}>Bluetech Solutions</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextL}>Over the summer of 2019 I interned at a small software development company
                                         where I learned the lifecycle of developing an application, and even worked
                                        the front end of said appliaction. This was an eye opening experience for me
                                        as I was able to see for myself what life would be like as a professional Software Engineeer. </div>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={12}>
                                <img className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageFirstL} src={SE} alt='picture of me' />
                            </Col>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsL} span={24}>
                        <Row>
                            <Col style={{ alignItems: 'center' }} span={12}>
                                <img className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageL} src={HOBBY} alt='image of uta' />
                            </Col>
                            <Col span={12}>
                                <div style={{ textAlign: 'left', padding: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsL}>Hobbyist.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubL}>Stuff I do for fun</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextL}>I spent most of my free time (which I dont have much of) to work on little
                                        side project, or relax and watch some Netflix. Much like how people
                                        go on trips during the weekend, I like to attend hackathons. So far I along
                                        with my have won all but one of the hackathons we attended.
                                        If i'm doing none of that. I'm probably in my room playing destiny. </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Footer style={styles.whoFooterL}>Imtiaz Mujtaba Khaled ©2019</Footer>
                    </Col>
                </Row>
            </div>
        );
    }
}


export class WhoXLarge extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={{ maxWidth: '100%' }}>
                <Row style={styles.whoPageXL}>
                    <Col span={24}>
                        <Header style={styles.whoHeaderXL}>
                            <h1 className='wow jello' data-wow-duration='2s' data-wow-iteration='1' strong style={styles.whoTitleXL}>Who?</h1>
                        </Header>
                    </Col>
                    <Col style={styles.whoPageDetailsXL} span={24}>
                        <Row>
                            <Col style={{ alignItems: 'center' }} span={12}>
                                <img className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageXL} src={UTA} alt='image of uta' />
                            </Col>
                            <Col span={12}>
                                <div style={{ textAlign: 'left', paddingLeft: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsXL}>Student.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubXL}>University of Texas at Arlington</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextXL}>Computer Science as my major, I am entering my junior year with a GPA of 3.89.
                                         I am apart of the prestigious Honors College at our school,
                                         and work as a Resident Assistant on campus. </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsXL} span={24}>
                        <Row>
                            <Col span={12}>
                                <div style={{ textAlign: 'right', padding: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsXL}>Intern Software Engineer.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubXL}>Bluetech Solutions</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextXL}>Over the summer of 2019 I interned at a small software development company
                                         where I learned the lifecycle of developing an application, and even worked
                                        the front end of said appliaction. This was an eye opening experience for me
                                        as I was able to see for myself what life would be like as a professional Software Engineeer. </div>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={12}>
                                <img className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageFirstXL} src={SE} alt='picture of me' />
                            </Col>
                        </Row>
                    </Col>
                    <Col style={styles.whoPageDetailsXL} span={24}>
                        <Row>
                            <Col style={{ alignItems: 'center' }} span={12}>
                                <img className='wow fadeInLeft' data-wow-duration='0.5s' data-wow-iteration='1' style={styles.whoDetialsImageXL} src={HOBBY} alt='image of uta' />
                            </Col>
                            <Col span={12}>
                                <div style={{ textAlign: 'left', padding: '2vw' }}>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' strong style={styles.whoDetailsXL}>Hobbyist.</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.whoDetailsSubXL}>Stuff I do for fun</div>
                                    </Row>
                                    <Row>
                                        <div className='wow fadeInRight' data-wow-duration='0.5s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.whoDetailsTextXL}>I spent most of my free time (which I dont have much of) to work on little
                                        side project, or relax and watch some Netflix. Much like how people
                                        go on trips during the weekend, I like to attend hackathons. So far I along
                                        with my have won all but one of the hackathons we attended.
                                        If i'm doing none of that. I'm probably in my room playing destiny. </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Footer style={styles.whoFooterXL}>Imtiaz Mujtaba Khaled ©2019</Footer>
                    </Col>
                </Row>
            </div>
        );
    }
}
