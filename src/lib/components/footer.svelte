<script>
  import { CodeIcon, InfoIcon } from "$lib/icons";
</script>

<footer>
  <div class="flex justify-between py-6 px-3 max-w-6xl mx-auto text-chaos-sub">
    <ul
      class="flex items-center gap-3 [&>li>a]:(flex items-center gap-1.5 transition-colors duration-200)"
    >
      <li>
        <a
          href="https://github.com/moaqz/ktype"
          target="_blank"
          rel="noreferrer"
          class="hover:text-white"
        >
          <CodeIcon />
          <span>Github</span>
        </a>
      </li>
      <li>
        <a href="/about" class="hover:text-white">
          <InfoIcon />
          <span>About</span>
        </a>
      </li>
    </ul>

    <p class="font-700">v0.0.1</p>
  </div>
</footer>
