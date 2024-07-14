import { BlogCardImg, Favicon } from '$lib/assets';
import type { BlogCardType } from '$lib/shared/types/blogCardType';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const blogCard: BlogCardType = {
		category: 'Interior',
		title: 'Top 5 Living Room Inspirations',
		description: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
		imageUrl: BlogCardImg,
		linkText: 'Read More',
		linkUrl: '#'
	};

	return {
		blogCard,
		meta: {
			title: 'Blog Card',
			description:
				'Blog Card component for displaying blog posts with author information and a featured image.',
			ogImageUrl: Favicon
		}
	};
};
