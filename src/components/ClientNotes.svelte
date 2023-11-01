<script>
  import Dropdown from './Dropdown.svelte';
  import Plus from '../asset/Plus.png';
</script>

<div class="flex flex-row gap-10 px-8 py-5 border-b border-gray-400 items-center">
  <h1 class="text-xl mx-5">Nombre del cliente</h1>
  <h1 class="text-xl mx-5">Numero de celular</h1>
  <h1 class="text-xl mx-5">Correo electronico</h1>
  <Dropdown>Ver notas</Dropdown>
  <button class="bg-white rounded-2xl w-40 h-11 border border-black mx-5 shadow-md font-semibold flex flex-row justify-center items-center gap-5">
    Agregar Nota
    <div class='bg-green-500 w-5 h-5 rounded-full'>
      <img src={Plus} alt='Agregar' class='h-5' />
    </div>
  </button>
</div>