<script>
  import { scale } from "svelte/transition";
</script>

<section
  in:scale
  class="flex flex-col gap-6 items-baseline absolute top-1/2
   -translate-y-1/2 text-2xl font-medium p-4 indent-6 sm:indent-0"
>
  <p>
    Página simples que usa a API da <a
      class="text-indigo-300"
      href="https://viacep.com.br/"
      target="_blank"
      rel="noreferrer">ViaCEP</a
    > para buscar informações sobre o CEP informado.
  </p>

  <p>
    A página foi feita com o objetivo de testar a integração das tecnologias
    TailwindCSS, Svelte e TypeScript.
  </p>

  <p>
    <a
      class="text-indigo-300"
      target="_blank"
      rel="noreferrer"
      href="https://icons8.com/icon/59795/globe">Ícone de globo</a
    >
    por
    <a
      class="text-indigo-300"
      target="_blank"
      rel="noreferrer"
      href="https://icons8.com">Icons8</a
    >
  </p>
</section>
