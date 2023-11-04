<script>
  import OpenDropdown from '../asset/OpenDropdown.png';
</script>

 <div class="dropdown border border-black rounded-xl gradient-header">
  <label tabindex="-1" class="btn m-1">
    <slot></slot>
    <img src={OpenDropdown} alt="Desplegar" class="h-9" />
  </label>
  <ul tabindex="-1" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-5">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
