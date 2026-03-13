<script>
  import Icon from '@iconify/svelte';
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-section footer-main">
        <div class="footer-logo">
          <img src="images/PQB-logo.png" alt="PQB Logo" class="logo" />
          <span class="org-name">Polish Quality Board</span>
        </div>
        <p class="footer-description">
          Polish Quality Board - jest organizacją non-profit zajmującą się promocją testowania
          oprogramowania i rozwojem osób zainteresowanych jakością oprogramowania w Polsce.
        </p>
      </div>
      <div class="footer-section">
        <h4 class="footer-title">Nawigacja</h4>
        <ul class="footer-list">
          <li><a href="#onas">O nas</a></li>
          <li><a href="#certyfikacja">Certyfikacja ISTQB</a></li>
          <li><a href="#dolacz">Dołącz do nas</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4 class="footer-title">Dokumenty</h4>
        <ul class="footer-list">
          <li>
            <a
              href="https://pqb.org.pl/documents/Statut_PQB.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:file-document-outline" width="16" height="16" />
              Statut PQB (PL)
            </a>
          </li>
          <li>
            <a
              href="https://pqb.org.pl/documents/Statut_PQB_en-US.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:file-document-outline" width="16" height="16" />
              Statutes of PQB (EN)
            </a>
          </li>
          <li>
            <a href="https://www.istqb.org/" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:open-in-new" width="16" height="16" />
              ISTQB International
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copyright">
        &copy; 2026 Polish Quality Board. Wszelkie prawa zastrzeżone.
        <span class="footer-meta"
          ><span>KRS: 0001200368</span><span class="meta-separator">•</span><span
            >NIP: 5543040791</span
          ><span class="meta-separator">•</span><span>REGON: 543007740</span><span
            class="meta-separator">•</span
          ><a
            href="https://docs.github.com/en/site-policy/privacy-policies"
            target="_blank"
            rel="noopener noreferrer">Polityka prywatności</a
          ></span
        >
      </p>
    </div>
  </div>
</footer>
