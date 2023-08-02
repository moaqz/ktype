<script>
  import "virtual:uno.css";
  import "@unocss/reset/tailwind.css";

  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<div class="bg-chaos-bg text-chaos-text min-h-screen grid grid-rows-[auto_1fr_auto] gap-8">
  <Header />
  <slot />
  <Footer />
</div>
