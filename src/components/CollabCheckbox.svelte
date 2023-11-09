<script>
    export let collaboratorName;
    export let isChecked;
    
    // crea un evento para recibir la funcion de la pagina
    function handleCheckboxChange() {
      dispatch('checkboxChange', { collaboratorName, isChecked });
    }
</script>

<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">{collaboratorName}</span> 
    <input type="checkbox" class="checkbox" bind:checked={isChecked} on:change={handleCheckBoxChange} />
  </label>
</div>