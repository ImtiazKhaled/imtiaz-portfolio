import { colorThemes } from './colorThemes';

export var styles = {
    Landing: {
        height: '105vh',
        paddingTop: '10vh',
        paddingRight: '10vw',
        textAlign: 'right',
    },
    Page: {
        background: 'linear-gradient(to bottom, ' + colorThemes.BackgroundDark + ', ' + colorThemes.Background,
    },
    PageDetails: {
        height: '70vh',
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
    ContactMeButton: {
        margin: '1vw',
        fontSize: '1.5vw',
        color: colorThemes.HeaderFooter,
        fontFamily: 'Play, sans-serif',
    },
    WhoMain: {
        height: '90vh',
        // paddingTop: '10vh',
        // paddingRight: '10vw',
        // textAlign: 'right',
    },
    Details: {
        fontSize: '7vw',
        color: colorThemes.DetailsTitle,
    },
    DetailsSub: {
        fontSize: '3vw',
        color: colorThemes.DetailsTitle,
    },
    DetailsText: {
        fontSize: '1.2vw',
        color: colorThemes.DetialsText,
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
    DetialsImageFirst: {
        width: '50%',
        marginTop: '10vh',
        marginLeft: '10vw',
        borderRadius: '30px',
        boxShadow: '5px 5px',
    },
    DetialsImage: {
        width: '50%',
        marginTop: '30vh',
        marginLeft: '15vw',
        borderRadius: '30px',
        boxShadow: '5px 5px',
    },
}