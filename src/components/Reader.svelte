<script>
  export let handleCancel;
</script>

<div class="reader">
  <h1>Ready to Scan</h1>
  <div class="image">
    <img src="assets/reader.png" alt="reader icon"/>
  </div>
  <p>Hold your device near the tag to scan it.</p>
  <button on:click={handleCancel}>Cancel</button>
</div>

<style lang="scss"> 
  .reader {
    border-radius: 2rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;

    h1 {
      margin: 1rem;
    }

    button {
      margin: 1rem;
    }

    p {
      margin-top: 1rem;
      margin-bottom: 0rem;
    }
  }
</style>