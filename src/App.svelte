<script>
	import { appState } from 'stores/stores.js';
	import { fade } from 'svelte/transition';
	
	import Onboard from 'screens/Onboard.svelte';
	import Main from 'screens/Main.svelte';
</script>

<div class="container">
	{#if $appState==='onboard'}
		<div class="container" transition:fade="{{ duration: 250}}">
			<Onboard />
		</div>
	{:else if $appState==='main'}
		<div class="container" in:fade="{{ duration: 500, delay: 100}}" out:fade="{{duration: 500}}">
			<Main />
		</div>
	{/if}
</div>

<style lang="scss">
	@import "./styles/app.scss";
</style>