<script>
  import { onboardState, appState } from 'stores/stores.js';
  import { Swipe, SwipeItem } from "svelte-swipe";
	import { fade } from 'svelte/transition';

  import SwipeIndicator from './../components/SwipeIndicator.svelte'

  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: false,
    transitionDuration: 200,
    defaultIndex: $onboardState,
  };

  const swipeItemArr = [
		{
			image: 'assets/illustration/onboarding/educate.png',
			title: 'Educate',
			blurb: 'Assist at the point of activity with process knowledge and product information'
		},
		{
			image: 'assets/illustration/onboarding/Assess.png',
			title: 'Assess',
			blurb: 'Reference and training checklists provide real-time asseessment and employee support'
		},
		{
			image: 'assets/illustration/onboarding/Empower.png',
			title: 'Empower',
			blurb: 'Enable your workforce to excel at their responsibilities, and provide exceptional customer service'
		}
	]

  // ===========================================================================
	// Handlers
	// ===========================================================================
	const onFinish = () => {
		appState.set('main')
	}
	const onSwipe = (e) => {
		onboardState.update(()=>e.detail.active_item)
	}
</script>

<div class="container">
	<section>
		<header>
			<img src="assets/logo/white.png" alt="SmartAccess Logo"/>
		</header>
		<div class="container__swiper">
			<Swipe {...swipeConfig} on:change={onSwipe} on:click>
				{#each swipeItemArr as swipeItem, index}
				<SwipeItem on:click>
					<div class="container__swipe-item">
						<img src={`${swipeItem.image}`} alt={`onboardImage-${index}`}/>
						<h2>{swipeItem.title}</h2>
						<p>{swipeItem.blurb}</p>
						{#if index === swipeItemArr.length - 1}
							<button class="button__finish" on:click={onFinish}>Finish</button>
						{/if}
					</div>
				</SwipeItem>
		
				{/each}
			</Swipe>
			<div class="container__swipe-indicator">
				<SwipeIndicator count={swipeItemArr.length} swipeIndex={$onboardState}/>
			</div>
			<a href={'#'} on:click={onFinish}>Skip Tour</a>
		</div>
		<footer>
			Already a user? <a href={'#'}>Login</a>
		</footer>
	</section>
</div>

<style lang="scss">
	section {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	header {
		margin: 2rem;

		img {
			width: 50%;
		}
	}
	footer {
		margin: 2rem;
	}

	.container {
    background-color: var(--color-bg-secondary);
	}

	.container__swiper { 
		max-width: 600px;
		min-height: 500px;
	}
	
	.container__swipe-item {
		display: flex;
		flex-direction: column;
		align-items: center;

		img {

			max-height: 250px;
		}

		p {
			font-size: 1.125rem;
			width: 75%;
			margin: 0;
		}

		.button__finish {
			margin: 1rem;
			pointer-events: fill;
		}
	}

	.container__swipe-indicator {
		margin: 0.5rem;
	}
</style>