<script>
  import SectionCollab from "../../../../components/sectionCollab.svelte";
  import SectionService from "../../../../components/sectionService.svelte";
  import SectionLink from "../../../../components/sectionLink.svelte";
  import SectionInfo from "../../../../components/sectionInfo.svelte";
  import SectionClients from "../../../../components/sectionClients.svelte";
</script>

<svelte:head>
  <title>Mi negocio</title>
</svelte:head>

<div class="mt-32 mb-36 px-20">
  <!-- Colaboradores -->
  <div class="my-20">
    <h1 class="text-3xl font-bold mb-8">Mis colaboradores</h1>
    <SectionCollab />
  </div>
  <!-- Servicios -->
  <div class="my-20">
    <h1 class="text-3xl font-bold mb-8">Mis servicios</h1>
    <SectionService />
  </div>
  <!-- Link -->
  <div class="mt-20">
    <h1 class="text-3xl font-bold mb-4">Link de reservas</h1>
    <p class="text-lg font-semibold">
      Deberas compartir este link con tus clientes para que ingresen al sitio de
      reservas, sugerimos que lo compartas en tus redes sociales.
    </p>
    <SectionLink />
  </div>
  <!-- Clientes -->
  <div class="-mt-5 mb-20">
    <h1 class="text-3xl font-bold mb-5">Mis clientes</h1>
    <SectionClients />
  </div>
  <!-- info empresa -->
  <div class="my-20">
    <h1 class="text-3xl font-bold mb-10">Información de mi negocio</h1>
    <SectionInfo />
  </div>
</div>
