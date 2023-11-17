<script>
  import ColaboratorCard from "./CollabCard.svelte";
  import { v4 as uuidv4 } from "uuid";
  import Plus from "../asset/Plus.png";
  import { onMount } from "svelte";

  let cards = [];

  onMount(() => {
    const storedCards = localStorage.getItem("collabCards");
    if (storedCards) {
      cards = JSON.parse(storedCards);
    }
  });

  function saveToLocalStorage() {
    localStorage.setItem("collabCards", JSON.stringify(cards));
  }

  let formCard = {
    name: "",
    phone: "",
  };

  let isModalOpen = false;

  function toggleModal() {
    isModalOpen = !isModalOpen;
  }

  function editCard(id, newFormData) {
    cards = cards.map((card) => {
      if (card.id === id) {
        card.data = newFormData; // Update the data for the specific card
      }
      return card;
    });
    isModalOpen = false;
  }

  function deleteCard(id) {
    cards = cards.filter((card) => card.id !== id);
    console.log("card deleted");
    saveToLocalStorage();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    formCard = { ...formCard, [name]: value };
  }

  function handleSubmit(event) {
    event.preventDefault();
    isModalOpen = false;
    const id = uuidv4();
    const newCard = { id, isClient: false, data: { ...formCard } }; // Store data in the new card object
    cards = [...cards, newCard];
    saveToLocalStorage();
    formCard = {
      // Reset the formCard
      name: "",
      phone: "",
    };
  }
</script>

<div class="flex flex-col items-start text-black">
  <div class="mx-5 flex flex-wrap gap-5">
    {#each cards as card (card.id)}
      <div class="w-300" key={card.id}>
        <ColaboratorCard
          id={card.id}
          onDelete={deleteCard}
          onEdit={editCard}
          data={card.data}
        />
      </div>
    {/each}
    <div class="gradient-header p-1 rounded-2xl">
      <div class="flex flex-row gap-1 w-80 h-52">
        <div class="card w-80 bg-base-100 shadow-xl">
          <div class="card-body flex flex-col pb-5 pt-0 h-52 justify-center">
            <div
              class=" flex flex-wrap justify-center items-center border-b border-black h-16 pb-2 pt-1 mt-1.5"
            >
              <h1 class="card-title">Agregar colaborador</h1>
            </div>
            <div
              class="flex flex-row justify-center items-center p-1 pt-4 inset-0 gap-16"
            >
              <button
                on:click={toggleModal}
                class="w-20 h-20 rounded-full iris_green"
              >
                <img src={Plus} alt="Agregar" class="w-20 h-20" />
              </button>
              {#if isModalOpen}
                <div
                  class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
                >
                  <div
                    class="bg-white border border-black p-7 rounded-2xl flex flex-col justify-center items-center gap-5"
                  >
                    <form on:submit={handleSubmit}>
                      <div class="mb-4">
                        <label
                          for="name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Nombre del colaborador:
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          bind:value={formCard.name}
                          on:input={handleChange}
                          class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label
                          for="phone"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Telefono:
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          bind:value={formCard.phone}
                          on:input={handleChange}
                          class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                          required
                        />
                      </div>
                      <div
                        class="flex flex-col items-center justify-center gap-2"
                      >
                        <button
                          type="submit"
                          class="w-full py-2 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg"
                        >
                          Guardar colaborador
                        </button>
                        <button
                          class="text-blue-500 underline"
                          on:click={toggleModal}>Cancelar</button
                        >
                      </div>
                    </form>
                  </div>
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
