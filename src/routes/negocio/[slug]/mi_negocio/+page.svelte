<script>
  import EditPen from "../../../../asset/EditPen.png";
  import Plus from "../../../../asset/Plus.png";

    let isDisabled = false;
    let formData = {
    name: 'Nombre de la empresa',
    email: 'Correo Electronico',
    phone: 'Telefono',
    address: 'Direccion'
  };

    let SMData = {
      facebook: 'URL...',
      instagram: 'URL...',
      tiktok: 'URL...'
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
    console.log('Datos enviados:', formData);
  }

  function handleEdit(event) {
    isDisabled = !isDisabled;
  }

</script>

<div>
  <h1 class="font-semibold text-4xl py-5 ml-5 mb-10">Mi Negocio</h1>
</div>
<div class="flex flex-row h-full justify-between items-center gap-5">
  <div class="w-1/4 flex flex-col gap-5 text-xl justify-center items-center">
    <div class="card w-40 bg-base-100 shadow-xl border border-black ml-10">
      <div class="card-body border-b border-black">
        <h2 class="card-title text-sm">Agrear Icono</h2>
      </div>
      <figure class="h-24">
        <button class='bg-green-400 rounded-full h-16 w-16 text-white text-5xl font-bold'
        >
          <img src={Plus} alt="Agregar" class='h-16' />
        </button>
      </figure>
      </div>
    </div>
  

  <div class="w-1/3 flex flex-col gap-5 text-xl">
    <div class="border-y border-gray-400 flex flex-row items-center justify-between px-2">
      <div>
        <form on:submit={handleSubmit} class="w 2/3">
          <div class="">
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

     <div class="border-y border-gray-400 flex flex-row items-center justify-between px-2">
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

 <div class="border-y border-gray-400 flex flex-row items-center justify-between px-2">
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
     <div class="border-y border-gray-400 flex flex-row items-center justify-between px-2">
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

    <div class="w-1/4 flex flex-col gap-5 text-xl justify-end">
<div class="border-y border-gray-400 flex flex-row items-center justify-between px-2">
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

     <div class="border-y border-gray-400 flex flex-row items-center justify-between px-2">
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

 <div class="border-y border-gray-400 flex flex-row items-center justify-between px-2">
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