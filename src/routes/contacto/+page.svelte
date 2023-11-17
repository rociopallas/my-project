<script>
  import gamilIcon from "../../asset/gmail.svg";
  import whatsIcon from "../../asset/whatsapp.svg";
  import instaIcon from "../../asset/instagram.svg";
  import PublicHeader from "../../components/publicHeader.svelte";
  import PublicFooter from "../../components/publicFooter.svelte";
  let name = "";
  let email = "";
  let message = "";

  function handleSubmit() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Nombre:", name);
    console.log("Correo Electrónico:", email);
    console.log("Mensaje:", message);
  }
</script>

<PublicHeader />
<div class="mt-32">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-semibold">Contáctanos</h2>
    <p class=" mt-2">¡Estamos aquí para ayudarte! Ponte en contacto con nosotros:</p>
    
    <div class="max-w-md mx-auto mt-10 mb-20 p-4 border-2 rounded-2xl border-my_violet bg-gray-50 text-black">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-4">
          <label for="name" class="block  font-semibold mb-2">Nombre:</label>
          <input
            type="text"
            id="name"
            bind:value={name}
            placeholder="Tu nombre"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block font-semibold mb-2">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            placeholder="tucorreo@example.com"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block font-semibold mb-2">Mensaje:</label>
          <textarea
            id="message"
            bind:value={message}
            placeholder="Escribe tu mensaje aquí"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 h-32"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 text-white bg-my_blue hover:shadow-md hover:opacity-80 rounded-lg"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  </div>
</div>
<PublicFooter />