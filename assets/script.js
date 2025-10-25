fetch('texte.json')
  .then(response => response.json())
  .then(data => {
    // Hero Section
    document.getElementById('hero-headline').textContent = data.hero.headline;
    document.getElementById('hero-subline').textContent = data.hero.subline;
    document.getElementById('hero-button').textContent = data.hero.button;

    // Über mich
    document.getElementById('ueber-mich-title').textContent = data.ueberMich.title;
    document.getElementById('ueber-mich-text-1').textContent = data.ueberMich.text1;
    document.getElementById('ueber-mich-text-2').textContent = data.ueberMich.text2;
    document.getElementById('ueber-mich-text-3').textContent = data.ueberMich.text3;
    document.getElementById('ueber-mich-text-4').textContent = data.ueberMich.text4;
    document.getElementById('ueber-mich-text-5').textContent = data.ueberMich.text5;

    // Titel setzen
    document.getElementById('projekte-title').textContent = data.projekte.title;

    // Cards erzeugen
    const cardsContainer = document.getElementById('projekt-cards');
    data.projekte.liste.forEach(projekt => {
      const card = document.createElement('div');
      card.className = 'col-md-6';
      card.innerHTML = `
        <div class="card shadow-sm h-100" style="background-color: #2a2d34; color: #f5f5f5;">
          <div class="card-body">
            <h5 class="card-title">${projekt.titel}</h5>
            <p class="card-text">${projekt.beschreibung}</p>
            <div class="mt-2">
              ${projekt.technologien.map(tech => `<span class="badge bg-primary me-1">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
      cardsContainer.appendChild(card);
    });

    // Links & Lebenslauf
    document.getElementById('links-title').textContent = data.links.title;
    document.getElementById('links-text').textContent = data.links.text;
    document.getElementById('links-hinweis').textContent = data.links.hinweis;

    const linksList = document.getElementById('links-list');
        data.links.links.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`;
        linksList.appendChild(li);
    });

    // Kontakt
    document.getElementById('kontakt-title').textContent = data.kontakt.title;
    document.getElementById('kontakt-text').textContent = data.kontakt.text;
    document.getElementById('kontakt-button').textContent = data.kontakt.button;

  });