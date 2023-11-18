<script>
  import logoIris from "../asset/Iris.svg";
  import loginIcon from "../asset/login.svg";

  let isDarkMode = false;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark', isDarkMode);
  }
</script>

<div class="navbar fixed z-50 bg-white dark:bg-my_black border-b-2">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
        <li><a href="/" class="normal-case text-xl">Inicio</a></li>
        <li><a href="/registro" class="normal-case text-xl">Registro</a></li>
        <li class="normal-case text-xl">
          Nosotros
          <ul class="p-2 ">
            <li><a href="/nosotros" class="normal-case text-xl">¿Quienes somos?</a></li>
            <li><a href="/contacto" class="normal-case text-xl">Contacto</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost normal-case text-xl">
      <img src={logoIris} alt="" class="w-10">
      IRIS
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 gap-15">
      <li><a href="/" class="normal-case text-lg font-semibold">INICIO</a></li>
      <li><a href="/registro" class="normal-case text-lg font-semibold">REGISTRO</a></li>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <li tabindex="0">
        <details>
          <summary class="normal-case text-lg font-semibold">NOSOTROS</summary>
          <ul class="p-2 w-52 dark:text-black">
            <li><a href="/nosotros" class="normal-case text-xl font-semibold">¿Quienes somos?</a></li>
            <li><a href="/contacto" class="normal-case text-xl font-semibold">Contacto</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div class="navbar-end gap-4">
    <a href="/login">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/></svg>
    </a>
    <label class="swap swap-rotate" for="mode-switch">
  
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" id="mode-switch" class="hidden" on:change={toggleDarkMode} />
      
      <!-- sun icon -->
      <svg class="swap-on w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>svg{fill:#000000}</style><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
      
      <!-- moon icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="swap-off w-8 h-8" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/></svg>
      
    </label>
  </div>
  
</div>


