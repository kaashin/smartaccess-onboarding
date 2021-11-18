<script>
  export let fill = "#FFFFFF"
  export let active = false;

</script>


<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
  <circle cx="7" cy="7" r="6" fill={fill} fill-opacity={active ? 1 : 0.25}/>
</svg>
<style>
  svg {
    margin: 0.5rem;  
  }
</style>
