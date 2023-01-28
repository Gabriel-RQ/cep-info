
<script>
    import NavButton from "../primitives/NavButton.svelte";
    import SearchBar from "../ui/SearchBar.svelte";
</script>

<header class="grid grid-cols-3 place-items-center justify-items-center">
    <h1 class="text-gray-600 text-left dark:text-gray-200 text-4xl font-bold">CEP Info</h1>
    
    <SearchBar />

    <nav
        class="flex gap-8"
    >
        <NavButton>Principal</NavButton>
        <NavButton>Sobre</NavButton>
    </nav>

    <!-- <div>GitHub</div> -->
</header>