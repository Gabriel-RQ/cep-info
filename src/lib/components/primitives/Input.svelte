<script context="module">
    let identifier = 0;
</script>

<script lang="ts">
    import { setInputType } from "../../util/useTypeAction";

    identifier++; 

    let className = "";

    export { className as class }; // exposes classes for the <input /> element
    export let placeholder: string;
    export let type = "text";
    export const id = "inp" + identifier;

</script>

<div class="relative bg-transparent">
    <input {id} 
        use:setInputType={type}
        placeholder=" "
        class="p-4 w-full rounded-xl border-solid border-2 border-purple-400 outline-none {className}"
    >
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
        top: var(--top-offset, .8rem);
    }
</style>
