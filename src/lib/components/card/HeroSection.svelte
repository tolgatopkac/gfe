<script lang="ts">
	import { Prism } from '$lib/assets';
</script>

<section class="bg-gradient-to-r from-gray-50 to-[#d2d6db] shadow-lg size-full" id="hero-section">
	<div
		class=" flex justify-center items-center flex-col xl:flex-row px-3 md:px-4 xl:px-24 gap-8 h-full"
	>
		<div class="flex flex-col gap-8 justify-center w-full">
			<div class="flex flex-col gap-4">
				<h1 class="text-4xl lg:text-6xl font-semibold text-neutral-900">
					Well crafted abstract images
				</h1>
				<p class="text-xl text-neutral-600">
					High quality abstract images for your projects, wallpaper and presentations.
				</p>
			</div>
			<div class="flex gap-8 w-5/6">
				<button
					class="bg-white outline outline-gray-200 rounded-[4px] py-2.5 font-medium w-full hover:bg-gray-50 active:bg-gray-50 active:ring-2 active:ring-violet-100 cursor-pointer drop-shadow-lg"
				>
					Learn More
				</button>
				<button
					class="bg-indigo-700 rounded-[4px] py-2.5 font-medium text-white w-full hover:bg-indigo-800 active:bg-indigo-800 active:ring-2 active:ring-violet-100 cursor-pointer drop-shadow-lg"
				>
					See Pricing
				</button>
			</div>
		</div>
		<div class="max-h-[60%] xl:max-h-full">
			<img class="size-full" src={Prism} alt="" />
		</div>
	</div>
</section>
