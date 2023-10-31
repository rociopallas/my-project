<script>
  import { onMount } from "svelte";
  import logoIris from "../asset/otra_flor.svg";

  let isModalOpen = false;

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      isModalOpen = true;
    }
  }

  onMount(() => {
    // Define la lógica necesaria para abrir o cerrar el modal
  });
</script>

<div class="header">
  <nav
    class="gradient-header p-4 pr-10 pl-10 flex items-center justify-between"
  >
    <div class="flex items-center">
      <img src={logoIris} alt="Logo" class="w-10" />
      <span class="text-white ml-2 text-lg font-semibold">IRIS</span>
    </div>
    <div class="flex items-center text-lg gap-10">
      <a href="/" class="text-white">Inicio</a>
      <button
        class="text-white"
        on:click={() => (isModalOpen = true)}
        on:keydown={handleKeyDown}>Demo</button
      >
      <a href="/nosotros" class="text-white">Nosotros</a>
      <a href="/contacto" class="text-white">Contacto</a>
      <a href="/reserva" class="text-white">Reserva</a>
    </div>
  </nav>
</div>
