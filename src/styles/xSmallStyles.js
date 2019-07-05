import { colorThemes } from './colorThemes';

export const stylesXS = {
    showNavbar: {
        visibility: 'visible',
        transition: 'all 200ms ease-in',
    },
    hideNavbar: {
        visibility: 'hidden',
        transition: 'all 200ms ease-out',
        transform: 'translate(0, -100)',
    },
    NavBar: {
        backgroundColor: colorThemes.BackgroundDark,
    },
    Title: {
        fontSize: '9vw',
        color: colorThemes.BackgroundAccentMain,
        fontFamily: 'Play, sans-serif',
    },
    Subtitle: {
        fontSize: '4vw',
        color: colorThemes.BackgroundAccentTwo,
        fontFamily: 'Play, sans-serif',
    },
    SubtitleTwo: {
        fontSize: '4vw',
        color: colorThemes.BackgroundAccentTwo,
        fontFamily: 'Play, sans-serif',
    },
    SubtitleThree: {
        fontSize: '5vw',
        color: colorThemes.BackgroundAccentTwo,
        fontFamily: 'Play, sans-serif',
    },
    SubtitleFour: {
        fontSize: '7vw',
        color: colorThemes.BackgroundAccent,
        fontFamily: 'Play, sans-serif',
    },
    SubtitleFive: {
        fontSize: '7vw',
        color: colorThemes.BackgroundAccent,
        fontFamily: 'Play, sans-serif',
    },
    ContactMeTag: {
        margin: '1vw',
        fontSize: '1.5vw',
        // color: colorThemes.BackgroundAccentMain,
        // fontFamily: 'Play, sans-serif',
        fontFamily: 'Play, sans-serif',
        color: colorThemes.BackgroundAccent,
        backgroundColor: colorThemes.BackgroundAccentTwo,
    },
    MainPage: {
        minHeight: '100vh',
    },
    WhoTab: {
        color: 'black',
    },
    WorkIcon: {
        fontSize: '5vw',
        color: colorThemes.BackgroundAccent,
    },
    WorkTitle: {
        fontSize: '2vw',
        fontFamily: 'Play, sans-serif',
        color: colorThemes.BackgroundAccent,
    },
    WorkSocialLink: {
        fontSize: '2vw',
        color: colorThemes.BackgroundAccent,
    },
    WorkTags: {
        fontFamily: 'Play, sans-serif',
        color: colorThemes.BackgroundAccenMain,
        backgroundColor: colorThemes.BackgroundAccent,
    },
    WorkDetails: {
        fontFamily: 'Play, sans-serif',
        fontSize: '1vw',
        color: colorThemes.BackgroundAccent,
    },
    Footer: {
        height: '10vh',
        width: '100vw',
        color: colorThemes.BackgroundAccentMain,
        fontSize: '4vw',
        textAlign: 'center',
        backgroundColor: colorThemes.Background,
    },
    workColSize: 24,
}