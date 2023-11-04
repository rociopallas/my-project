<script>
  import Dropdown from './Dropdown.svelte';
  import Plus from '../asset/Plus.png';
</script>

<!-- <div class="flex flex-row gap-10 px-8 py-5 border-b border-gray-400 items-center">
  <h1 class="text-xl mx-5">Nombre del cliente</h1>
  <h1 class="text-xl mx-5">Numero de celular</h1>
  <h1 class="text-xl mx-5">Correo electronico</h1>
  <Dropdown>Ver notas</Dropdown>
  <div class="gradient-header  p-1 justify-center items-center rounded-xl border border-black">
    <div class="flex flex-row justify-center items-center w-40 h-12">
      <button class="bg-white rounded-xl w-full h-full font-semibold flex flex-row justify-center items-center gap-2">
        AGREGAR NOTA
        <div class='bg-green-500 w-5 h-5 rounded-full'>
          <img src={Plus} alt='Agregar' class='h-5' />
        </div>
      </button>
    </div>
  </div>
</div> -->


<div class=" w-3/4 h-3/4">
  <table class="table">
    <!-- head -->
    <thead class="text-2xl">
      <tr>
        <th></th>
        <th>Nombre</th>
        <th>Celular</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody class="text-lg hover">
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Huguito</td>
        <td>094731443</td>
        <td>Huguitoelpelado@gmail.com</td>
        <td><Dropdown>Ver notas</Dropdown></td>
        <td>
          <div class="flex flex-row gap-10 px-8 py-5 items-center">
            <div class="gradient-header  p-1 justify-center items-center rounded-xl border border-black">
              <div class="flex flex-row justify-center items-center w-40 h-12">
                <button class="bg-white rounded-xl w-full h-full font-semibold text-base flex flex-row justify-center items-center gap-2">
                  AGREGAR NOTA
                  <div class='bg-green-500 w-5 h-5 rounded-full'>
                    <img src={Plus} alt='Agregar' class='h-5' />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>