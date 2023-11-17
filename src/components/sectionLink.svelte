<script>
  import Navigate from '../asset/Navigate.png';
  import Copy from '../asset/Copy.png';

  let enlace = 'https://www.iris-mvp.com/reserva/';

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(enlace);
      console.log('Copiado!');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }

</script>

<div class="flex flex-col items-center justify-center">
  <div class="flex flex-col items-center justify-center gap-5 my-32">
    <div class=" bg-gray-100 px-5 py-2 border border-black justify-center items-center flex flex-row gap-5 rounded-2xl">
      <div class="py-5">
        <p class="mx-20 text-2xl">{enlace}</p>
      </div>
      <button on:click={handleCopy} class="p-2">
        <img src={Copy} alt='copiar enlace' class="h-9" />
      </button>
    </div>
    <div class="flex flex-row gap-10 px-8 py-5 items-center text-black">
      <div class="gradient-header  p-1 justify-center items-center rounded-xl border border-black">
        <div class="flex flex-row justify-center items-center w-96 h-20">
          <a href="/reserva">
            <button class="btn p-5 w-96 h-20 rounded-xl  justify-center items-center shadow-md flex flex-row gap-5">
              <img src={Navigate} alt='compartir' class='h-9 ml-3' />
              <p class="text-xl w-64">Ver mi sitio de reservas</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>