<script lang="ts">
	let {
		width = '1em',
		height = '1em'
	}: {
		width?: string;
		height?: string;
	} = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 24 24">
	<path
		fill="currentColor"
		d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
	/>
</svg>
