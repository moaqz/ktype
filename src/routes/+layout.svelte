<script>
  import "virtual:uno.css";
  import "@unocss/reset/tailwind.css";

  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<div class="bg-chaos-bg text-chaos-text min-h-screen">
  <Header />
  <slot />
  <Footer />
</div>
