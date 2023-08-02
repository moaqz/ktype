<script>
  /** @type {string} */
  export let text;

  /** @type {any} */
  export let icon;
</script>

<button
  class="flex items-center justify-center gap-2 text-white font-semibold rounded-md px-4 py-2 shadow-md bg-chaos-subalt transition-colors text-chaos-text mt-4 hover:(bg-chaos-text text-chaos-bg) mx-auto"
  on:click
  {...$$restProps}
>
  <svelte:component this={icon} />
  <span>{text}</span>
</button>
