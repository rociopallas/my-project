<script>
  import Carrousel from "../components/componentCarrusel.svelte";
  import PublicFooter from "../components/publicFooter.svelte";
  import PublicHeader from "../components/publicHeader.svelte";
</script>

<PublicHeader />
<div class="flex items-center justify-between">
  <div class="w-1/2 p-10 pt-20">
    <h2 class="text-2xl font-bold mb-4">Lorem</h2>
    <p class="text-gray-700 mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laudantium repellat dolorum nostrum exercitationem cupiditate eos ex voluptates esse facere possimus velit, quas, laboriosam modi consequatur delectus totam quisquam. Iusto!
    </p>
    <div class="space-x-4">
      <a href="/registro">
        <button class="bg-white shadow-md hover:bg-violeta hover:text-white text-primary px-4 py-2 rounded-lg">Registrarse</button>
      </a>
      <a href="/login">
        <button class="bg-white shadow-md hover:bg-violeta hover:text-white text-primary px-4 py-2 rounded-lg">Ingresar</button>
      </a>
    </div>
  </div>

  <div class="w-1/2 p-10 pt-20">
    <Carrousel />
  </div>
</div>
<PublicFooter />


<style lang="postcss">
</style>