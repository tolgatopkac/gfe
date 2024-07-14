<script lang="ts">
	import { BlogCardImg } from '$lib/assets';
	import Github from '$lib/assets/icons/Github.svelte';
	import Instagram from '$lib/assets/icons/Instagram.svelte';
	import Linkedin from '$lib/assets/icons/Linkedin.svelte';
	import Twitter from '$lib/assets/icons/Twitter.svelte';
	import type { ProfileCardType } from '$lib/shared/types/profileCardType';

	const {
		profile
	}: {
		profile: ProfileCardType;
	} = $props();
</script>

<section id="profile-card">
	<div class="flex flex-col gap-10 px-4 py-6 bg-white rounded-lg drop-shadow-sm w-80">
		<div class="flex flex-col gap-6 items-center justify-center">
			<img class="size-16 rounded-full" src={profile.profileImage} alt={profile.fullName} />
			<p class="flex flex-col gap-1 items-center">
				<span class="font-medium text-xl">{profile.fullName}</span>
				<span class="text-sm text-neutral-600">{profile.title} @ {profile.company}</span>
			</p>
			<p class="text-neutral-600 text-center">
				I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and
				ChatGPT developer.
			</p>
		</div>
		<div class="flex justify-center flex-col gap-6">
			<button
				class="bg-indigo-700 rounded-[4px] py-2.5 font-medium text-white w-full hover:bg-indigo-800 active:bg-indigo-800 active:ring-2 active:ring-violet-100 cursor-pointer"
			>
				View Profile
			</button>
			<div class="flex gap-4 items-center justify-center">
				<a
					href="#"
					aria-label="Link to Github Profile"
					class="p-2 hover:bg-gray-50 rounded-[4px] active:ring-2 active:ring-violet-100 cursor-pointer"
				>
					<Github />
				</a>
				<a
					href="#"
					aria-label="Link to Linkedin Profile"
					class="p-2 hover:bg-gray-50 rounded-[4px] active:ring-2 active:ring-violet-100 cursor-pointer"
				>
					<Linkedin />
				</a>
				<a
					href="#"
					aria-label="Link to Instagram Profile"
					class="p-2 hover:bg-gray-50 rounded-[4px] active:ring-2 active:ring-violet-100 cursor-pointer"
				>
					<Instagram />
				</a>
				<a
					href="#"
					aria-label="Link to X Profile"
					class="p-2 hover:bg-gray-50 rounded-[4px] active:ring-2 active:ring-violet-100 cursor-pointer"
				>
					<Twitter />
				</a>
			</div>
		</div>
	</div>
</section>
