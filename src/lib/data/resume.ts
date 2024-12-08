import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon } from 'lucide-svelte';

import GithubSvg from '$lib/assets/github.svg';
import GithubDarkSvg from '$lib/assets/github-dark.svg';

import GmailSvg from '$lib/assets/gmail.svg';
import GmailDarkSvg from '$lib/assets/gmail-dark.svg';

import LinkedinSvg from '$lib/assets/linkedin.svg';
import LinkedinDarkSvg from '$lib/assets/linkedin-dark.svg';

import TwitterSvg from '$lib/assets/x.svg';
import TwitterDarkSvg from '$lib/assets/x-dark.svg';

export const DATA = {
	name: 'Adam Lisichin',
	initials: 'AL',
	url: 'https://github.com/Alschn',
	img: '',
	location: 'Warsaw, Poland',
	locationLink: 'https://www.google.com/maps/place/warsaw',
	description: '',
	summary:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed odio vitae neque ornare lacinia ac non libero. Maecenas ut interdum sem, at vestibulum ante. Aenean pharetra neque vitae velit viverra egestas. Vivamus eget feugiat purus. Integer porta mauris lacus, eu dictum nunc commodo sit amet. Sed tortor purus, gravida in euismod a, imperdiet a tortor. Nunc risus tellus, suscipit eu porta ac, vulputate ac orci.',
	avatarUrl: '',
	skills: [
		'Python',
		'Django',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Svelte',
		'Sveltekit',
		'TailwindCSS',
		'Postgres',
		'Redis',
		'RabbitMQ',
		'Docker'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#projects', icon: CodeIcon, label: 'Projects' }
	],
	hero: {
		title: "Hi, I'm Adam 👋",
		subtitle: 'Fullstack Developer experienced in building applications using Django and React.'
	},
	contact: {
		email: 'hello@example.com',
		tel: '',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/Alschn',
				icon: GithubSvg,
				dark_icon: GithubDarkSvg,
				navbar: true
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/adam-lisichin-3402a81b5/',
				icon: LinkedinSvg,
				dark_icon: LinkedinDarkSvg,
				navbar: true
			},
			X: {
				name: 'X',
				url: '',
				icon: TwitterSvg,
				dark_icon: TwitterDarkSvg,
				navbar: false
			},
			email: {
				name: 'Send Email',
				url: '#',
				icon: GmailSvg,
				dark_icon: GmailDarkSvg,
				navbar: false
			}
		}
	},
	work: [
		{
			company: 'Enzode',
			href: 'https://enzode.com/',
			badges: [],
			location: 'Remote',
			title: 'Fullstack Developer',
			logoUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIedOUemqfrX6TYEiE1wXVpPBxR-V1NEvhA&s',
			start: 'September 2024',
			end: 'Present',
			description: ''
		},
		{
			company: 'JKF Studio sp. z o.o.',
			href: 'https://www.jkfstudio.pl/',
			badges: [],
			location: 'Remote',
			title: 'Junior Python Developer',
			logoUrl:
				'https://cdn.bulldogjob.com/system/companies/logos/000/003/437/original/1604270699218_FINAL-bg.png',
			start: 'December 2021',
			end: 'August 2024',
			description: ''
		}
	],
	education: [
		{
			school: 'Warsaw University of Technology',
			faculty: 'The Faculty of Electrical Engineering',
			degree: 'Master of Computer Science',
			logoUrl:
				'https://www.ch.pw.edu.pl/var/ch/storage/images/media/images/logo-pw/14895-2-pol-PL/logo-PW.png',
			start: '2023',
			end: 'Present',
			href: 'https://www.ee.pw.edu.pl/'
		},
		{
			school: 'Warsaw University of Technology',
			faculty: 'The Faculty of Electronics and Information Technology',
			degree: 'Bachelor of Computer Science',
			logoUrl:
				'https://www.ch.pw.edu.pl/var/ch/storage/images/media/images/logo-pw/14895-2-pol-PL/logo-PW.png',
			start: '2019',
			end: '2023',
			href: 'https://www.elka.pw.edu.pl/'
		}
	],
	projects: [
		{
			title: 'Beerdegu',
			href: 'http://www.beerdegu.com/',
			dates: 'June 2023 - Present',
			active: true,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod cursus fringilla. Donec volutpat consequat dui id vulputate. Vestibulum at justo purus. Sed ac semper justo. Phasellus elit sem, posuere ac erat eu, aliquet pellentesque dolor.',
			technologies: [
				'Django',
				'Django REST Framework',
				'Django Channels',
				'Django Q',
				'Python',
				'Next.js',
				'Typescript',
				'Mantine',
				'PostgreSQL',
				'Redis',
				'Docker'
			],
			links: [
				{
					type: 'Website',
					href: 'https://beerdegu.com/',
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/Alschn/Beerdegu',
					icon: Github
				}
			],
			image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
			video: ''
		},
		{
			title: 'DoNotExpire',
			href: '',
			dates: 'June 2023 - Present',
			active: true,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate iaculis enim et varius. Aenean vel consequat sapien. Donec a tincidunt massa, eu bibendum leo.',
			technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Docker'],
			links: [
				{
					type: 'Website',
					href: 'https://donotexpire.up.railway.app/',
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/Alschn/DoNotExpire',
					icon: Github
				}
			],
			image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
			video: ''
		},
		{
			title: 'VibeLink',
			href: '#',
			dates: 'June 2023 - Present',
			active: true,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, ante a tempor imperdiet, libero diam imperdiet tortor, vel ullamcorper nisl ex vel ligula.',
			technologies: [
				'Django',
				'Django REST Framework',
				'Django Q',
				'Python',
				'Spotify API',
				'Youtube API',
				'SvelteKit',
				'TypeScript',
				'TailwindCSS',
				'Shadcn UI'
			],
			links: [
				// {
				// 	type: 'Website',
				// 	href: '',
				// 	icon: Globe
				// },
				{
					type: 'Source',
					href: 'https://github.com/Alschn/VibeLink',
					icon: Github
				}
			],
			image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
			video: ''
		},
		{
			title: 'WebPlayer',
			href: 'https://nextwebplayer.vercel.app/',
			dates: 'June 2023 - Present',
			active: true,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia in arcu id hendrerit. Cras ornare, ante eget vulputate blandit, purus libero ultricies ligula, in iaculis velit arcu quis felis.',
			technologies: [
				'Django',
				'Django REST Framework',
				'Python',
				'Spotify API',
				'Spotify Web Playback SDK',
				'Next.js',
				'TypeScript',
				'TailwindCSS',
				'Shadcn UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://nextwebplayer.vercel.app/',
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/Alschn/WebPlayer',
					icon: Github
				}
			],
			image: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
			video: ''
		}
	]
};
