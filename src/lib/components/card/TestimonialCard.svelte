<script lang="ts">
	import { TestimonialProfileImg } from '$lib/assets';
	import type { TestimonialCardType } from '$lib/shared/types/testimonialCard';

	const {
		testimonial
	}: {
		testimonial: TestimonialCardType;
	} = $props();
</script>

<section id="testimonial-card">
	<figure
		class="flex flex-col gap-2 p-6 bg-white ring ring-neutral-200 rounded-lg drop-shadow-sm w-80"
	>
		<figcaption class="flex gap-4 items-center text-wrap" id="profile">
			<img
				class="size-12 rounded-full"
				src={testimonial.profileImgSrc}
				alt={testimonial.profileImgAlt}
			/>
			<p class="flex flex-col text-wrap">
				<span class="text-neutral-900 text-lg font-semibold">{testimonial.name}</span>
				<span class="text-neutral-600 text-sm">{testimonial.username}</span>
			</p>
		</figcaption>
		<blockquote id="text" class="text-wrap text-neutral-600">
			<p class="line-clamp-5">
				{testimonial.text}
			</p>
		</blockquote>
	</figure>
</section>
