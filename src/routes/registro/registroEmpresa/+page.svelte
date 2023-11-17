<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import PublicFooter from "../../../components/publicFooter.svelte";
  import PublicHeader from "../../../components/publicHeader.svelte";
  import { store } from "../../../hooks/auth";
  import { goto } from "$app/navigation";

  let business = {
    name: "",
    phone: "",
    address: "",
    uniqueWorker: true,
    firstCollaborator: "",
  };

  //Función SIN SERVIDOR
  function handleSubmit() {
    localStorage.setItem("negocio", business.name);
    localStorage.setItem("phone", business.phone);
    localStorage.setItem("address", business.address);
    let link = "www.iris-mvp.com/reserva/" + business.name;
    localStorage.setItem("link", link);
    let ruta = "/negocio/" + business.name;
    window.location.replace(ruta)
  }

  // Método para enviar datos al backend con el token adjunto en el encabezado
//   const sendDataToBackend = async () => {
//     try {
//       const token = $store.token;

//       const dataToSend = {
//         name: business.name,
//         phone: business.phone,
//         address: business.address,
//       };

//       const response = await axios.post(
//         "https://localhost:8000/api/Business_Data/",
//         dataToSend,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await sendDataToBackend();
//     goto("/negocio/rosa");
//   };
// </script>

<PublicHeader />

<div>
  <div class="max-w-md mx-auto mt-40 mb-40 p-4 border-2 rounded-2xl border-my_violet bg-gray-50 text-black">
    <h2 class="text-2xl font-semibold mb-4">
      Formulario de Registro de Empresa
    </h2>
    <form on:submit={handleSubmit}>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium">
          Nombre de la empresa:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          bind:value={business.name}
          class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium ">
          Teléfono:
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          bind:value={business.phone}
          class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div class="mb-4">
        <label for="adress" class="block text-sm font-medium ">
          Dirección:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          bind:value={business.address}
          class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div class="mb-8">
        <p class="block text-sm font-medium">
          ¿Quién trabaja en tu empresa?
        </p>
        <div class="form-control">
          <label class="label justify-start gap-5 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              class="radio checked:bg-my_blue bg-white"
              checked
            />
            <span class="label-text">Yo</span>
          </label>
        </div>
        <div class="form-control">
          <label class="label justify-start gap-5 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              class="radio checked:bg-my_blue bg-white"
              checked
            />
            <span class="label-text">Otros</span>
          </label>
        </div>
        <div class="form-control">
          <label class="label justify-start gap-5 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              class="radio checked:bg-my_blue bg-white"
              checked
            />
            <span class="label-text">Otros y yo</span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        class="w-full py-2 text-white bg-my_blue hover:shadow-md hover:opacity-80 rounded-lg"
      >
        Continuar
      </button>
    </form>
  </div>
</div>

<PublicFooter />
