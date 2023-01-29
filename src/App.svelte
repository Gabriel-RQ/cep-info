<script lang="ts">
  import Header from "./lib/components/structure/Header.svelte";
  import MainPanel from "./lib/components/structure/MainPanel.svelte";

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
  <MainPanel {cep} />
</main>

<footer class="text-center grid">
  <p class="self-center">&copy; Gabriel RQ, 2022</p>
</footer>
