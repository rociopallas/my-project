<script>
  import ServiceCard from '../../../../components/ServiceCard.svelte';
  import { v4 as uuidv4 } from 'uuid';
  import Plus from '../../../../asset/Plus.png';

  let cards = [];

  function addCard() {
    const id = uuidv4();
    console.log(id);
    cards = [...cards, { id, isClient: false }];
    console.log('carta agregada');
  }

  function deleteCard(id) {
    cards = cards.filter((card) => card.id !== id);
    console.log('carta eliminada');
  }
</script>


<div class='flex flex-col items-start'>
  <h1 class='text-4xl font-bold my-10 ml-5'>MIS SERVICIOS</h1>

    <div class='mx-5 flex flex-wrap gap-5'>
      {#each cards as card (card.id)}
        <div class="w-300" key={card.id}>
          <ServiceCard id={card.id} onDelete={deleteCard} isClient={card.isClient} />
        </div>
      {/each}


    <div class="flex flex-row gap-1 w-96 h-64">
      <div class="border-r-15 border border-black border-opacity-80 bg-gray-100 rounded-2xl w-96 h-64">
        <div class="border-b border-gray-500 justify-center flex flex-auto p-4 items-center h-16">
          <h1 class='py-auto uppercase font-semibold text-xl'>Agregar Servicio</h1>
        </div>
        <div class="flex flex-row justify-center items-center px-5 h-48">
          <button 
          on:click={addCard} class='bg-green-400 rounded-full my-14 h-24 w-24 text-white text-5xl font-bold'
          >
            <img src={Plus} alt="Agregar" class='h-24' />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
