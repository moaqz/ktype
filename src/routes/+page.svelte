<script>
  import Test from "$lib/components/test.svelte";

  export let data;
</script>

<section class="h-full flex flex-col justify-center max-w-4xl mx-auto px-3">
  <Test quote={data.quote} />
</section>
