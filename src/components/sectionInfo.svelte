<script>
    import { onMount } from "svelte";
  
    let isDisabled = false;
    let formData = {
      name: "Peluqueria de Rosa",
      email: "RosaPerez@gmail.com",
      phone: "094479687",
      address: "Millan 1234",
    };
  
    let SMData = {
      facebook: "Agregue una URL",
      instagram: "Agregue una URL",
      tiktok: "Agregue una URL",
    };
  
    onMount(() => {
      const storedData = localStorage.getItem("bussinesData");
      const storedSMData = localStorage.getItem("SMData");
      if (storedData && storedSMData) {
        formData = JSON.parse(storedData);
        SMData = JSON.parse(storedSMData);
        console.log("se trajeron datos", formData, SMData);
      }
    });
    function saveToLocalStorage() {
      localStorage.setItem("bussinesData", JSON.stringify(formData));
      localStorage.setItem("SMData", JSON.stringify(SMData));
    }
  
    $: disabled = isDisabled ? "" : "disabled";
  
    function handleChangeFormData(event) {
      const { name, value } = event.target;
      formData = { ...formData, [name]: value };
    }
  
    function handleChangeSMData(event) {
      const { name, value } = event.target;
      formData = { ...SMData, [name]: value };
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      saveToLocalStorage();
      console.log("Datos enviados:", formData, SMData);
      isDisabled = false;
    }
  
    function handleEdit(event) {
      isDisabled = !isDisabled;
    }
  </script>
  
  <div class="">
    <div class="flex flex-row h-full justify-center items-start gap-10">
      <div class="w-1/3 flex flex-col gap-5 text-xl mx-14">
        <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
          <div
            class="flex flex-row items-center justify-between px-2 bg-white gap-0 rounded-xl"
          >
            <div class="w-full">
              <form on:submit={handleSubmit} class="w 2/3">
                <div class="w-2/3">
                  <label
                    for="name"
                    class="block text-sm font-medium text-black dark:text-black"
                  />
                  <input
                    type="name"
                    id="name"
                    name="name"
                    bind:value={formData.name}
                    on:input={handleChangeFormData}
                    class="px-4 py-2 my-2 border rounded-lg"
                    required
                    {disabled}
                  />
                </div>
              </form>
            </div>
            <button on:click={handleEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#9f53ff}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
            </button>
          </div>
        </div>
        <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
          <div
            class="flex flex-row items-center justify-between px-2 bg-white rounded-xl"
          >
            <div>
              <form on:submit={handleSubmit} class="w 2/3">
                <div class="">
                  <label
                    for="email"
                    class="block text-sm font-medium text-black dark:text-black"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    bind:value={formData.email}
                    on:input={handleChangeFormData}
                    class="px-4 py-2 my-2 border rounded-lg"
                    required
                    {disabled}
                  />
                </div>
              </form>
            </div>
            <button on:click={handleEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#9f53ff}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
            </button>
          </div>
        </div>
  
        <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
          <div
            class="flex flex-row items-center justify-between px-2 bg-white rounded-xl"
          >
            <div>
              <form on:submit={handleSubmit} class="w 2/3">
                <div class="">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-black dark:text-black"
                  />
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    bind:value={formData.phone}
                    on:input={handleChangeFormData}
                    class="px-4 py-2 my-2 border rounded-lg"
                    required
                    {disabled}
                  />
                </div>
              </form>
            </div>
            <button on:click={handleEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#9f53ff}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
            </button>
          </div>
        </div>
  
        <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
          <div
            class="flex flex-row items-center justify-between px-2 bg-white rounded-xl"
          >
            <div>
              <form on:submit={handleSubmit} class="w 2/3">
                <div class="">
                  <label
                    for="adress"
                    class="block text-sm font-medium text-black dark:text-black"
                  />
                  <input
                    type="address"
                    id="address"
                    name="address"
                    bind:value={formData.address}
                    on:input={handleChangeFormData}
                    class="px-4 py-2 my-2 border rounded-lg"
                    required
                    {disabled}
                  />
                </div>
  
  
              </form>
            </div>
            <button on:click={handleEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#9f53ff}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="justify-center flex flex-row py-5">
      {#if !isDisabled}
        <button
          class="w-40 mt-4 py-2 mr-4 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg"
          on:click={handleEdit}
        >
          Editar
        </button>
      {/if}
      {#if isDisabled}
        <button
          type="submit"
          class="w-40 mt-4 py-2 mr-4 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg"
          on:click={handleSubmit}
        >
          Guardar Cambios
        </button>
      {/if}
    </div>
  </div>