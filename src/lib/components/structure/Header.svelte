<script>
  import NavButton from "../primitives/NavButton.svelte";
  import SearchBar from "../ui/SearchBar.svelte";
  import { createEventDispatcher } from "svelte";
  import { actualPanel } from "../../stores/panelStore";

  const dispatch = createEventDispatcher();
  let cep = "";

  function search() {
    dispatch("search", { cep });
  }
</script>

<header
  class="grid grid-cols-1 gap-3 lg:grid-cols-3 pt-2 place-items-center justify-items-center"
>
  <h1 class="text-gray-600 text-left dark:text-gray-200 text-4xl font-bold">
    CEP Info
  </h1>

  <SearchBar bind:cep on:click={search} class="header-search p-4 " />

  <nav class="flex gap-8">
    <NavButton on:click={() => ($actualPanel = "main")}>Principal</NavButton>
    <NavButton on:click={() => ($actualPanel = "about")}>Sobre</NavButton>
  </nav>

  <!-- <div>GitHub</div> -->
</header>

<style>
  header {
    grid-template-areas: "a1" "a2" "a3";
  }

  h1 {
    grid-area: a1;
  }

  :global(.header-search) {
    grid-area: a3;
  }

  nav {
    grid-area: a2;
  }

  @media screen and (min-width: 1024px) {
    header {
      grid-template-areas: "a1 a2 a3";
    }

    :global(.header-search) {
      grid-area: a2;
    }

    nav {
      grid-area: a3;
    }
  }
</style>
