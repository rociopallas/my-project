<script>
  import ServiceCard from "./ServiceCard.svelte";
  import { v4 as uuidv4 } from "uuid";
  import Plus from "../asset/Plus.png";
  import { onMount } from "svelte";

  let cards = [];
  let listCollaborators = [
    {
      name: "Rosa",
      id: 1,
    },
    {
      name: "Pepe",
      id: 2,
    },
    {
      name: "Maria",
      id: 3,
    },
  ];

  onMount(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      cards = JSON.parse(storedCards);
    }
  });

  function saveToLocalStorage() {
    localStorage.setItem("cards", JSON.stringify(cards));
  }

  let formCard = {
    name: "",
    duration: "",
    price: "",
    description: "",
    collaborators: [],
  };

  let isModalOpen = false;

  function addCard() {
    isModalOpen = true;
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

  function handleCancel() {
    isModalOpen = false;
  }
  function handleSubmit(event) {
    event.preventDefault();
    isModalOpen = false;

    formCard.collaborators = listCollaborators.filter((collaborator) => {
      const checkbox = document.getElementById(collaborator.id);
      return checkbox.checked;
    });

    const id = uuidv4();
    const newCard = { id, data: { ...formCard } }; // Store data in the new card object
    cards = [...cards, newCard];
    console.log("datos guardados", formCard);
    saveToLocalStorage();
    formCard = {
      // Reset the formCard
      name: "",
      duration: "",
      price: "",
      description: "",
      collaborators: [],
    };
  }
</script>

<div class="flex flex-col items-start text-black">
  <div class="mx-5 flex flex-wrap gap-5">
    {#each cards as card (card.id)}
      <div class="w-300" key={card.id}>
        <ServiceCard
          id={card.id}
          onDelete={deleteCard}
          onEdit={editCard}
          data={card.data}
        />
      </div>
    {/each}
    <div class="gradient-header p-1 rounded-2xl">
      <div class="flex flex-row gap-1 w-96 h-72">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body flex flex-col pb-5 pt-0 h-72 justify-center">
            <div
              class=" flex flex-wrap justify-center items-center border-b border-black h-16"
            >
              <h1 class="card-title">Agregar servicio</h1>
            </div>
            <div class="flex flex-row justify-center items-center p-4 gap-20">
              <button
                on:click={addCard}
                class="w-20 h-20 rounded-full iris_green"
              >
                <img src={Plus} alt="Agregar" class="w-20 h-20" />
              </button>
              {#if isModalOpen}
                <div
                  class="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-center z-50"
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
                          Nombre del servicio:
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
                          for="duration"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Duracion:
                        </label>
                        <input
                          type="text"
                          id="duration"
                          name="duration"
                          bind:value={formCard.duration}
                          on:input={handleChange}
                          class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label
                          for="price"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Precio:
                        </label>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          bind:value={formCard.price}
                          on:input={handleChange}
                          class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label
                          for="description"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Descripcion:
                        </label>
                        <input
                          type="description"
                          id="description"
                          name="description"
                          bind:value={formCard.description}
                          on:input={handleChange}
                          class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                          required
                        />
                      </div>
                      <div class="form-control pb-3">
                        {#each listCollaborators as collaborator}
                          <label class="label cursor-pointer">
                            <input
                              type="checkbox"
                              bind:group={formCard.collaborators}
                              class="checkbox"
                              value={collaborator.name}
                              id={collaborator.id}
                            />
                            <span class="label-text">{collaborator.name}</span>
                          </label>
                        {/each}
                      </div>
                      <div
                        class="flex flex-col items-center justify-center gap-2"
                      >
                        <button
                          type="submit"
                          class="w-full py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
                        >
                          Guardar servicio
                        </button>
                        <button
                          class="text-blue-500 underline"
                          on:click={handleCancel}>Cancelar</button
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
