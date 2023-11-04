<script>
  import Navigate from '../../../../asset/Navigate.png';
  import ShareLink from '../../../../asset/ShareLink.png';
  import Copy from '../../../../asset/Copy.png';
</script>
<div class="flex flex-col items-center justify-center">
  <h1 class="text-4xl my-10 ml-5 font-bold text-black">MI LINK</h1>
  <div class="flex flex-col items-center justify-center gap-5 my-32">
    <div class="mb-10 bg-gray-100 p-5 border border-black justify-center items-center flex flex-row gap-5">
      <p class="mx-20 text-2xl">.....Placeholder enlace.....</p>
      <img src={Copy} alt='copiar enlace' class="h-9" />
    </div>
    <div class="flex flex-row gap-10 px-8 py-5 items-center text-black">
      <div class="gradient-header  p-1 justify-center items-center rounded-xl border border-black">
        <div class="flex flex-row justify-center items-center w-80 h-20">
          <button class="bg-gray-100 p-5 w-80 rounded-xl  justify-center items-center shadow-md flex flex-row gap-10">
            <img src={ShareLink} alt='compartir' class='h-9 -ml-14' />
            <strong class="text-xl">COMPARTIR</strong>
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-10 px-8 py-5 items-center text-black">
      <div class="gradient-header  p-1 justify-center items-center rounded-xl border border-black">
        <div class="flex flex-row justify-center items-center w-80 h-20">
          <button class="bg-gray-100 p-5 w-80 rounded-xl  justify-center items-center shadow-md flex flex-row gap-5">
            <img src={Navigate} alt='compartir' class='h-9 ml-3' />
            <strong class="text-xl w-64">VISITAR MI SITIO</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
