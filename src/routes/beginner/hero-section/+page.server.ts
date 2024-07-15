import { Favicon } from '$lib/assets';
import type { PageServerLoad } from '../profile-card/$types';

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: 'Hero Section',
			description: 'A hero section with a title, subtitle, and a button.',
			ogImageUrl: Favicon
		}
	};
};
