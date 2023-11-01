<script>
  import OpenDropdown from '../asset/OpenDropdown.png';
  // import { onMount } from 'svelte';

  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  // onMount(() => {
  //   function closeDropdown(event) {
  //     if (isOpen && event.target.closest('.dropdown-button') === null) {
  //       isOpen = false;
  //     }
  //   }

  //   document.addEventListener('click', closeDropdown);

  //   return () => {
  //     document.removeEventListener('click', closeDropdown);
  //   };
  // });
</script>

<div class="relative inline-block text-left ">
  <button
    class="border border-black p-2 rounded-2xl focus:outline-none font-semibold px-5 dropdown-button flex flex-row justify-between items-center gap-5 h-11"
    on:click={toggleDropdown}
  >
    <slot></slot>
    <img src={OpenDropdown} alt="Abrir desplegable" class='h-5' />
  </button>

  {#if isOpen}
    <div class="origin-top-right absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
      <ul>
        <li class="p-2 hover:bg-blue-100">Option 1</li>
        <li class="p-2 hover:bg-blue-100">Option 2</li>
        <li class="p-2 hover:bg-blue-100">Option 3</li>
      </ul>
    </div>
  {/if}
</div>
