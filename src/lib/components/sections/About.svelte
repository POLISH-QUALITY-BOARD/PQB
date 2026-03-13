<script>
  import Icon from '@iconify/svelte';
</script>

<section id="onas" class="section">
  <h2>O nas</h2>

  <article id="kim-jestesmy">
    <h3>Kim jesteśmy i co robimy jako rada krajowa</h3>
    <p>
      Polska Rada Jakości (PQB - Polish Quality Board) jest krajową organizacją zajmującą się
      promocją testowania oprogramowania i rozwojem osób zainteresowanych jakością oprogramowania w
      Polsce.
    </p>
  </article>

  <article id="sklad-osobowy">
    <h3>Skład osobowy zarządu i komisji rewizyjnej</h3>
    <p>
      Polish Quality Board kierowana jest przez doświadczonych profesjonalistów z branży testowania
      oprogramowania. Nasz zarząd i członkowie komisji rewizyjnej reprezentują różne sektory
      przemysłu - IT, od startupów po duże korporacje międzynarodowe.
    </p>
    <p>
      Każdy z naszych członków wnosi unikalną perspektywę i doświadczenie, co pozwala nam na
      holistyczne podejście do wszystkich aspektów testowania oprogramowania i zapewniania jakości.
    </p>

    <div class="board-members">
      <h4>Zarząd</h4>
      <div class="members-grid">
        <div class="member-card">
          <img src="images/people/Seba.jpg" alt="Sebastian Małyska" class="member-image" />
          <div class="member-name">Sebastian Małyska</div>
          <div class="member-role">Prezes</div>
          <a
            href="https://www.linkedin.com/in/malyska/"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-link"
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class="member-card">
          <img src="images/people/Adam.jpg" alt="Adam Roman" class="member-image" />
          <div class="member-name">Adam Roman</div>
          <div class="member-role">Wiceprezes</div>
          <a
            href="https://www.linkedin.com/in/adam-roman-3799723/"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-link"
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class="member-card">
          <img src="images/people/Ania.jpg" alt="Anna Miazek-Bereźnicka" class="member-image" />
          <div class="member-name">Anna Miazek-Bereźnicka</div>
          <div class="member-role">Wiceprezes</div>
          <a
            href="https://www.linkedin.com/in/annamiazek/"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-link"
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class="member-card">
          <img src="images/people/Wojtek.jpg" alt="Wojciech Jaszcz" class="member-image" />
          <div class="member-name">Wojciech Jaszcz</div>
          <div class="member-role">Wiceprezes</div>
          <a
            href="https://www.linkedin.com/in/wojtek-jaszcz-5111421/"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-link"
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>
      </div>

      <h4>Komisja Rewizyjna</h4>
      <div class="members-grid">
        <div class="member-card">
          <img src="images/people/Jan.jpg" alt="Jan Sabak" class="member-image" />
          <div class="member-name">Jan Sabak</div>
          <div class="member-role">Członek</div>
          <a
            href="https://www.linkedin.com/in/jsabak/"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-link"
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class="member-card">
          <img src="images/people/Asia.jpg" alt="Joanna Gajewska" class="member-image" />
          <div class="member-name">Joanna Gajewska</div>
          <div class="member-role">Członek</div>
          <a
            href="https://www.linkedin.com/in/joanna-gajewska-829623/"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-link"
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class="member-card">
          <img src="images/people/Monika.jpg" alt="Monika Petri-Starego" class="member-image" />
          <div class="member-name">Monika Petri-Starego</div>
          <div class="member-role">Członek</div>
          <a
            href="https://www.linkedin.com/in/monika-petri-starego/"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-link"
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>
      </div>
    </div>
  </article>

  <article id="statut">
    <h3>Statut</h3>
    <p class="section-description">
      Nasze dokumenty statutowe dostępne w dwóch wersjach językowych:
    </p>
    <div class="statut-container">
      <div class="statut-card">
        <div class="language-badge">🇵🇱 Polski</div>
        <h4>Statut PQB</h4>
        <p>Wersja polska statutu Polish Quality Board.</p>
        <a
          // eslint-disable-next-line svelte/no-navigation-without-resolve
          href="documents/Statut_PQB.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          data-testid="download-statut-pl"
          download
        >
          📄 Pobierz statut PQB
        </a>
      </div>
      <div class="statut-card">
        <div class="language-badge">🇬🇧 English</div>
        <h4>Constitution of PQB</h4>
        <p>English version of the Statutes of the Polish Quality Board.</p>
        <a
          // eslint-disable-next-line svelte/no-navigation-without-resolve
          href="documents/Statut_PQB_en-US.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          data-testid="download-statut-en"
          download
        >
          📄 Download Statutes of PQB
        </a>
      </div>
    </div>
  </article>

  <article id="wizja-misja">
    <h3>Wartości, misja i wizja / Values, Mission and Vision</h3>
    <p class="article-intro">
      To fundament naszej organizacji - to, co nas definiuje i określa naszą drogę / This is the
      foundation of our organization - what defines us and determines our path
    </p>

    <div class="values-section">
      <div class="values-header">
        <h4>Wartości / Values</h4>
        <p class="section-description">Co jest dla nas najważniejsze / What matters most to us</p>
      </div>
      <ul class="values-list">
        <li>Nowoczesność / Modernity</li>
        <li>Zaangażowanie / Commitment</li>
        <li>Inkluzywność / Inclusivity</li>
        <li>Transparentność działań / Transparency</li>
        <li>Etyka / Ethics</li>
      </ul>
    </div>

    <div class="vision-mission">
      <div class="box mission-box">
        <h4>Misja / Mission</h4>
        <p class="section-description">Po co istniejemy / Why we exist</p>
        <ul class="mission-list">
          <li>
            Lokalizować, współtworzyć standardy i certyfikację w obszarach dot. jakości w IT /
            Localize, co-create standards and certification in IT quality areas
          </li>
          <li>
            Edukować, promować jakość, prowadzić działalność ekspercką w tym zakresie / Educate,
            promote quality, conduct expert activities in this field
          </li>
          <li>
            Nawiązywać i rozwijać międzynarodowe relacje z innymi organizacjami i osobami w celu
            promocji polskiego IT / Build and develop international relations with organizations and
            individuals to promote Polish IT
          </li>
          <li>
            Udostępniać i współpracować nad technologiami, szczególnie tymi, które niosą jakościowe
            ryzyka / Share and collaborate on technologies, especially those carrying quality risks
          </li>
        </ul>
      </div>
      <div class="box vision-box">
        <h4>Wizja / Vision</h4>
        <p class="section-description">Co chcemy osiągnąć / What we want to achieve</p>
        <ul class="vision-list">
          <li>
            Zdecentralizowana zdrowa polska organizacja wspierająca twórcze i aktywne jednostki / A
            decentralized healthy Polish organization supporting creative and active individuals
          </li>
          <li>Etyka nie na papierze a w działaniu / Ethics not on paper but in action</li>
          <li>Proste procedury i zwinna organizacja / Simple procedures and agile organization</li>
          <li>
            Certyfikacja ISO w obszarach, którymi się zajmujemy / ISO certified in the areas we
            operate
          </li>
          <li>
            PQB jako synonim rzetelnej, merytorycznej, profesjonalnej, nowoczesnej wiedzy w zakresie
            jakości w IT / PQB as a synonym for reliable, substantive, professional, modern
            knowledge in IT quality
          </li>
        </ul>
      </div>
    </div>
  </article>
</section>
