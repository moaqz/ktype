<script>
  import { DISABLED_KEYS } from "$lib/constants";
  import { PointerIcon, RestartIcon } from "$lib/icons";
  import { clsx } from "clsx";

  /** @type {string} */
  export let quote;

  /** @type {HTMLInputElement}*/
  let inputRef;

  let cursorPosition = 0;
  let totalErrors = 0;
  let userTypedText = "";
  let isGameStarted = false;

  /** @type {Date | null} */
  let startedDate = null;

  /** @param {KeyboardEvent} e */
  function handleKeyDown(e) {
    if (e.ctrlKey && e.key) {
      e.preventDefault();
      return;
    }

    if ((e.altKey && e.key === "Enter") || e.key === "Tab") {
      inputRef.blur();
      return;
    }

    if (e.key === "Escape") {
      resetTest();
      return;
    }

    if (DISABLED_KEYS.includes(e.key)) {
      e.preventDefault();
      return;
    }
  }

  /** @param {Event} e */
  function handleInputEvent(e) {
    if (!(e instanceof InputEvent)) {
      return;
    }

    const key = e.data;

    if (key !== quote.charAt(cursorPosition)) {
      totalErrors++;
    }

    userTypedText += key;
    cursorPosition++;
  }

  function resetTest() {
    cursorPosition = 0;
    totalErrors = 0;
    userTypedText = "";
    inputRef.value = "";
    inputRef.focus();
    startedDate = null;
    isGameStarted = false;
  }

  function startTest() {
    isGameStarted = true;
    startedDate = new Date();
    inputRef.focus();
  }
</script>

<div
  class="p-4 rounded border-2 border-transparent shadow bg-chaos-subalt relative focus-within:border-chaos-main"
>
  <input
    type="text"
    class="-z-1 absolute left-0 top-0 w-full h-full"
    autocomplete="off"
    disabled={cursorPosition === quote.length}
    tabindex={isGameStarted ? 0 : -1}
    bind:this={inputRef}
    on:keydown={handleKeyDown}
    on:input={handleInputEvent}
  />

  <pre class="flex flex-wrap text-chaos-sub text-2xl">
    {#each quote as letter, idx}
      <span
        class={clsx({
          "animate-pulse border border-chaos-caret":
            cursorPosition === idx && letter === " ",
          "animate-pulse border-l border-l-chaos-caret": cursorPosition === idx,
          "text-red underline":
            userTypedText[idx] != null && userTypedText[idx] !== quote[idx],
          "text-white":
            userTypedText[idx] != null && userTypedText[idx] === quote[idx],
        })}>{letter}</span
      >
    {/each}
  </pre>
</div>

<div class="text-chaos-sub space-y-3 flex flex-col items-center">
  {#if isGameStarted}
    <button
      class="flex items-center justify-center gap-2 text-white font-semibold rounded-md px-4 py-2 shadow-md bg-chaos-subalt transition-colors text-chaos-text mt-4 hover:(bg-chaos-text text-chaos-bg)"
      aria-label="Restart Test"
      title="Restart Test"
      on:click={resetTest}
    >
      <RestartIcon />
      <span>Restart game</span>
    </button>

    <p class="font-semibold">
      <kbd class="rounded-md bg-chaos-sub text-black text-sm px-2 py-0.5">
        esc
      </kbd>
      <span>- restart test</span>
    </p>
  {:else}
    <button
      class="flex items-center justify-center gap-2 text-white font-semibold rounded-md px-4 py-2 shadow-md bg-chaos-subalt transition-colors text-chaos-text mt-4 hover:(bg-chaos-text text-chaos-bg) mx-auto"
      on:click={startTest}
    >
      <PointerIcon />
      <span>Click to start test</span>
    </button>
  {/if}
</div>
