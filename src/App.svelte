<script lang="ts">
  import Header from "./lib/components/structure/Header.svelte";
  import MainPanel from "./lib/components/structure/MainPanel.svelte";
  import AboutPanel from "./lib/components/structure/AboutPanel.svelte";
  import { actualPanel } from "./lib/stores/panelStore";
  import type { ComponentType } from "svelte";

  interface IAppContext {
    [key: string]: ComponentType;
  }

  const appContexts: IAppContext = {
    main: MainPanel,
    about: AboutPanel,
  };

  $actualPanel = "main";

  let cep: string;

  interface SearchEvent extends CustomEvent {
    cep: string;
  }

  function handleSearch(event: CustomEvent) {
    cep = (event as SearchEvent).detail.cep;
    console.log(cep);
  }
</script>

<Header on:search={handleSearch} />

<main class="flex flex-col p-8 items-center gap-4 relative">
  <svelte:component this={appContexts[$actualPanel]} {cep} />
</main>

<footer class="text-center grid">
  <p class="self-center">Gabriel RQ, 2022</p>
</footer>
