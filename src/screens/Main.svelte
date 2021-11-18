<script>
  import { fade, crossfade, fly } from "svelte/transition";
  import { quadIn, quadOut } from "svelte/easing";

  import Reader from "components/Reader.svelte";
  import Website from "components/Website.svelte";

  let showWebsite = false;
  let showReader = false;
  let screenHeight = screen.height;

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const onOpenReader = () => {
    showReader = true;
  };
  const onOpenAbout = () => {
    showWebsite = true;
  };
  const onClose = () => {
    showWebsite = false;
    showReader = false;
  };
</script>

<div class="container">
  <section>
    <header>
      <img src="assets/logo/color.png" />
    </header>
    <div class="instructions">
      <img src="assets/nfc-reader.png" />
      <h1>Enable NFC Reader</h1>
      <p>Open the NFC reader on your iPhone to read the tag.</p>
      <button on:click={onOpenReader}>Open Reader</button>
    </div>
    <footer>
      Already a user? <a href="#">Login</a>
    </footer>
  </section>
  <div class="container__about">
    <a on:click={onOpenAbout}>About Smart Access</a>
  </div>

  {#if showWebsite}
    <div
      transition:fly={{ y: screenHeight, duration: 500, easing: quadOut }}
      class="container__website"
    >
      <button on:click={onClose} class="close__button">X</button>
      <Website />
    </div>
  {/if}
  {#if showReader}
    <div transition:fade={{ duration: 300, easing: quadOut }} class="overlay" />
    <div
      in:fly={{ y: screenHeight, duration: 300, easing: quadOut }}
      out:fly={{ y: screenHeight, duration: 300, easing: quadIn }}
      class="container__reader"
    >
      <Reader handleCancel={onClose} />
    </div>
  {/if}
</div>

<style lang="scss">
  section {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    height: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #000000;
  }

  header {
    padding: 2rem;

    img {
      width: 50%;
    }
  }

  footer {
    padding: 2rem;
  }

  .container {
    background-color: var(--color-bg-primary);
  }
  .instructions {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 50%;
    }

    p {
      width: 75%;
      margin-top: 0;
    }
  }

  .container__about {
    height: 60px;
    text-align: center;
    padding: 1rem;
    background-color: #ffffff;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
  .container__website {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .container__reader {
    position: fixed;
    width: 100%;
    bottom: 0px;
    margin: 0 auto;
  }
  .close__button {
    position: fixed;
    right: 20px;
    top: 20px;
    font-size: 0.8rem;
    padding: 1rem;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
