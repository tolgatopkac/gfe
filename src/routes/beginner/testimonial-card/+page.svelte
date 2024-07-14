<script lang="ts">
	import { Favicon } from '$lib/assets';
	import TestimonialCard from '$lib/components/card/TestimonialCard.svelte';
	import '@fontsource-variable/noto-sans';

	const { data } = $props();
	const defaultMeta = data.meta;
	const testimonial = data.testimonialCard;
</script>

<svelte:head>
	<title>{defaultMeta.title}</title>

	<meta property="og:title" content={defaultMeta.title} />
	<meta property="og:description" content={defaultMeta.description} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={defaultMeta.title} />
	<meta property="og:url" content={defaultMeta.title} />

	<meta property="og:image" content={defaultMeta.ogImageUrl} />
	<meta name="twitter:card" content="summary_large_image" />

	<link rel="icon" type="image/png" href={Favicon} />
</svelte:head>

<div class="flex h-screen justify-center items-center bg-gradient-to-r from-gray-50 to-[#d2d6db]">
	<TestimonialCard {testimonial} />
</div>
