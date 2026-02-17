import AsIcon from './assets/a-icon.png';
import C1Logo from './assets/abundant-logo.png';
import C2Logo from './assets/nullclass-logo.png';
import C3Logo from './assets/lookman-logo.png';

export const services = [
    {
        title: "Technology Enthusiast",
        icon: AsIcon,
    },
    {
        title: "Software Engineer",
        icon: AsIcon,
    },
];

export const name = 'Suhail';

export const experiences = [
    {
        'company': 'Abundant AI Private Limited',
        'role': 'Application Support Engineer',
        'duration': 'Jun 2025 - Oct 2025',
        'logo': C1Logo,
        'points': [
            'Worked closely with development teams to analyze and debug application level issues in ERP-based POS and Inventory systems. ',
            'Executed complex SQL queries and stored procedures to validate data, generate reports, and support application functionality.',
            'Assisted in identifying root causes for production issues by analyzing logs and coordinating fixes with developers.',
            'Supported application enhancements and performance improvements by validating fixes and monitoring system behavior. '
        ],
        'url': 'https://abundantai.in/',
    },

    {
        'company': 'Nullclass Edtech Pvt Ltd',
        'role': 'Web Developer Internship',
        'duration': 'Nov 2023 - Mar 2024',
        'logo': C2Logo,
        'points': [
            'Designed and developed responsive web interfaces using HTML, CSS, JavaScript, and React.js.',
            'Built reusable React components and implemented client-side routing using React Router.',
            'Integrated REST APIs using Axios and handled authentication using JWT.',
            'Worked on full-stack features using Node.js, Express.js, and MongoDB for CRUD operations.',
            'Deployed frontend applications on Netlify and backend services on Render.'
        ],
        'url': 'https://www.nullclass.com/',
    },

    {
        'company': 'Lookman Electroplast Industries Ltd',
        'role': 'Technical Support Engineer',
        'duration': 'Jan 2022 - Feb 2023',
        'logo': C3Logo,
        'points': [
            'Developed Python automation scripts to resolve device connectivity and tracking issues, improving operational efficiency.',
            'Analyzed system logs and configuration issues to identify and fix software related problems.',
            'Worked on Linux based systems, handling deployments, updates, and troubleshooting tasks.',
            'Collaborated with cross functional teams, gaining strong exposure to real world software systems and workflows.'

        ],
        'url': 'https://securatechnologies.ai/',
    },
]



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
