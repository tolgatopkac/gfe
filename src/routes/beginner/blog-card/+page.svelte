<script lang="ts">
	import { Favicon } from '$lib/assets/index.js';
	import BlogCard from '$lib/components/card/BlogCard.svelte';

	const { data } = $props();

	const meta = data.meta;
	const blogCardContent = data.blogCard;
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

<div class="default-page">
	<BlogCard {blogCardContent} />
</div>
