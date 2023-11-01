<script>
  import Navigate from '../../../../asset/Navigate.png';
  import ShareLink from '../../../../asset/ShareLink.png';
  import Copy from '../../../../asset/Copy.png';
</script>
<div class="flex flex-col items-center justify-center">
  <h1 class="text-4xl my-10 ml-5 font-bold">MI LINK</h1>
  <div class="flex flex-col items-center justify-center gap-5 my-32">
    <div class="mb-10 bg-gray-100 p-5 border border-black justify-center items-center flex flex-row gap-5">
      <p class="mx-20 text-2xl">.....Placeholder enlace.....</p>
      <img src={Copy} alt='copiar enlace' class="h-9" />
    </div>
    <button class="bg-gray-100 p-5 w-80 rounded-2xl border border-black justify-center items-center shadow-md flex flex-row gap-10">
      <img src={ShareLink} alt='compartir' class='h-9 -ml-14' />
      <strong class="text-xl">COMPARTIR</strong>
    </button>
    <button class="bg-gray-100 p-5 w-80 rounded-2xl border border-black justify-center items-center shadow-md flex flex-row gap-5">
      <img src={Navigate} alt='compartir' class='h-9 ml-3' />
      <strong class="text-xl w-64">VISITAR MI SITIO</strong>
    </button>
  </div>
</div>
