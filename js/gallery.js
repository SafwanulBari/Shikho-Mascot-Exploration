const grid = document.getElementById('grid');
const arrow = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

window.MASCOTS.forEach((m) => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = 'mascot.html?id=' + m.id;
  a.setAttribute('aria-label', `${m.name}, ${m.style}. ${m.emotions.length} emotions. Open details`);
  a.innerHTML =
    `<div class="card-stage" style="--tint:${m.tint}">` +
      `<img class="card-img" src="${m.front}" alt="${m.name}, front view" decoding="async" />` +
      `<span class="card-num">${m.id}</span><span class="card-tag">${m.emotions.length} emotions</span>` +
    `</div>` +
    `<div class="card-body"><div><h2>${m.name}</h2><p class="card-style">${m.style}</p><p>${m.description}</p></div><span class="card-cta">${arrow}</span></div>`;
  grid.appendChild(a);

  // Hover: the mascot jumps. Runs to completion even if the pointer leaves mid-air.
  const img = a.querySelector('.card-img');
  a.addEventListener('pointerenter', (ev) => { if (ev.pointerType === 'mouse') img.classList.add('jump'); });
  img.addEventListener('animationend', () => img.classList.remove('jump'));
});

const bar = document.querySelector('.topbar');
window.addEventListener('scroll', () => bar.classList.toggle('scrolled', window.scrollY > 4), { passive: true });
