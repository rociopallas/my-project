<script>
  import Dropdown from "./Dropdown.svelte";
  import ServiceCardEdit from "./ServiceCardEdit.svelte";
  import ServiceQueue from "./ServiceQueue.svelte";
  import DeleteBin from '../asset/DeleteBin.png'

  export let id;
  export let onDelete;
  export let isClient;

  function handleDelete() {
    onDelete(id);
  }
</script>

<div class="gradient-header p-1 rounded-2xl">
  <div class="flex flex-row gap-1 w-96 h-72">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body flex flex-col py-5 h-72 justify-center">
        <div class=" flex flex-row justify-between  items-center border-b border-black h-17 mt-3 pb-1">
          <h1 class="card-title">CORTE DE PELO</h1>
          {#if !isClient}
            <div class='flex items-center justify-center py-2'>
              <button class="rounded border-black border-r-1 mx-5" on:click={handleDelete}>
                <img src={DeleteBin} alt="DeleteBin" class='h-10' />
              </button>
              <ServiceCardEdit />
            </div>
          {/if}

          {#if isClient}
            <ServiceQueue />
          {/if}
        </div>
        <div class="flex flex-row justify-center items-center p-4 gap-20">
          <h1 class="mr-50 font-semibold text-xl">45 MIN</h1>
          <h1 class="ml-50 font-semibold text-xl">$450</h1>
        </div>
        <div class="flex flex-row justify-center items-center py-4">
          <h1 class="font-semibold">CORTE DE PELO UNISEX</h1>
        </div>
        <div class="flex flex-row justify-center items-center gap-5 p-4">
          <Dropdown>Colaboradores</Dropdown>
        </div>
      </div>
    </div>
  </div>
</div>