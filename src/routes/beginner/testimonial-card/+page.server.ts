import { Favicon, TestimonialProfileImg } from '$lib/assets';
import type { TestimonialCardType } from '$lib/shared/types/testimonialCard';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const testimonialCard: TestimonialCardType = {
		name: 'Sarah Dole',
		profileImgAlt: 'Sarah Dole',
		profileImgSrc: TestimonialProfileImg,
		username: '@sarahdole',
		text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
	};

	return {
		testimonialCard,
		meta: {
			title: 'Testimonial Card',
			description:
				'Card component that displays a testimonial with a picture, name, title, and testimonial text.',
			ogImageUrl: Favicon
		}
	};
};
