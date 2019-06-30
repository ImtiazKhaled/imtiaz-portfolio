import React from 'react';
import Hoverable from './toggleHover';
import { OnAboutMeHover, OnAboutMeRelease } from './toggleAboutMe';
import { OnContactHover, OnContactRelease } from './toggleContact';
import { OnProjectHover, OnProjectRelease } from './toggleProject';
import { styles } from '../styles/styles';

export default class Mainbody extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div styles={styles.backGround}>
                <Hoverable>
                    {hovered => <div style={styles.cardDiv} >{hovered ? <OnAboutMeHover /> : <OnAboutMeRelease />}</div>}
                </Hoverable>
                <Hoverable>
                    {hovered => <div>{hovered ? <OnProjectHover /> : <OnProjectRelease />}</div>}
                </Hoverable>
                <Hoverable>
                    {hovered => <div>{hovered ? <OnContactHover /> : <OnContactRelease />}</div>}
                </Hoverable>
            </div>
        );
    }
}
