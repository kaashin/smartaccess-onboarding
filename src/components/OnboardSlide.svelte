<script>
  export let title;
  export let blurb;
  export let image;
  export let index;

</script>


<div class="container__swipe-item">
  <img src={`${image}`} alt={`onboardImage-${index}`}/>
  <h2>{title}</h2>
  <p>{blurb}</p>
  <slot></slot>
</div>

<style type="scss">
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
	}
</style>