<script>
  import { CrownIcon, UserIcon } from "$lib/icons";

  const LINKS = [
    {
      href: "/leaderboard",
      icon: CrownIcon,
      label: "Leaderboard",
    },
    {
      href: "/login",
      icon: UserIcon,
      label: "Login",
    },
  ];
</script>

<header>
  <div class="max-w-6xl mx-auto py-4 px-3 flex items-center justify-between">
    <h1 class="text-2xl font-semibold">
      <a href="/">KType</a>
    </h1>

    <nav>
      <ul class="flex items-center gap-2">
        {#each LINKS as link}
          <li>
            <a
              href={link.href}
              class="block px-2 py-1.5 rounded-md text-black transition-transform hover:scale-110"
              aria-label={link.label}
              title={link.label}
            >
              <svelte:component this={link.icon} />
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  ul > li:nth-child(1) a {
    background-color: #ab92e1;
  }

  ul > li:nth-child(2) a {
    background-color: #f3ea5d;
  }
</style>
