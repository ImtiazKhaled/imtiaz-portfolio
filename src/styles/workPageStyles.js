import { colorThemes } from './colorThemes';

export var styles = {
    workHeader: {
        height: '90vh',
        background: 'linear-gradient(to bottom, ' + colorThemes.workBackgroundDark + ', ' + colorThemes.workBackgroundMid,
        backgroundColor: colorThemes.workBackground,
        paddingTop: '40vh',
        textAlign: 'center',
    },
    workPage: {
        background: 'linear-gradient(to bottom, ' + colorThemes.workBackgroundMid + ', ' + colorThemes.workBackground,
    },
    workPageDetails: {
        height: '70vh',
    },
    workTitle: {
        fontSize: '13vw',
        textAlign: 'center',
        color: colorThemes.workHeaderFooter,
    },
    workDetails: {
        fontSize: '7vw',
        color: colorThemes.workDetailsTitle,
    },
    workDetailsSub: {
        fontSize: '3vw',
        color: colorThemes.workDetailsTitle,
    },
    workDetailsText: {
        fontSize: '1.2vw',
        color: colorThemes.workDetialsText,
    },
    workFooter: {
        height: '10vh',
        width: '100vw',
        position: 'sticky',
        bottom: '0',
        color: colorThemes.workHeaderFooter,
        fontSize: '1em',
        textAlign: 'center',
        backgroundColor: colorThemes.workBackground,
    },
    workDetialsImageFirst: {
        width: '50%',
        marginTop: '10vh',
        marginLeft: '10vw',
        borderRadius: '30px',
        boxShadow: '5px 5px',
    },
    workDetialsImage: {
        width: '50%',
        marginTop: '30vh',
        marginLeft: '15vw',
        borderRadius: '30px',
        boxShadow: '5px 5px',
    },
}