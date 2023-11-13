<script>
  export let collaboratorName;
  export let selectedCollaborator = '';
</script>

<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">{collaboratorName}</span> 
    <input type="radio" name="radio-10" class="radio" bind:group={selectedCollaborator} value={collaboratorName} />
  </label>
</div>
