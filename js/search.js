document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('[data-search-input]');
  if (!searchInput) return;

  const cards = Array.from(document.querySelectorAll('[data-search-item]'));
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
});
