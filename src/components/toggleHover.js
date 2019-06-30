import React from 'react';

export default class Hoverable extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div
                // onClick={() => this.setState({ hovered: false })}
                onMouseEnter={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
            >
                {this.props.children(this.state.hovered)}
            </div>
        );
    }
}
