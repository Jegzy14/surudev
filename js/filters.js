document.addEventListener('DOMContentLoaded', () => {
  const filterBar = document.querySelector('[data-filter-bar]');
  if (!filterBar) return;

  const items = [...document.querySelectorAll('[data-filter-item]')];
  const buttons = [...document.querySelectorAll('[data-filter-button]')];

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filterButton;
      buttons.forEach((btn) => btn.classList.toggle('is-active', btn === button));
      items.forEach((item) => {
        const show = filter === 'all' || item.dataset.filterItem === filter;
        item.style.display = show ? '' : 'none';
      });
    });
  });
});
