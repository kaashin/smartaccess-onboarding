<script>
  import Circle from './Circle.svelte';

  export let count = 0;
  export let swipeIndex = 0;
</script>

{#each Array(count) as item, index}
  <Circle active={index === swipeIndex}/>
{/each}


