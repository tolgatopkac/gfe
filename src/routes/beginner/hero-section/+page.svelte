<script lang="ts">
	import { Favicon } from '$lib/assets';
	import HeroSection from '$lib/components/card/HeroSection.svelte';
	import '@fontsource-variable/noto-sans';

	const { data } = $props();

	const meta = data.meta;
</script>

<svelte:head>
	<title>{meta.title}</title>

	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={meta.title} />
	<meta property="og:url" content={meta.title} />

	<meta property="og:image" content={meta.ogImageUrl} />
	<meta name="twitter:card" content="summary_large_image" />

	<link rel="icon" type="image/png" href={Favicon} />
</svelte:head>

<main
	class="p-4 flex h-screen justify-center items-center bg-gradient-to-r from-gray-50 to-[#d2d6db] w-full"
>
	<HeroSection />
</main>
