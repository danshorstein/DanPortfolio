const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.project-card');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.hidden = !matches;
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
