import edunateLogo from '../assets/edunate_logo.png';
import subbeyLogo from '../assets/subbey_logo.png';
import fitnessLogo from '../assets/fitness_logo.png';

export const work = [
    {
        id: "1",
        type: "Personal Project",
        logo: edunateLogo,
        title: 'edunate',
        sourceCodeAvailable: true,
        websiteLinkAvailable: true,
        sourceCode: 'https://github.com/ImtiazKhaled/edunate',
        websiteLink: 'http://www.edunate.org/',
        description: 'The platform allows you to micro-donate to students for their academic needs, help others by tutoring for classes and other essential tools needed in the industry and exchange expensive commodities like textbooks, electronics etc or even post something you need!',
        stack: ['reactJS', 'nodeJS'],
    },
    {
        id: "2",
        type: "Personal Project",
        logo: subbeyLogo,
        title: 'subbey',
        sourceCodeAvailable: true,
        websiteLinkAvailable: false,
        sourceCode: 'https://github.com/ImtiazKhaled/edunate',
        websiteLink: null,
        description: 'A subscription manager app that helps put into prespective how much is spend on subscriptions daily, weekly, monthly and yearly',
        stack: ['flutter'],
    },
    {
        id: "3",
        type: "Personal Project",
        logo: fitnessLogo,
        title: 'finess',
        sourceCodeAvailable: true,
        websiteLinkAvailable: false,
        sourceCode: 'https://github.com/ImtiazKhaled/FitnessApp',
        websiteLink: 'http://www.edunate.org/',
        description: 'A flutter based phone application used to encourage users to workout more oftern by provding promotions in exchange of the user doing the predefined workout sets.',
        stack: ['flutter', 'nodeJS'],
    },
];