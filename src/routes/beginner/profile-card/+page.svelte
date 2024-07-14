<script lang="ts">
	import ProfileCard from '$lib/components/card/ProfileCard.svelte';

	const { data } = $props();
	const meta = data.meta;
	const profile = data.profileCard;
</script>

<div class="default-page">
	<ProfileCard {profile} />
</div>
