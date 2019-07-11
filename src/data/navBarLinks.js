import React from 'react';
import { GithubIcon, LinkedInIcon, DevpostIcon } from '../assets/customIcons';
import { githubLink, linkedInLink, devpostLink } from '../data/links';
import { Row, Button, Divider, Affix, Modal, Tag, Col, Menu } from 'antd';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


export const WhoLink = props =>
<Link activeClass="active" to="who" isDynamic={true} spy={true} smooth={true} duration={500} style={props.responsive.NavBarText}>
    who
</Link>;

export const WorkLink = props =>
<Link activeClass="active" to="work" isDynamic={true} spy={true} smooth={true} duration={500} style={props.responsive.NavBarText}>
    work
    </Link>

export const ContactLink = props =>
<Link activeClass="active" to="contact" isDynamic={true} spy={true} smooth={true} duration={500} style={props.responsive.NavBarText}>
    contact
</Link>

export const ResumeLink = props =>
<a href='https://drive.google.com/uc?export=download&id=1K7ron4NnobQEof6Wccj1W8QMn3aB0dyO'>
    <Tag style={props.responsive.ContactMeTag}>Resume</Tag>
</a>

export const GithubLink = props =>
<a href={githubLink}>
    <GithubIcon IconStyles={props.responsive.NavBarIcon} />
</a>

export const LinkedInLink = props =>
<a href={linkedInLink}>
    <LinkedInIcon IconStyles={props.responsive.NavBarIcon} />
</a>

export const DevpostLink = props =>
<a href={devpostLink}>
    <DevpostIcon IconStyles={props.responsive.NavBarIcon} />
</a>
