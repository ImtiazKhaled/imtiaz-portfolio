import { colorThemes } from './colorThemes';

export var styles = {
    Landing: {
        height: '100vh',
        paddingTop: '10vh',
        paddingRight: '10vw',
        paddingLeft: '2vw',
        textAlign: 'right',
    },
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
    NavBarSmall: {
        fontSize: '5vw',
        color: colorThemes.BackgroundAccentMain,
    },
    NavBarText: {
        fontSize: '8vw',
        color: colorThemes.BackgroundAccentMain,
    },
    NavBarColor: {
        backgroundColor: colorThemes.Background,
    },
    Page: {
        background: 'linear-gradient(to bottom, ' + colorThemes.BackgroundDark + ', ' + colorThemes.Background,
    },
    ContactMeTag: {
        margin: '1vw',
        fontSize: '1.5vw',
        fontFamily: 'hack, sans-serif',
        color: colorThemes.BackgroundAccent,
        backgroundColor: colorThemes.BackgroundAccentTwo,
    },
    MainPage: {
        minHeight: '100vh',
    },
    Tab: {
        color: colorThemes.BackgroundAccentTwo,
    },
    ContactPage: {
        minHeight: '70vh',
        textAlign: 'center',
    },
    ContactInfo: {
        padding: '5vw',
    },
    Footer: {
        height: '10vh',
        width: '100vw',
        color: colorThemes.BackgroundAccentMain,
        fontSize: '1vw',
        textAlign: 'center',
        backgroundColor: colorThemes.Background,
    },
}