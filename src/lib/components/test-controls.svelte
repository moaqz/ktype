<script>
  import Button from "./button.svelte";
  import { PointerIcon, RestartIcon } from "$lib/icons";

  /** @type {boolean} */
  export let isGameStarted;

  /** @type {() => void} */
  export let resetFn;

  /** @type {() => void} */
  export let startFn;
</script>

<div class="text-chaos-sub space-y-3 flex flex-col items-center">
  {#if isGameStarted}
    <Button text="Restart game" icon={RestartIcon} on:click={resetFn} />

    <p class="font-semibold">
      <kbd class="rounded-md bg-chaos-sub text-black text-sm px-2 py-0.5">
        esc
      </kbd>
      <span>- restart test</span>
    </p>
  {:else}
    <Button text="Click to start test" icon={PointerIcon} on:click={startFn} />
  {/if}
</div>
