import { colorThemes } from './colorThemes';

export var styles = {
    Landing: {
        minHeight: '100vh',
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
}