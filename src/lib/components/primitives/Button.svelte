<script lang="ts">

    let className = "";

    export { className as class };

</script>

<button
    on:click
    on:blur
    class="bg-purple-500 p-4 w-38 rounded-lg focus:bg-purple-400 hover:bg-purple-400
    transition-bg duration-300 ease-out outline-none { className }"
>
    <slot />
</button>