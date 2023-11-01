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
      <div class="gradient-header p-1 rounded-2xl">
        <div class="flex flex-row gap-1 w-96 h-72">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col pb-5 pt-0 h-72 justify-center">
              <div class=" flex flex-wrap justify-center items-center border-b border-black h-16">
                <h1 class="card-title">AGREGAR SERVICIO</h1>
              </div>
                <div class="flex flex-row justify-center items-center p-4 gap-20">
                  <button on:click={addCard} class="w-40 h-40 rounded-full iris_green">
                    <img src={Plus} alt="Agregar" class="w-40 h-40"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
