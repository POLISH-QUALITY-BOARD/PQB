<script lang="ts">
  import { resolve } from '$app/paths';

  let menuOpen = $state(false);
  let dropdownOpen = $state(false);

  let nav: HTMLElement;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
    dropdownOpen = false;
  }

  function toggleDropdown(e: MouseEvent) {
    e.preventDefault();
    if (window.innerWidth < 768) dropdownOpen = !dropdownOpen;
  }

  function handleOutsideClick(e: MouseEvent) {
    if (!nav.contains(e.target as Node)) closeMenu();
  }
</script>

<svelte:window onclick={handleOutsideClick} />

<nav class="bg-white shadow-md sticky top-0 z-100" bind:this={nav}>
  <div class="max-w-300 mx-auto flex justify-between items-center px-5 py-4 flex-wrap relative">
    <a
      href={resolve('/')}
      class="flex items-center gap-4 font-bold text-xl text-blue-900 no-underline"
    >
      <img src="images/PQB-logo.png" alt="PQB Logo" class="h-10 md:h-12.5 w-auto" />
      <span class="md:hidden inline text-sm">Polish Quality Board</span>
    </a>

    <button
      class="flex flex-col md:hidden bg-transparent border-none cursor-pointer gap-1 p-3 -m-3"
      aria-label="Toggle navigation menu"
      onclick={toggleMenu}
    >
      <span
        class={`block w-6.25 h-0.75 bg-blue-600 rounded-sm transition-all duration-300${menuOpen ? ' transform-[rotate(45deg)_translate(5px,6px)]' : ''}`}
      ></span>
      <span
        class={`block w-6.25 h-0.75 bg-blue-600 rounded-sm transition-all duration-300${menuOpen ? ' opacity-0' : ''}`}
      ></span>
      <span
        class={`block w-6.25 h-0.75 bg-blue-600 rounded-sm transition-all duration-300${menuOpen ? ' transform-[rotate(-45deg)_translate(5px,-6px)]' : ''}`}
      ></span>
    </button>

    <ul
      class={`${menuOpen ? 'flex' : 'hidden'} md:flex list-none flex-col md:flex-row md:gap-8 items-stretch md:items-center gap-0 absolute md:static top-full left-0 right-0 bg-white md:bg-transparent w-full md:w-auto shadow-md md:shadow-none z-100 md:z-auto m-0 p-0`}
    >
      <li
        class="relative group w-full md:w-auto border-b md:border-b-0 border-gray-200 md:after:content-[''] md:after:absolute md:after:top-full md:after:left-0 md:after:right-0 md:after:h-3.75"
      >
        <a
          href="#onas"
          class="block text-gray-800 font-medium px-4 py-4 md:py-3 md:rounded transition-all duration-300 hover:bg-gray-100 hover:text-orange-500 no-underline"
          onclick={toggleDropdown}>O nas</a
        >
        <ul
          class={`${dropdownOpen ? 'block' : 'hidden'} md:block md:invisible md:opacity-0 md:group-hover:visible md:group-hover:opacity-100 md:transition-all md:duration-300 md:absolute md:top-full md:left-0 bg-gray-50 md:bg-white md:shadow-md md:rounded md:py-2 md:min-w-62.5 z-1000 list-none m-0 p-0`}
        >
          <li>
            <a
              href="#kim-jestesmy"
              class="block px-6 py-3 text-gray-800 transition-all duration-300 hover:bg-gray-100 hover:pl-8 no-underline"
              onclick={closeMenu}>Kim jesteśmy, co robimy</a
            >
          </li>
          <li>
            <a
              href="#sklad-osobowy"
              class="block px-6 py-3 text-gray-800 transition-all duration-300 hover:bg-gray-100 hover:pl-8 no-underline"
              onclick={closeMenu}>Skład osobowy zarządu</a
            >
          </li>
          <li>
            <a
              href="#statut"
              class="block px-6 py-3 text-gray-800 transition-all duration-300 hover:bg-gray-100 hover:pl-8 no-underline"
              onclick={closeMenu}>Statut</a
            >
          </li>
          <li>
            <a
              href="#wizja-misja"
              class="block px-6 py-3 text-gray-800 transition-all duration-300 hover:bg-gray-100 hover:pl-8 no-underline"
              onclick={closeMenu}>Wizja, Misja</a
            >
          </li>
        </ul>
      </li>

      <li class="w-full md:w-auto border-b md:border-b-0 border-gray-200">
        <a
          href="#portfolio"
          class="block text-gray-800 font-medium px-4 py-4 md:py-3 md:rounded transition-all duration-300 hover:bg-gray-100 hover:text-orange-500 no-underline"
          onclick={closeMenu}>Portfolio ISTQB</a
        >
      </li>
      <li class="w-full md:w-auto border-b md:border-b-0 border-gray-200">
        <a
          href="#sylabusy"
          class="block text-gray-800 font-medium px-4 py-4 md:py-3 md:rounded transition-all duration-300 hover:bg-gray-100 hover:text-orange-500 no-underline"
          onclick={closeMenu}>Sylabusy</a
        >
      </li>
      <li class="w-full md:w-auto border-b md:border-b-0 border-gray-200">
        <a
          href="#dolacz"
          class="block text-gray-800 font-medium px-4 py-4 md:py-3 md:rounded transition-all duration-300 hover:bg-gray-100 hover:text-orange-500 no-underline"
          onclick={closeMenu}>Dołącz do nas</a
        >
      </li>
      <li class="w-full md:w-auto">
        <a
          href="#kontakt"
          class="block text-gray-800 font-medium px-4 py-4 md:py-3 md:rounded transition-all duration-300 hover:bg-gray-100 hover:text-orange-500 no-underline"
          onclick={closeMenu}>Kontakt</a
        >
      </li>
    </ul>
  </div>
</nav>
