<script>
  import { base } from '$app/paths';
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section id="sylabusy" class="section">
  <h2>Lokalizowane dokumenty</h2>
  <p>Poniżej znajdziesz sylabusy, pytania, odpowiedzi i wytyczne do akredytacji:</p>

  <!-- FL 4.0.1 -->
  <div class="syllabus-group">
    <h3>Certyfikowany Tester - Poziom Podstawowy v4.0.1</h3>

    <div class="doc-item">
      <a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-sylabus.pdf" download class="doc-link">
        📄 Sylabus
      </a>
    </div>

    <div class="questions_answers_set">
      <div class="qst_asw_set">
        <a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-A-pytania-v1.7.pdf" download
          >📄 Pytania - zestaw A</a
        >
        <a
          href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-A-odpowiedzi-v1.7.pdf"
          download>📄 Odpowiedzi - zestaw A</a
        >
      </div>
      <div class="qst_asw_set">
        <a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-B-pytania-v1.7.pdf" download
          >📄 Pytania - zestaw B</a
        >
        <a
          href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-B-odpowiedzi-v1.7.pdf"
          download>📄 Odpowiedzi - zestaw B</a
        >
      </div>
      <div class="qst_asw_set">
        <a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-C-pytania-v1.6.pdf" download
          >📄 Pytania - zestaw C</a
        >
        <a
          href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-C-odpowiedzi-v1.6.pdf"
          download>📄 Odpowiedzi - zestaw C</a
        >
      </div>
      <div class="qst_asw_set">
        <a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-D-pytania-v1.5.pdf" download
          >📄 Pytania - zestaw D</a
        >
        <a
          href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-D-odpowiedzi-v1.5.pdf"
          download>📄 Odpowiedzi - zestaw D</a
        >
      </div>
    </div>

    <div class="guidelines">
      <a
        href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-wytyczne-do-akredytacji-v0.3.pdf"
        download>📋 Wytyczne do akredytacji</a
      >
    </div>
  </div>

  <!-- TA 4.0 -->
  <div class="syllabus-group">
    <h3>Certyfikowany Tester - Poziom Zaawansowany - Analityk Testów v4.0</h3>

    <div class="doc-item">
      <a href="{base}/documents/syllabi/ta-4.0/TA-4.0-PL-sylabus.pdf" download class="doc-link">
        📄 Sylabus
      </a>
    </div>

    <div class="questions_answers_set">
      <div class="qst_asw_set">
        <a href="{base}/documents/syllabi/ta-4.0/TA-4.0-PL-pytania.pdf" download>📄 Pytania</a>
        <a href="{base}/documents/syllabi/ta-4.0/TA-4.0-PL-odpowiedzi.pdf" download>📄 Odpowiedzi</a>
      </div>
    </div>
  </div>

  <!-- TM 3.0 -->
  <div class="syllabus-group">
    <h3>Certyfikowany Tester - Poziom Zaawansowany - Zarządzanie Testami v3.0</h3>

    <div class="doc-item">
      <a href="{base}/documents/syllabi/tm-3.0/TM-3.0-PL-sylabus.pdf" download class="doc-link">
        📄 Sylabus
      </a>
    </div>

    <div class="questions_answers_set">
      <div class="qst_asw_set">
        <a href="{base}/documents/syllabi/tm-3.0/TM-3.0-PL-pytania-v1.3.3.pdf" download>📄 Pytania</a>
        <a href="{base}/documents/syllabi/tm-3.0/TM-3.0-PL-odpowiedzi-v1.3.3.pdf" download
          >📄 Odpowiedzi</a
        >
      </div>
    </div>

    <div class="guidelines">
      <a
        href="{base}/documents/syllabi/tm-3.0/TM-3.0-PL-wytyczne-do-akredytacji-v1.0.pdf"
        download>📋 Wytyczne do akredytacji</a
      >
    </div>
  </div>
</section>

<style>
  .syllabus-group {
    margin-bottom: 1rem;
  }

  .syllabus-group h3 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: var(--text-primary);
  }

  .doc-item {
    margin-bottom: 1.5rem;
  }

  .doc-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--bg-secondary);
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .doc-link:hover {
    background-color: var(--bg-tertiary);
  }

  .questions_answers_set {
    margin-bottom: 1rem;
    margin-left: 1rem;
  }

  .qst_asw_set {
    display: flex;
    gap: 2rem;
    margin-bottom: 0.75rem;
  }

  .qst_asw_set a {
    text-decoration: none;
    transition: color 0.2s;
  }

  .qst_asw_set a:hover {
    text-decoration: underline;
  }
/* 
  .guidelines {
    padding-top: 1.5rem;
  } */

  .guidelines a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--bg-accent);
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .guidelines a:hover {
    background-color: var(--bg-accent-hover);
  }
</style>
