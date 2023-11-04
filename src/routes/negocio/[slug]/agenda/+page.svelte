<script>
  import calendario from '../../../../asset/calendario.png'
</script>

<div class='flex flex-grow h-full py-10'>
  <div class=' flex flex-col w-1/4 items-center justify-center'>
    <h1 class='text-4xl font-semibold mb-5'>Mis agendas</h1>
    <div class='flex flex-col gap-1 text-xl'>
      <div class=' flex flex-row gap-1'>
        <input type="checkbox" id="colab1" value="colab1" />
        <label for="colab1">Colaborador 1</label>
      </div>
      <div class=' flex flex-row gap-1'>
        <input type="checkbox" id="colab2" value="colab2" />
        <label for="colab2">Colaborador 2</label>
      </div>
      <div class=' flex flex-row gap-1'>
        <input type="checkbox" id="colab3" value="colab3" />
        <label for="colab3">Colaborador 3</label>
      </div>
    </div>
  </div>
  <div class='w-3/4'>
    <img src={calendario} alt="calendario" class='w-3/4' />
  </div>
</div>