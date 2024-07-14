<script lang="ts">
	import type { BlogCardType } from '$lib/shared/types/blogCardType';
	import Icon from '@iconify/svelte';

	const {
		blogCardContent
	}: {
		blogCardContent: BlogCardType;
	} = $props();
</script>

<section id="blog_card">
	<div
		class="flex flex-col bg-white ring ring-neutral-200 rounded-lg drop-shadow-sm w-80 overflow-hidden"
	>
		<img class="object-cover" src={blogCardContent.imageUrl} alt={blogCardContent.title} />
		<div class="px-4 py-6 flex flex-col items-start gap-6">
			<div class=" flex flex-col items-start gap-2">
				<p
					class="py-0.5 px-2 border text-sm text-green-700 border-green-200 rounded-full bg-green-50"
				>
					{blogCardContent.category}
				</p>
				<p class="text-neutral-900 font-semibold text-lg">{blogCardContent.title}</p>

				<p class="text-neutral-600 font-medium">{blogCardContent.description}</p>
			</div>

			<button
				class="flex items-center gap-1.5 cursor-pointer font-medium text-indigo-700 hover:text-indigo-800 transition-colors duration-300 active:ring active:ring-indigo-200 active:ring-3 active:rounded-lg active:text-indigo-800 disabled:text-neutral-400"
			>
				<span>Read More</span>
				<Icon icon="ri:arrow-right-line" />
			</button>
		</div>
	</div>
</section>
