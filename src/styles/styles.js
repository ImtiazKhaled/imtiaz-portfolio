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
    NavBarText: {
        fontColor: colorThemes.BackgroundAccent,
    },
    NavBarLinks: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        color: colorThemes.BackgroundAccent,
    },
    WorkIconContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    Page: {
        background: 'linear-gradient(to bottom, ' + colorThemes.BackgroundDark + ', ' + colorThemes.Background,
    },
    WorkTags: {
        fontFamily: 'hack, sans-serif',
        color: colorThemes.BackgroundAccentThree,
        backgroundColor: 'transparent',
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