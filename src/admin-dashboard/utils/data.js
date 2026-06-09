import { __ } from '@wordpress/i18n';

import { gutenbergTabIcon, shortcodeTabIcon } from './icons';

const slug = 'voice-feedback';

export const dashboardInfo = ( info ) => {
	const { version, startUrl, adminUrl = '' } = info;

	const proSuffix = '';

	return {
		name: `Voice Feedback${ proSuffix }`,
		displayName: `Voice Feedback${ proSuffix } - Voice Recorder for Audio Feedback`,
		description: 'Voice Feedback lets visitors leave audio messages on your WordPress site—no login required. Easily add it via floating drawer, block, or shortcode. All recordings are stored in your admin panel for listening, managing, or deleting. Perfect for blogs, portfolios, education, or product pages to collect quick, personal feedback.',
		slug,
		version, 
		adminUrl,
		displayOurPlugins: true,
		media: {
			logo: `https://ps.w.org/${ slug }/assets/icon-128x128.png?rev=3475105`,
			banner: `https://ps.w.org/${ slug }/assets/banner-772x250.png`,
			thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${ slug }.png`,
			// proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
			video: '',
			isYoutube: true
		},
		pages: {
			org: `https://wordpress.org/plugins/${ slug }/`,
			// landing: `https://bplugins.com/products/${ slug }/`,
			docs: `https://bplugins.com/docs/${ slug }/`,
			pricing: `https://bplugins.com/products/${ slug }/pricing`,
		},
		freemius: {
			product_id: 19712,
			plan_id: 32681,
			public_key: 'pk_e2acd90aa2e40812def1d0880deae'
		}, 
		startButton: {
			label: 'Start Now',
			url: startUrl || `post-new.php?post_type=page&title=Voice Feedback&content=<!-- wp:bplvf/voice-feedback /-->`
		}
	};
};

export const welcomeInfo = ( adminUrl ) => {
	const base = adminUrl ? adminUrl.replace( /\/+$/, '' ) : '';
	return {
		keywords: [ 'Voice', 'Feedback', 'Audio', 'Recorder' ],
		keywordsLabel: 'Features',
		gettingStarted: {
			tabs: [
				{
					key: 'gutenberg',
					label: 'Gutenberg',
					icon: gutenbergTabIcon,
					steps: [
						{
							num: 1,
							title: 'Add the Voice Feedback Block',
							body: 'Open the block editor on any page or post. Click the <strong>+</strong> icon in the top-left corner or type <strong>/Voice</strong> to find and insert the Voice Feedback block.',
							link: { url: `${ base }/post-new.php?post_type=page`, label: 'Open Editor' }
						},
						{
							num: 2,
							title: 'Configure Settings',
							body: 'Select the block to open settings in the sidebar. Customize layouts (Minimal, Split Screen, etc.), custom buttons, icons, or email gate configurations.'
						},
						{
							num: 3,
							title: 'Publish & Collect Feedbacks',
							body: 'Publish the page when ready. Your users can now start recording and sending audio feedbacks directly from the page.'
						}
					]
				},
				{
					key: 'shortcode',
					label: 'ShortCode',
					icon: shortcodeTabIcon,
					steps: [
						{
							num: 1,
							title: 'Create via Voice Feedback templates',
							body: 'Go to <strong>Voice Feedback › Add New Feedback</strong>.',
							link: { url: `${ base }/admin.php?page=all-voice-feedback`, label: 'Add New' }
						},
						{
							num: 2,
							title: 'Configure layout and options',
							body: 'Configure settings like layout (Floating widget or Classic style), form details, and options.'
						},
						{
							num: 3,
							title: 'Copy Shortcode',
							body: 'Publish and copy the generated shortcode: <code>[voice_feedback id=POST_ID]</code> (replace POST_ID with the actual post ID).'
						},
						{
							num: 4,
							title: 'Paste Anywhere',
							body: 'Paste the shortcode into any post, page, widget, or elementor page builder template.'
						}
					]
				}
			]
		},
	changelogs: [
		{
			version: '2.2.3 - 9 June 2026',
			type: 'new',
			list: [
				'Feature - Added Email Gate settings requiring users to enter name and email before sending voice feedback.',
				'Fix - Resolved crashes during translation extraction in npm run i18n.',
				'Fix - Structured vertical layout alignment of settings cards headers.',
			],
		},
		{
			version: '2.2.2 - 28 February 2024',
			type: 'update',
			list: [
				'Update - Redesigned the dashboard with a modern and improved user interface, replacing the previous outdated layout.',
			],
		},
		{
			version: '2.2.1',
			type: 'update',
			list: [
				'Improved user admin experience and settings layout for better usability.',
			],
		},
		{
			version: '2.2.0',
			type: 'new',
			list: [
				'Added admin email notifications — when a user submits voice feedback, the admin now receives an email with a custom subject and body, with the option to attach the audio file.',
				'Replaced AJAX with the REST API to deliver a faster and smoother admin experience.',
				'Optimized plugin files and improved performance and overall code readability.',
			],
		},
		{
			version: '2.1.0',
			type: 'new',
			list: [ 'Added new templates and improvement.' ],
		},
		{
			version: '2.0.0',
			type: 'new',
			list: [ 'Added new features and improvements.' ],
		},
		{
			version: '1.0.3',
			type: 'fix',
			list: [ 'Fixed Vurnability Issues' ],
		},
		{
			version: '1.0.2',
			type: 'fix',
			list: [ 'Fixed Issue' ],
		},
		{
			version: '1.0.1',
			type: 'update',
			list: [ 'Updated with new features' ],
		},
		{
			version: '1.0.0',
			type: 'new',
			list: [
				'Initial release with core features: drawer, block, shortcode, admin library, and basic customization.',
			],
		},
	],
	changelogsLimit: 5,
	changelogsReadMoreLabel: 'View More Changelogs',
	proFeatures: [
		__( 'Email Notifications', 'voice-feedback' ),
		__( 'Customizable Email Templates', 'voice-feedback' ),
		__( 'Screen Record Option', 'voice-feedback' ),
		__( 'Global Drawer Position(Left, Right)', 'voice-feedback' ),
		__( 'Buttons Typography', 'voice-feedback' ),
	]
	};
};

export const demoInfo = {
	allInOneLabel: 'See All Demos',
	allInOneLink: 'https://wpradioplayer.com/demo/all-radio-player/',
	demos: [
		{
			icon: '',
			title: 'Review Your Users Feedbacks',
			type: 'image',
			url: 'https://templates.bplugins.com/wp-content/uploads/2025/10/voice-feedback-users-feedback.png',
		},
		{
			icon: '',
			title: 'Created Section using Voice Feedback - Design 1',
			description: '',
			category: '',
			type: 'image',
			url: 'https://templates.bplugins.com/wp-content/uploads/2025/10/voice-feedback-section1.png',
		},
		{
			icon: '',
			title: 'Created Section using Voice Feedback - Design 2',
			type: 'image',
			url: 'https://templates.bplugins.com/wp-content/uploads/2025/10/voice-feedback-section2.png',
		},
		{
			icon: '',
			title: 'Created Section using Voice Feedback - Design 3',
			type: 'image',
			url: 'https://templates.bplugins.com/wp-content/uploads/2025/10/voice-feedback-section3.png',
		},
		{
			icon: '',
			title: 'Created Section using Voice Feedback - Design 4',
			type: 'image',
			url: 'https://templates.bplugins.com/wp-content/uploads/2025/10/voice-feedback-section4.png',
		},
		{
			icon: '',
			title: 'Created Section using Voice Feedback - Design 5',
			type: 'image',
			url: 'https://templates.bplugins.com/wp-content/uploads/2025/10/voice-feedback-section5.png',
		},
		{
			icon: '',
			title: 'Created Section using Voice Feedback - Design 6',
			type: 'image',
			url: 'https://templates.bplugins.com/wp-content/uploads/2025/10/voice-feedback-section6.png',
		},
		{
			icon: '',
			title: 'Created Section using Voice Feedback - Design 7',
			type: 'image',
			url: 'https://templates.bplugins.com/wp-content/uploads/2025/10/voice-feedback-section7.png',
		},
		{
			icon: '',
			title: 'Created Section using Voice Feedback - Design 8',
			type: 'image',
			url: 'https://templates.bplugins.com/wp-content/uploads/2025/10/voice-feedback-section8.png',
		},
	],
};

export const pricingInfo = {
	logo: `https://ps.w.org/${ slug }/assets/icon-128x128.png`, // Optional
	pluginId: 19712,
	planId: 32681,
	licenses: [ 1, 3, null ],
	button: {
		label: 'Buy Now ➜',
	},
	featured: {
		selected: 3, // choose from licenses item
	},
};
