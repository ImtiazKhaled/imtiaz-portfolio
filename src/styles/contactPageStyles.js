import { colorThemes } from './colorThemes';

export var styles = {
    contactHeader: {
        height: '90vh',
        background: 'linear-gradient(to bottom, ' + colorThemes.contactBackgroundDark + ', ' + colorThemes.contactBackgroundMid,
        backgroundColor: colorThemes.contactBackground,
        paddingTop: '40vh',
        textAlign: 'center',
    },
    contactPage: {
        background: 'linear-gradient(to bottom, ' + colorThemes.contactBackgroundMid + ', ' + colorThemes.contactBackground,
    },
    contactPageDetails: {
        height: '70vh',
    },
    contactTitle: {
        fontSize: '13vw',
        textAlign: 'center',
        color: colorThemes.contactHeaderFooter,
    },
    contactDetails: {
        fontSize: '7vw',
        color: colorThemes.contactDetailsTitle,
    },
    contactDetailsSub: {
        fontSize: '3vw',
        color: colorThemes.contactDetailsTitle,
    },
    contactDetailsText: {
        fontSize: '1.2vw',
        color: colorThemes.contactDetialsText,
    },
    contactFooter: {
        height: '10vh',
        width: '100vw',
        position: 'sticky',
        bottom: '0',
        color: colorThemes.contactHeaderFooter,
        fontSize: '1em',
        textAlign: 'center',
        backgroundColor: colorThemes.contactBackground,
    },
    contactDetialsImageFirst: {
        width: '50%',
        marginTop: '10vh',
        marginLeft: '10vw',
        borderRadius: '30px',
        boxShadow: '5px 5px',
    },
    contactDetialsImage: {
        width: '50%',
        marginTop: '30vh',
        marginLeft: '15vw',
        borderRadius: '30px',
        boxShadow: '5px 5px',
    },
}