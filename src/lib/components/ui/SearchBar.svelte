<script lang="ts">
  import { maskInputCEP } from "../../util/maskCEP";
  import Button from "../primitives/Button.svelte";
  import Input from "../primitives/Input.svelte";

  export let cep: string;
  let className = "";
  export { className as class };
</script>

<div class="w-full flex {className}">
  <Input
    on:input={maskInputCEP}
    bind:value={cep}
    args={{ maxLength: 9 }}
    placeholder="Digite um CEP..."
    class="rounded-l-xl rounded-r-none bg-purple-100 bg-opacity-5 border-none p-5"
  />

  <Button
    on:click
    class="rounded-r-xl rounded-l-none bg-purple-100 bg-opacity-5 
        hover:bg-opacity-20 hover:bg-purple-100 focus:bg-purple-100 focus:bg-opacity-20"
  >
    Buscar
  </Button>
</div>
