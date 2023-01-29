<script lang="ts">
  import { fly } from "svelte/transition";

  export let cep: string;

  const apiPath = (cep: string) => `https://viacep.com.br/ws/${cep}/json/`;

  interface ICepInfo {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  }

  fetch(
    "http://pt.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=Seberi%20Page"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));

  async function searchForCEP(cep: string): Promise<ICepInfo> {
    const response = await fetch(apiPath(cep));
    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new Error();
  }
</script>

<section class="flex flex-col gap-2 text-center text-xl">
  {#if cep && cep.length === 9}
    {#await searchForCEP(cep)}
      <p>Procurando...</p>
    {:then cepInfo}
      <h2 class="font-bold text-3xl text-center mb-4">
        Dados do CEP informado:
      </h2>

      <p>Cidade/Localidade: {cepInfo.localidade || "Sem Dados"}</p>
      <p>Logradouro: {cepInfo.logradouro || "Sem dados"}</p>
      <p>Bairro: {cepInfo.bairro || "Sem dados"}</p>
      <p>Unidade Federativa (UF): {cepInfo.uf || "Sem dados"}</p>
      <p>Código do IBGE: {cepInfo.ibge || "Sem dados"}</p>
    {:catch error}
      <p
        transition:fly={{ y: 100 }}
        class="error absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center"
      >
        Ocorreu um erro.
        <br />
        <span class="text-sm">
          Detalhes:
          {error.message}
        </span>
      </p>
    {/await}
  {:else}
    <p
      transition:fly={{ y: 100 }}
      class="error absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    >
      CEP inválido ou não informado!
    </p>
  {/if}
</section>

<style>
  .error {
    color: #e05867;
    font-size: 1.75rem;
    font-weight: 600;
  }
</style>
