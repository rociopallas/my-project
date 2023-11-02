<script>
  import PublicFooter from "../../components/publicFooter.svelte";
import PublicHeader from "../../components/publicHeader.svelte";

  let formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  function handleChange(event) {
    const { name, value } = event.target;
    formData = { ...formData, [name]: value };
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes realizar la validación
    if (formData.password === formData.confirmPassword) {
      // Realiza la acción de registro
      console.log('Datos enviados:', formData);
    } else {
      // Maneja la validación de contraseñas que no coinciden
      alert('Las contraseñas no coinciden');
    }
  }
</script>

<PublicHeader />
<div class="max-w-md mx-auto mt-40 p-4 min-h-screen">
  <h2 class="text-2xl font-semibold mb-4">Formulario de Registro</h2>
  <form on:submit={handleSubmit}>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">
        Nombre:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        bind:value={formData.name}
        on:input={handleChange}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        bind:value={formData.email}
        on:input={handleChange}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700">
        Contraseña:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        bind:value={formData.password}
        on:input={handleChange}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </div>
    <div class="mb-4">
      <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
        Repetir Contraseña:
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        bind:value={formData.confirmPassword}
        on:input={handleChange}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </div>
    <button
      type="submit"
      class="w-full py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
    >
      Registrarse
    </button>
  </form>
  <p class="pt-6">¿Ya estás registrado? <a href="/login" class="underline text-blue-500">Iniciar sesión</a></p>
</div>
<PublicFooter />
