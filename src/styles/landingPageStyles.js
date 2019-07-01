import { colorThemes } from './colorThemes';

export var styles = {
    landingHeaderSmall: {
        height: '80vh',
        background: 'linear-gradient(to bottom, ' + colorThemes.landingBackgroundDark + ', ' + colorThemes.landingBackground,
        backgroundColor: colorThemes.landingBackground,
    },
    landingPageSmall: {
        height: '80vh',
        background: 'linear-gradient(to bottom, ' + colorThemes.landingBackgroundDark + ', ' + colorThemes.landingBackground,
        backgroundColor: colorThemes.landingBackground,
    },
    landingPage: {
        height: '90vh',
        background: 'linear-gradient(to bottom, ' + colorThemes.landingBackgroundDark + ', ' + colorThemes.landingBackground,
        backgroundColor: colorThemes.landingBackground,
    },
    landingTitleSmall: {
        fontSize: '13vw',
        textAlign: 'center',
        color: colorThemes.landingHeaderFooter,
    },
    landingTitleMedium: {
        fontSize: '13vw',
        textAlign: 'center',
        color: colorThemes.landingHeaderFooter,
    },
    landingTitleLarge: {
        fontSize: '10vw',
        textAlign: 'center',
        color: colorThemes.landingHeaderFooter,
    },
    landingTitleXLarge: {
        fontSize: '18vh',
        textAlign: 'center',
        color: colorThemes.landingHeaderFooter,
    },
    landingSidebarSmall: {
        height: '10vh',
        backgroundColor: colorThemes.landingBackground,
    },
    landingSidebar: {
        height: '90vh',
        background: 'linear-gradient(to bottom, ' + colorThemes.landingBackgroundDark + ', ' + colorThemes.landingBackground,
        backgroundColor: colorThemes.landingBackground,
        textAlign: "right",
    },
    landingFooter: {
        height: '10vh',
        width: '100vw',
        position: 'fixed',
        bottom: '0',
        color: colorThemes.landingHeaderFooter,
        fontSize: '1em',
        textAlign: 'center',
        backgroundColor: colorThemes.landingBackground,
    },
    landingCreditLink: {
        textDecoration: false,
        color: colorThemes.landingBackground,
        fontSize: '0.1em',
    },
}