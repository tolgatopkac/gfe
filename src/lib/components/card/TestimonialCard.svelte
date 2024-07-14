<script>
	import { TestimonialProfileImg } from '$lib/assets';
</script>

<section id="testimonial-card">
	<div
		class="flex flex-col gap-2 p-6 bg-white ring ring-neutral-200 rounded-lg drop-shadow-sm max-w-80"
	>
		<div class="flex gap-4 items-center" id="profile">
			<img class="size-12 rounded-full" src={TestimonialProfileImg} alt="Sarah Dole" />
			<p class="flex flex-col">
				<span class="text-neutral-900 text-lg font-semibold">Sarah Dole</span>
				<span class="text-neutral-600 text-sm">@sarahdole</span>
			</p>
		</div>
		<div id="text" class="text-wrap text-neutral-600">
			I've been searching for high-quality abstract images for my design projects, and I'm thrilled
			to have found this platform. The variety and depth of creativity are astounding!
		</div>
	</div>
</section>
