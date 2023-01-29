<script context="module">
  let identifier = 0;
</script>

<script lang="ts">
  import { setArgs } from "../../util/useArgsAction";

  import { setInputType } from "../../util/useTypeAction";

  identifier++;

  let className: string = "";

  export { className as class }; // exposes classes for the <input /> element
  export let placeholder: string;
  export let type = "text";
  export let args = {};
  export let value = "";
  export const id = "inp" + identifier;
</script>

<div class="relative bg-transparent w-full">
  <input
    {id}
    on:input
    use:setArgs={args}
    use:setInputType={type}
    bind:value
    placeholder=" "
    class="p-4 w-full rounded-xl border-solid border-2 border-purple-400 
        outline-none {className}"
  />
  <label
    for={id}
    class="absolute left-4 top-1/2 -translate-y-1/2 transition-top 
        duration-300 ease-out text-sm font-semibold"
  >
    {placeholder}
  </label>
</div>

<style>
  input:not(:placeholder-shown) ~ label,
  input:focus ~ label {
    top: var(--top-offset, 0.8rem);
  }
</style>
