<script>
  import { DISABLED_KEYS } from "$lib/constants";
  import { clsx } from "clsx";
  import TestControls from "./test-controls.svelte";
  import TestStats from "./test-stats.svelte";

  /** @type {string} */
  export let quote;

  /** @type {HTMLInputElement}*/
  let inputElement;

  /** @type {Date | null} */
  let startDate = null;
  /** @type {Date | null} */
  let endDate = null;

  let cursorPosition = 0;
  let totalErrors = 0;
  let typedText = "";
  let hasGameStarted = false;

  /** @param {KeyboardEvent} e */
  function handleKeyDown(e) {
    if (e.ctrlKey && e.key) {
      e.preventDefault();
      return;
    }

    if ((e.altKey && e.key === "Enter") || e.key === "Tab") {
      inputElement.blur();
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

  /** @param {Event} e  */
  function handleInputEvent(e) {
    if (!(e instanceof InputEvent)) {
      return;
    }

    if (!hasGameStarted) {
      startDate = new Date();
      hasGameStarted = true;
    }

    const key = e.data;

    if (key !== quote.charAt(cursorPosition)) {
      totalErrors++;
    }

    typedText += key;
    cursorPosition++;
  }

  /**
   * Resets test to its initial state.
   */
  function resetTest() {
    cursorPosition = 0;
    totalErrors = 0;
    typedText = "";
    inputElement.value = "";
    inputElement.focus();
    startDate = null;
    hasGameStarted = false;
    endDate = null;
  }

  function startTest() {
    hasGameStarted = true;
    startDate = new Date();
    inputElement.focus();
  }

  $: {
    if (cursorPosition === quote.length) {
      endDate = new Date();
    }
  }
</script>

{#if startDate && endDate}
  <TestStats {totalErrors} {startDate} {endDate} {quote} />
{/if}

<div
  class="p-4 rounded border-2 border-transparent shadow bg-chaos-subalt relative focus-within:border-chaos-main"
>
  <input
    type="text"
    class="absolute left-0 top-0 z-50 h-full w-full cursor-default opacity-0"
    autocomplete="off"
    disabled={cursorPosition === quote.length}
    bind:this={inputElement}
    on:keydown={handleKeyDown}
    on:input={handleInputEvent}
    on:paste={(e) => e.preventDefault()}
  />

  <div
    class="text-2xl text-chaos-sub text-center text-balance leading-relaxed transition-all duration-200"
  >
    {#each quote as letter, idx}
      <span
        class={clsx({
          "animate-pulse border border-chaos-caret":
            cursorPosition === idx && letter === " ",
          "animate-pulse border-l border-l-chaos-caret": cursorPosition === idx,
          "text-red underline":
            typedText[idx] != null && typedText[idx] !== quote[idx],
          "text-white": typedText[idx] != null && typedText[idx] === quote[idx],
        })}>{letter}</span
      >
    {/each}
  </div>
</div>

<TestControls {hasGameStarted} resetFn={resetTest} startFn={startTest} />
