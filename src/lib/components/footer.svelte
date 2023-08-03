<script>
  import { CodeIcon, InfoIcon, MonkeytypeIcon } from "$lib/icons";
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
    </ul>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://monkeytype.com"
      class="inline-flex gap-1 items-center hover:text-white transition-colors duration-200 font-semibold"
    >
      <span>Inspired by</span>
      <MonkeytypeIcon />
    </a>
  </div>
</footer>
