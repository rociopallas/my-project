<script>
  import ColaboratorCard from '../../../../components/CollabCard.svelte';
  import { v4 as uuidv4 } from 'uuid';
  import Plus from '../../../../asset/Plus.png';

  let cards = [];

  function addCard() {
    const id = uuidv4();
    console.log(id);
    cards = [...cards, { id }];
    console.log('carta agregada');
  }

  function deleteCard(id) {
    cards = cards.filter((card) => card.id !== id);
    console.log('carta eliminada');
  }
</script>


<div class='flex flex-col items-start'>
  <h1 class='text-4xl my-10 ml-5 font-bold'>MIS COLABORADORES</h1>

    <div class='mx-5 flex flex-wrap gap-5 h-170'>
      {#each cards as card (card.id)}
        <div class="w-300" key={card.id}>
          <ColaboratorCard id={card.id} onDelete={deleteCard} />
        </div>
      {/each}


    <div class="flex flex-wrap justify-evenly gap-1">
      <div class="border-r-15 border border-black border-opacity-80 bg-gray-100 rounded-2xl w-80 h-52">
        <div class="border-b border-gray-500 border-opacity-80 justify-center p-4 flex flex-row items-center h-20">
          <h1 class='py-auto uppercase font-semibold text-xl'>Agregar Colaborador</h1>
        </div>
        <div class="flex flex-row justify-center items-center px-5 h-32">
        <button 
        on:click={addCard} class='bg-green-400 rounded-full h-16 w-16 text-white text-5xl font-bold'
        >
          <img src={Plus} alt="Agregar" class='h-16' />
        </button>
        </div>
      </div>
    </div>
  </div>
</div>