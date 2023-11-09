<!-- layout: layouts/clientLayout.svelte -->
<script>
    import colaboradores from '../../../asset/colaboradores.png'
  </script>
  
  <div class="flex flex-col gap-5 mt-40 mb-36 justify-center">
    <h1 class="text-4xl font-semibold ml-10 text-black">Bienvenid@ name</h1>
  <div class='flex  justify-between items-center p-20'>
    <div class='items-center justify-center w-1/2 space'>
      <img src={colaboradores} alt="colaboradores" class=' w-3/4' />
    </div>
    <div class='flex flex-col w-1/2 justify-center items-center'>
      <h1 class='text-4xl font-semibold'>Preguntas frecuentes</h1>

      <div class="collapse collapse-arrow bg-white border border-black">
        <input type="radio" name="my-accordion-1" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
          ¿Cómo agregar servicios?
        </div>
        <div class="collapse-content"> 
          <p>hello</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-black">
        <input type="radio" name="my-accordion-1" /> 
        <div class="collapse-title text-xl font-medium">
          ¿Como agregar colaboradores?
        </div>
        <div class="collapse-content"> 
          <p>hello</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-black">
        <input type="radio" name="my-accordion-1" /> 
        <div class="collapse-title text-xl font-medium">
          ¿Cómo se agendan mis clientes?
        </div>
        <div class="collapse-content"> 
          <p>hello</p>
        </div>
      </div>
    </div>
  </div>
</div>

