export default {
    header: {
        'age': ', 21 years old',
        'city': ' is from Bordeaux',
        'food': ' love chocolate croissants !',
        'metier': 'Web Developer',
    },
    about: {
        'title': 'About me',
        'content': "I am a 21 years old web developer passionate about creating high-performance and modern applications. I am proficient in {phpIcon} and JavaScript {jsIcon} / TypeScript, as well as frameworks like Symfony {symfonyIcon}, Angular {angularIcon}, and jQuery. Currently doing an apprenticeship at {sullyGroupLink} and in my first year of a master\'s degree, I combine theory and practice to design robust and tailored solutions. Always curious and motivated, I am ready to take on new challenges to turn your ideas into concrete projects."
    },
    projects: [
        {
            title: 'Pétanquaton',
            link: 'game.petanquaton.online',
            description: ' is a web application developed in React Native, designed for pétanque enthusiasts. It allows you to organize and manage tournaments involving many participants.',
        },
        {
            title: 'Countries API WebApp',
            link: 'romainub87.github.io/Application_countries_API/',
            description: ' is a web application that allows users to search for countries and view detailed information (population, capital, region, languages, currencies, etc.) using an API. ' +
                'It features an intuitive interface with dedicated pages for each country. '
        },
        {
            title: 'Extension Tri de favoris',
            description: ' is a browser extension that enhances the bookmark management experience in Google Chrome. It allows users to sort bookmarks by name, date, or URL, and search for bookmarks by name or URL. ' +
                'It also provides the ability to export bookmarks to a file and import bookmarks from a file'
        },
        {
            title: 'Woodeo',
            link: 'woodeo.valentinraillard.fr/',
            description: ' is a web app that allows series enthusiasts to track their favorite shows, ' +
                'discover new ones, and share their opinions with a community. ' +
                'The intuitive interface and extensive catalog make it an essential tool for all series lovers.'
        },
        {
            title: 'Yam Master',
            link: 'yam-master.fr',
            description: ' is an online Yam (similar to Yahtzee) game hosted at yam-master.fr. It lets players roll dice, build combinations, and track scores. ' +
                'Features include single-player mode, online multiplayer rooms, responsive UI, and score history. '
        },
    ],
    contact: {
        'title': 'Contact',
        'description': 'Feel free to reach out to me via email at ',
        'email': 'romaincordier33160@gmail.com',
        'copied': 'Copied!'
    }
} as const;