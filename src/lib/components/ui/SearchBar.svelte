<script lang="ts">
    import Button from "../primitives/Button.svelte";
    import Input from "../primitives/Input.svelte";
</script>

<div
    class="w-full flex"
>
    <Input placeholder="Digite um CEP..." class="rounded-l-xl rounded-r-none" /> 
    <Button class="rounded-r-xl rounded-l-none">Buscar</Button>
</div>