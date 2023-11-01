<script>
  import CollabCardEdit from "./CollabCardEdit.svelte";
  import DeleteBin from '../asset/DeleteBin.png';

  export let id;
  export let onDelete;

  function handleDelete() {
    onDelete(id);
  }
</script>

<div class="flex flex-row gap-1 w-80 h-52">
  <div class="border-r-15 border border-black border-opacity-80 bg-gray-100 rounded-2xl w-80 h-52">
    <div class="border-b border-gray-500 border-opacity-80 justify-center p-4 flex flex-row items-center gap-12">
      <h1 class='font-semibold text-xl'>NOMBRE</h1>
      <div class=' flex flex-row items-center justify-center h-12 w-80 ml-5'>
        <button class="rounded border-black border-r-1 mx-5" on:click={handleDelete}>
          <img src={DeleteBin} alt="DeleteBin" class='h-9' />
        </button>
        <CollabCardEdit />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center p-4 gap-5 py-5 h-32 w-80">
      <p class='font-semibold'>TELEFONO</p>
      <p class='font-semibold text-xl'>LINK AGENDA</p>
    </div>
  </div>
</div>
