<script>
  import OpenDropdown from '../asset/OpenDropdown.png';
  export let collaborators = [];
</script>

 <div class="dropdown border border-black rounded-xl gradient-header m-0.5">
  <label tabindex="-1" class="btn m-1">
    <slot></slot>
    <img src={OpenDropdown} alt="Desplegar" class="h-9" />
  </label>
  <ul tabindex="-1" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-5">
    {#each collaborators as collaborator}
      <li>{collaborator.name}</li>
    {/each}
  </ul>
</div>
