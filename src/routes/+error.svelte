<script>
  import { page } from "$app/stores";
  import { HouseIcon } from "$lib/icons";
</script>

<section class="h-full flex flex-col justify-center max-w-4xl mx-auto px-3">
  {#if $page.status === 404}
    <div
      class="grid gap-4 justify-center sm:(grid-cols-2 items-center justify-auto)"
    >
      <div class="flex justify-center">
        <img src="/m2_fast.png" alt="" />
      </div>

      <div class="text-center">
        <span class="font-500 text-8xl text-chaos-main mb-4"
          >{$page.status}
        </span>
        <p class="text-chaos-sub text-balance">
          Ooops! Looks like you found a page that doesn't exist.
        </p>

        <a
          href="/"
          class="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-md px-4 py-2 shadow-md bg-chaos-subalt transition-colors text-chaos-text mt-4 hover:(bg-chaos-text text-chaos-bg) mx-auto"
        >
          <HouseIcon />
          <span>Go home</span>
        </a>
      </div>
    </div>
  {/if}
</section>
