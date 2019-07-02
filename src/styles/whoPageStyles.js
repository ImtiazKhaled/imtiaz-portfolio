import { colorThemes } from './colorThemes';

export var styles = {
    whoHeader: {
        height: '100vh',
        background: 'linear-gradient(to bottom, ' + colorThemes.whoBackgroundDark + ', ' + colorThemes.whoBackgroundMid,
        backgroundColor: colorThemes.whoBackground,
        paddingTop: '40vh',
        textAlign: 'center',
    },
    whoPage: {
        // height: '90vh',
        background: 'linear-gradient(to bottom, ' + colorThemes.whoBackgroundMid + ', ' + colorThemes.whoBackground,
        // backgroundColor: colorThemes.landingBackground,
    },
    whoPageDetails: {
        height: '100vh',
        // textAlign: 'center'
        // background: 'linear-gradient(to bottom, ' + colorThemes.landingBackgroundDark + ', ' + colorThemes.landingBackground,
        // backgroundColor: colorThemes.landingBackground,
    },
    whoTitle: {
        fontSize: '13vw',
        textAlign: 'center',
        color: colorThemes.whoHeaderFooter,
    },
    whoDetails: {
        fontSize: '7vw',
        color: colorThemes.whoDetailsTitle,
    },
    whoDetailsSub: {
        fontSize: '2vw',
        color: colorThemes.whoDetailsTitle,
    },
    whoDetailsText: {
        fontSize: '1vw',
        // color: colorThemes.whoHeaderFooter,
        // color: colorThemes.whoDetailsTitle,
    },
    whoFooter: {
        height: '10vh',
        width: '100vw',
        position: 'sticky',
        bottom: '0',
        color: colorThemes.whoHeaderFooter,
        fontSize: '1em',
        textAlign: 'center',
        backgroundColor: colorThemes.whoBackground,
    },
    whoDetialsImage: {
        width: '50%',
        marginTop: '30vh',
        marginLeft: '15vw',
        borderRadius: '30px',
    }
    // whoSidebar: {
    //     height: '15vh',
    //     backgroundColor: colorThemes.landingBackground,
    // },
}