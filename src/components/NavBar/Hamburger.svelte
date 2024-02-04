<script lang="ts">
  import { fade } from "svelte/transition";

  let isHamburger: boolean = false;
</script>

<label class="swap swap-rotate sm:hidden" for="hamburger">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" bind:checked={isHamburger} id="hamburger" />

  <!-- hamburger icon -->
  <svg
    class="swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    viewBox="0 0 24 24"
    ><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
    ></path></svg
  >

  <!-- close icon -->
  <svg
    class="swap-on fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    ></path></svg
  >
</label>

{#if isHamburger}
  <div
    class="absolute top-0 right-0 h-screen w-screen bg-base-300 -z-10 py-28 px-10 opacity-90 sm:hidden"
    transition:fade={{ delay: 100, duration: 250 }}
  >
    <div class="flex flex-col items-center text-3xl font-bold h-full gap-10">
      <slot />
    </div>
  </div>
{/if}
