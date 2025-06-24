document.addEventListener('DOMContentLoaded', () => {
  const sections = ['Главная', 'Мир Fallout', 'Особенности', 'Скриншоты', 'Контакты', 'Прохождение'];
  const buttons = document.querySelectorAll('.nav-btn');
  const sectionElements = document.querySelectorAll('.section');

  function showSection(section) {
    sectionElements.forEach(el => el.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
    buttons.forEach(btn => {
      btn.classList.toggle('bg-green-900/30', btn.dataset.section === section);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      window.location.hash = section;
      showSection(section);
    });
  });

  const hash = window.location.hash.replace('#', '');
  showSection(sections.includes(hash) ? hash : 'Главная');

  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.replace('#', '');
    if (sections.includes(newHash)) showSection(newHash);
  });
});
