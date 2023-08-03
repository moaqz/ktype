<script>
  import { calculateAccuracy, calculateWPM } from "$lib/stats";
  /** @type {number} */
  export let totalErrors;

  /** @type {Date} */
  export let startDate;

  /** @type {Date} */
  export let endDate;

  /** @type {string} */
  export let quote;

  const totalWords = quote.split(" ").length;
  const totalCharacters = quote.length;
  
  const wpm = calculateWPM(totalWords, startDate, endDate);
  const acc = calculateAccuracy(totalCharacters, totalErrors);
</script>

<div
  class="flex items-center gap-3 mb-4 text-xl [&>div>:first-child]:(text-chaos-sub font-500)"
>
  <div>
    <span>Accuracy:</span>
    <span class="text-chaos-main font-700 text-xl">{acc.toFixed(2)}%</span>
  </div>

  <div>
    <span>WPM:</span>
    <span class="text-chaos-main font-700 text-xl">{wpm}</span>
  </div>

  <div>
    <span>Errors:</span>
    <span class="text-chaos-main font-700 text-xl">{totalErrors}</span>
  </div>
</div>
