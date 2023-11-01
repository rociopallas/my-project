<!-- layout: layouts/clientLayout.svelte -->
<script>
    import colaboradores from '../../../asset/colaboradores.png'
    import FAQ from '../../../components/FAQ.svelte'
  </script>
  
  <div class='flex flex-row h-full'>
    <div class='items-center justify-center w-1/2'>
      <img src={colaboradores} alt="colaboradores" class=' w-3/4' />
    </div>
    <div class='flex flex-col w-1/2 justify-center items-center'>
      <h1 class='text-4xl font-semibold'>Preguntas frecuentes</h1>
        <FAQ />
    </div>
  </div>


