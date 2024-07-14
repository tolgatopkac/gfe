import { Favicon, TestimonialProfileImg } from '$lib/assets';
import type { ProfileCardType } from '$lib/shared/types/profileCardType';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const profileCard: ProfileCardType = {
		profileImage: TestimonialProfileImg,
		fullName: 'Sarah Dole',
		title: 'Front End Engineer',
		company: 'Microsoft',
		description:
			'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.',
		linkedIn: '#',
		x: '#',
		github: '#',
		instagram: '#'
	};

	return {
		profileCard,
		meta: {
			title: 'Profile Card',
			description:
				'Card component that displays a profile with a picture, name, title, company, and description.',
			ogImageUrl: Favicon
		}
	};
};
