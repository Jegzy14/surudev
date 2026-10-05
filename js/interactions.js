document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      item.classList.toggle('is-open');
      const expanded = item.classList.contains('is-open');
      trigger.setAttribute('aria-expanded', String(expanded));
    });
  });

  const counters = document.querySelectorAll('[data-counter]');
  counters.forEach((counter) => {
    const target = Number(counter.dataset.counter);
    const suffix = counter.dataset.suffix || '';
    let count = 0;
    const step = target / 80;
    const update = () => {
      count += step;
      if (count >= target) {
        counter.textContent = `${target}${suffix}`;
        return;
      }
      counter.textContent = `${Math.round(count)}${suffix}`;
      requestAnimationFrame(update);
    };
    update();
  });
});
