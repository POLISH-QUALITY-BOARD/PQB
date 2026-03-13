<script>
  import Icon from '@iconify/svelte';
</script>

<section id="kontakt" class="section">
  <h2>Kontakt</h2>

  <p class="section-intro">
    Skontaktuj się z nami! Poniżej znajdziesz wszystkie sposoby dotarcia do nas.
  </p>

  <div class="contact-content">
    <div class="contact-card">
      <div class="contact-icon">📧</div>
      <h3>Email</h3>
      <p><a href="mailto:info@pqb.org.pl">info@pqb.org.pl</a></p>
    </div>

    <div class="contact-card">
      <div class="contact-icon">🌐</div>
      <h3>Strona Internetowa</h3>
      <p>
        <a href="https://pqb.org.pl" target="_blank" rel="noopener noreferrer">pqb.org.pl</a>
      </p>
    </div>

    <div class="contact-card">
      <div class="contact-icon">📍</div>
      <h3>Wirtualne Biuro</h3>
      <p>Bydgoszcz, Polska</p>
    </div>
  </div>

  <div class="social-section">
    <h3>Podążaj za nami</h3>
    <div class="social-links">
      <a
        href="https://www.linkedin.com/company/polish-quality-board-official/"
        target="_blank"
        rel="noopener noreferrer"
        class="social-card"
      >
        <Icon icon="simple-icons:linkedin" width="32" height="32" />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61584071003505"
        target="_blank"
        rel="noopener noreferrer"
        class="social-card"
      >
        <Icon icon="simple-icons:facebook" width="32" height="32" />
        <span>Facebook</span>
      </a>

      <a
        href="https://github.com/POLISH-QUALITY-BOARD/"
        target="_blank"
        rel="noopener noreferrer"
        class="social-card"
      >
        <Icon icon="simple-icons:github" width="32" height="32" />
        <span>GitHub</span>
      </a>

      <a
        href="https://discord.gg/dAPN73QDJ5"
        target="_blank"
        rel="noopener noreferrer"
        class="social-card"
      >
        <Icon icon="simple-icons:discord" width="32" height="32" />
        <span>Discord</span>
      </a>
    </div>
  </div>
</section>
