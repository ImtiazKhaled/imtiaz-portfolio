import React from 'react';

export default class Hoverable extends React.Component {
    state = { hovered: false };

    mouseEnter = e => {
        this.setState({
            hovered: !this.state.hovered
        })
    }

    render() {
        return (
            <div onClick={this.mouseEnter}>
                {this.props.children(this.state.hovered)}
            </div>
        );
    }
}
