import React from 'react';

export default class Sidebar extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div style={{ alignItems: 'flex-end' }}>
                <img src={"https://img.icons8.com/color/90/000000/linkedin.png"} alt="linkedin_link" />
                <img src={"https://img.icons8.com/material-outlined/90/000000/github.png"} alt="github_link" />
                <img src={"https://img.icons8.com/color/90/000000/devpost.png"} alt="devpost_link" />
            </div>
        );
    }
}
