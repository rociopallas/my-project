<script>
  import EditPen from "../../../../asset/EditPen.png";
  import Plus from "../../../../asset/Plus.png";
  import Facebook from "../../../../asset/Facebook.png";
  import Instagram from "../../../../asset/Instagram.png";
  import TikTok from "../../../../asset/TikTok.png";
  import { onMount } from "svelte";

    let isDisabled = false;
    let isLoading = true;
    let formData = {
    name: 'Peluqueria de Rosa',
    email: 'RosaPerez@gmail.com',
    phone: '094479687',
    address: 'Millan 1234'
  };

    let SMData = {
      facebook: 'Agregue una URL',
      instagram: 'Agregue una URL',
      tiktok: 'Agregue una URL'
    }

    onMount(() => {

    const storedData = localStorage.getItem('bussinesData');
    const storedSMData = localStorage.getItem('SMData');
    if (storedData && storedSMData) {
      formData = JSON.parse(storedData);
      SMData = JSON.parse(storedSMData);
      console.log( 'se trajeron datos', formData, SMData);
    }
    isLoading = false;
  });
  function saveToLocalStorage() {
    isLoading = true;
    localStorage.setItem('bussinesData', JSON.stringify(formData));
    localStorage.setItem('SMData', JSON.stringify(SMData));
    isLoading = false;
  }

  $: disabled = isDisabled ? '' : 'disabled'

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
    console.log('Datos enviados:', formData, SMData);
    isDisabled = false;

  }

  function handleEdit(event) {
    isDisabled = !isDisabled;
  }

</script>

{#if isLoading}
<div class='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50'>
  <div class='p-5 rounded flex flex-col justify-center items-center gap-5'>
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</div>
{/if}
<div class="mt-10 mb-36">
<div class="">
  <h1 class="font-bold text-4xl py-5 ml-5 text-black mb-36">MI NEGOCIO</h1>
</div>
<div class="flex flex-row h-full justify-center items-center gap-10">
  <!-- <div class="w-1/4 flex flex-col gap-5 text-xl justify-center items-center mr-24">
    <div class="gradient-header p-1 rounded-2xl">
      <div class="flex flex-row gap-1 w-40 justify-center">
      <div class="card w-40 bg-base-100 shadow-xl border border-black">
        <div class="card-body border-b border-black justify-center py-5">
          <h2 class="card-title text-base">Agrear Icono</h2>
        </div>
        <figure class="h-24">
          <button class='bg-green-400 rounded-full h-16 w-16 text-white text-5xl font-bold'
          >
            <img src={Plus} alt="Agregar" class='h-16' />
          </button>
        </figure>
      </div>
    </div>
  </div>
</div> -->
  
<div class="w-1/3 flex flex-col gap-5 text-xl mx-14">
  <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
  <div class="flex flex-row items-center justify-between px-2 bg-white gap-0 rounded-xl">
    <div class="w-full">
      <form on:submit={handleSubmit} class="w 2/3">
        <div class="w-2/3">
          <label for="name" class="block text-sm font-medium text-gray-700">
          </label>
          <input
          type="name"
          id="name"
          name="name"
          bind:value={formData.name}
          on:input={handleChangeFormData}
          class="px-4 py-2 my-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 input input-bordered"
          required
          {disabled}
          />
        </div>
      </div>
      <button on:click={handleEdit}>
        <img src={EditPen} alt="EditPen" class="h-9"/>
      </button>
    </div>
  </div>
  <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
    <div class="flex flex-row items-center justify-between px-2 bg-white rounded-xl">
      <div>
        <form on:submit={handleSubmit} class="w 2/3">
          <div class="">
            <label for="email" class="block text-sm font-medium text-gray-700">
            </label>
            <input
            type="email"
            id="email"
            name="email"
            bind:value={formData.email}
            on:input={handleChangeFormData}
            class="px-4 py-2 my-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 input input-bordered"
            required
            {disabled}
            />
          </div>
        </div>
        <button on:click={handleEdit}>
          <img src={EditPen} alt="EditPen" class="h-9"/>
        </button>
      </div>
    </div>

    <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
      <div class="flex flex-row items-center justify-between px-2 bg-white rounded-xl">
        <div>
          <form on:submit={handleSubmit} class="w 2/3">
            <div class="">
              <label for="phone" class="block text-sm font-medium text-gray-700">
              </label>
              <input
              type="phone"
              id="phone"
              name="phone"
              bind:value={formData.phone}
              on:input={handleChangeFormData}
              class="px-4 py-2 my-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 input input-bordered"
              required
              {disabled}
              />
            </div>
          </div>
          <button on:click={handleEdit}>
            <img src={EditPen} alt="EditPen" class="h-9"/>
          </button>
        </div>
      </div>

      <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
        <div class="flex flex-row items-center justify-between px-2 bg-white rounded-xl">
          <div>
            <form on:submit={handleSubmit} class="w 2/3">
            <div class="">
              <label for="adress" class="block text-sm font-medium text-gray-700">
              </label>
              <input
              type="address"
              id="address"
              name="address"
              bind:value={formData.address}
              on:input={handleChangeFormData}
              class="px-4 py-2 my-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 input input-bordered"
              required
              {disabled}
              />
            </div>
          </div>
          <button on:click={handleEdit}>
            <img src={EditPen} alt="EditPen" class="h-9"/>
          </button>
        </div>
      </div>
    </div>

      <div class="w-1/4 flex flex-col gap-5 text-xl justify-end mr-10 mx-14">
        <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
        <div class="border-y bg-white flex flex-row items-center justify-between px-2 rounded-xl">
          <img src={Facebook} alt="Facebook" class="h-9"/>
          <div>
          <form on:submit={handleSubmit} class="w 2/3">
          <div class="">
            <label for="facebook" class="block text-sm font-medium text-gray-700">
            </label>
            <input
            type="facebook"
            id="facebook"
            name="facebook"
            bind:value={SMData.facebook}
            on:input={handleChangeSMData}
            class="px-4 py-2 my-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 input input-bordered"
            required
            {disabled}
            />
          </div>
        </div>
        <button on:click={handleEdit}>
          <img src={EditPen} alt="EditPen" class="h-9"/>
        </button>
      </div>
      </div>

      <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
     <div class="border-y bg-white flex flex-row items-center justify-between px-2 rounded-xl">
      <img src={Instagram} alt="Instagram" class="h-9"/>
      <div>
        <form on:submit={handleSubmit} class="w 2/3">
          <div class="">
            <label for="instagram" class="block text-sm font-medium text-gray-700">
            </label>
            <input
            type="instagram"
            id="instagram"
            name="instagram"
            bind:value={SMData.instagram}
            on:input={handleChangeSMData}
            class="px-4 py-2 my-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 input input-bordered"
            required
            {disabled}
            />
          </div>
        </div>
        <button on:click={handleEdit}>
          <img src={EditPen} alt="EditPen" class="h-9"/>
        </button>
      </div>
    </div>

    <div class="gradient-header p-0.5 justify-center items-center rounded-xl">
      <div class="border-y bg-white flex flex-row items-center justify-between px-2 rounded-xl">
        <img src={TikTok} alt="TikTok" class="h-9"/>
        <div>
        <form on:submit={handleSubmit} class="w 2/3">
          <div class="">
            <label for="tiktok" class="block text-sm font-medium text-gray-700">
            </label>
            <input
            type="tiktok"
            id="tiktok"
            name="tiktok"
            bind:value={SMData.tiktok}
            on:input={handleChangeSMData}
            class="px-4 py-2 my-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 input input-bordered"
            required
            {disabled}
            />
          </div>
        </div>
        <button on:click={handleEdit}>
          <img src={EditPen} alt="EditPen" class="h-9"/>
        </button>
      </div>
    </div>
  </div>
</div>
  <div class="justify-center flex flex-row py-5">
    {#if !isDisabled}
    <button
    class="mt-4 py-2 text-white  iris_purple hover:shadow-md hover:opacity-80 rounded-lg w-40 h-16"
    on:click={handleEdit}
    >
    Editar
    </button>
    {/if}
    {#if isDisabled}
    <button
    type="submit"
    class="mt-4 py-2 text-white iris_purple hover:shadow-md hover:opacity-80 rounded-lg w-40 h-20"
    on:click={handleSubmit}
    >
    Guardar Cambios
    </button>
    {/if}
  </div>
</div>