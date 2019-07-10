import React from 'react';
import { styles } from '../styles/styles';
import { GithubIcon, LinkedInIcon, DevpostIcon } from '../assets/customIcons';
import { githubLink, linkedInLink, devpostLink } from '../data/links';

export default class SocialLinks extends React.Component {
    render() {
        return (
            <div style={styles.WorkIconContainer}>
                <a style={{padding: '1vw'}} href={githubLink}>
                    <GithubIcon IconStyles={this.props.IconStyles}/>
                </a>
                <a style={{padding: '1vw'}} href={linkedInLink}>
                    <LinkedInIcon IconStyles={this.props.IconStyles}/>
                </a>
                <a style={{padding: '1vw'}} href={devpostLink}>
                    <DevpostIcon IconStyles={this.props.IconStyles}/>
                </a>
            </div>
        );
    }
}
