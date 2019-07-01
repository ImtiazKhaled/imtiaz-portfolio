import { colorThemes } from './colorThemes';

export var styles = {
    cardClosed: {
        color: colorThemes.cardTextColor,
        padding: '0em',
        backgroundColor: colorThemes.closedCardColor,
    },
    cardOpen: {
        color: colorThemes.cardTextColor,
        padding: '0em',
        backgroundColor: colorThemes.headerFooter,
    },
    cardDiv: {

    },
    headerLayout: {
        height: '10vh',
        backgroundColor: colorThemes.pageBackground,
    },
    bodyLayout: {
        height: '80vh',
        padding: '0.5em',
        backgroundColor: colorThemes.pageBackground,
    },
    creditLink: {
        textDecoration: false,
        color: colorThemes.pageBackground,
        fontSize: '0.1em',
    },
    title: {
        fontSize: '3em',
        textAlign: 'center',
        color: colorThemes.headerFooter
    },
    footer: {
        height: '10vh',
        position: 'sticky',
        bottom: '0',
        color: colorThemes.headerFooter,
        fontSize: '1em',
        textAlign: 'center',
        backgroundColor: colorThemes.pageBackground,
    },
    sidebar: {
        textAlign: "right",
    },
    logo: {
        textAlign: 'center',
        width: '100px',
    },
    projectTitle: {
        fontSize: '2em',
        color: colorThemes.cardTextColor,
    },
    hitCounter: {
        backgroundColor: colorThemes.pageBackground,
        color: colorThemes.headerFooter,
    },
    landingPage: {
        height: '90vh',
        backgroundColor: colorThemes.pageBackground,
    },
    landingTitle: {
        fontSize: '15vh',
        textAlign: 'center',
        color: colorThemes.headerFooter
    },
}