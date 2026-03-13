<script lang="ts">
  import { resolve } from '$app/paths';

  let menuOpen = $state(false);
  let dropdownOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
    dropdownOpen = false;
  }

  function handleDropdownClick(e: MouseEvent) {
    e.preventDefault();
    if (window.innerWidth <= 768) {
      dropdownOpen = !dropdownOpen;
    }
  }

  function handleOutsideClick(e: MouseEvent) {
    if (!(e.target as Element)?.closest('.navbar')) {
      closeMenu();
    }
  }
</script>

<svelte:window onclick={handleOutsideClick} />

<nav class="navbar">
  <div class="container">
    <a href={resolve('/')} class="nav-brand">
      <img src="images/PQB-logo.png" alt="PQB Logo" class="logo" />
      <span class="org-name">Polish Quality Board</span>
    </a>
    <button
      class="hamburger"
      class:active={menuOpen}
      aria-label="Toggle navigation menu"
      onclick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-menu" class:active={menuOpen}>
      <li class="nav-item dropdown" class:active={dropdownOpen}>
        <a href="#onas" class="nav-link" onclick={handleDropdownClick}>O nas</a>
        <ul class="dropdown-menu">
          <li><a href="#kim-jestesmy" onclick={closeMenu}>Kim jesteśmy, co robimy</a></li>
          <li><a href="#sklad-osobowy" onclick={closeMenu}>Skład osobowy zarządu</a></li>
          <li><a href="#statut" onclick={closeMenu}>Statut</a></li>
          <li><a href="#wizja-misja" onclick={closeMenu}>Wizja, Misja</a></li>
        </ul>
      </li>
      <!-- <li class="nav-item dropdown">
        <a href="#certyfikacja" class="nav-link">Certyfikacja ISTQB</a>
        <ul class="dropdown-menu">
          <li><a href="#materialy-istqb">Materiały ISTQB</a></li>
          <li><a href="#scr">SCR</a></li>
        </ul>
      </li> -->
      <li class="nav-item">
        <a href="#certyfikacja" class="nav-link" onclick={closeMenu}>Certyfikacja ISTQB</a>
      </li>
      <li class="nav-item">
        <a href="#dolacz" class="nav-link" onclick={closeMenu}>Dołącz do nas</a>
      </li>
      <li class="nav-item">
        <a href="#kontakt" class="nav-link" onclick={closeMenu}>Kontakt</a>
      </li>
    </ul>
  </div>
</nav>
