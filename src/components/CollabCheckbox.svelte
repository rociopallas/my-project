<script>
  export let collaboratorName;
  export let selectedCollaborator = 'Colaborador 1';
</script>

<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">{collaboratorName}</span> 
    <input 
    type="radio" 
    name="radio-10" 
    class="radio" 
    bind:group={selectedCollaborator} 
    value={collaboratorName} 
    on:change={() => dispatch('selected', collaboratorName)}/>
  </label>
</div>
