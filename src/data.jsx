import adviceGeneratorImg from './assets/project-thumbnails/advice-generator.jpg';
import feedbackAppImg from './assets/project-thumbnails/feedback-app.jpg';
import githubFinderImg from './assets/project-thumbnails/github-finder.jpg';
import ratingComponentImg from './assets/project-thumbnails/rating-component.jpg';

export const skills = [
    {
        id: 0,
        name: 'HTML',
        yearsExperience: 1,
    },
    {
        id: 1,
        name: 'CSS',
        yearsExperience: 1,
    },
    {
        id: 2,
        name: 'JS',
        yearsExperience: 1,
    },
    {
        id: 3,
        name: 'React',
        yearsExperience: 1,
    },
    {
        id: 4,
        name: 'Tailwind',
        yearsExperience: 1,
    },
    {
        id: 5,
        name: 'Linux',
        yearsExperience: 1,
    },
    {
        id: 6,
        name: 'Python',
        yearsExperience: 1,
    },
];

export const projects = [
    {
        id: 0,
        name: 'Github Finder',
        description:
            'A React app to search GitHub profiles and see repo details.',
        projectImg: githubFinderImg,
        tags: ['React', 'Tailwind', 'API'],
        url: 'https://transcendent-jalebi-209f54.netlify.app/',
    },
    {
        id: 1,
        name: 'Feedback App',
        description: 'A feedback/rating UI built using React.',
        projectImg: feedbackAppImg,
        tags: ['React'],
        url: 'https://lustrous-kitsune-f7c032.netlify.app/',
    },
    {
        id: 2,
        name: 'Advice Generator',
        description: 'An interface for making requests to the Advice Slip API.',
        projectImg: adviceGeneratorImg,
        tags: ['React', 'API'],
        url: 'https://legendary-nougat-28dee2.netlify.app/',
    },
    {
        id: 3,
        name: 'Rating Component',
        description: 'My first project. A simple 1-5 rating component.',
        projectImg: ratingComponentImg,
        tags: ['HTML', 'CSS', 'JS'],
        url: 'https://cool-frangollo-7f93a2.netlify.app/',
    },
];
