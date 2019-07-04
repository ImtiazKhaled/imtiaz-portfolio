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
    MainPage: {
        minHeight: '100vh',
    },
    WhoTab: {
        color: 'black',
    },
    WorkCardContainer: {
        margin: '2vw',
    },
    WorkIcon: {
        fontSize: '5vw',
    },
    WorkTitle: {
        fontSize: '2vw',
        fontFamily: 'Play, sans-serif',
    },
    WorkSocialLink: {
        fontSize: '2vw',
    },
    WorkTags: {
        fontFamily: 'Play, sans-serif',
    },
    WorkDetails: {
        fontFamily: 'Play, sans-serif',
        fontSize: '1vw',
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