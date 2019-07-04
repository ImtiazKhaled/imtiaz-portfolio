import { colorThemes } from './colorThemes';

export var styles = {
    Landing: {
        height: '100vh',
        paddingTop: '10vh',
        paddingRight: '10vw',
        textAlign: 'right',
    },
    Page: {
        background: 'linear-gradient(to bottom, ' + colorThemes.BackgroundDark + ', ' + colorThemes.Background,
    },
    Title: {
        fontSize: '3vw',
        color: colorThemes.HeaderFooter,
        fontFamily: 'Play, sans-serif',
    },
    Subtitle: {
        fontSize: '2vw',
        color: colorThemes.HeaderFooter,
        fontFamily: 'Play, sans-serif',
    },
    SubtitleTwo: {
        fontSize: '1.5vw',
        color: colorThemes.HeaderFooter,
        fontFamily: 'Play, sans-serif',
    },
    SubtitleThree: {
        fontSize: '1.5vw',
        color: colorThemes.DetialsText,
        fontFamily: 'Play, sans-serif',
    },
    SubtitleFour: {
        fontSize: '1vw',
        color: colorThemes.WhoDate,
        fontFamily: 'Play, sans-serif',
    },
    ContactMeButton: {
        margin: '1vw',
        fontSize: '1.5vw',
        color: colorThemes.HeaderFooter,
        fontFamily: 'Play, sans-serif',
    },
    WhoMain: {
        height: '100vh',
    },
    WhoTab: {
        color: 'black',
    },
    Footer: {
        height: '10vh',
        width: '100vw',
        position: 'sticky',
        bottom: '0',
        color: colorThemes.HeaderFooter,
        fontSize: '1em',
        textAlign: 'center',
        backgroundColor: colorThemes.Background,
    },
}