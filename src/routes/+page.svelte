<script>
  import Test from "$lib/components/test.svelte";

  export let data
</script>

<section class="max-w-4xl mx-auto px-3 my-12">
  <Test quote={data.quote} />
</section>
