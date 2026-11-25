const list = window.MASCOTS;
const params = new URLSearchParams(location.search);
const idx = Math.max(0, list.findIndex((m) => m.id === params.get('id')));
const m = list[idx];
const $ = (id) => document.getElementById(id);

/* ------------------------------------------------------------ header + hero */
document.title = `${m.name} · ${m.style}`;
$('name').textContent = m.name;
$('styleChip').textContent = m.style;
$('traitChip').textContent = m.trait;
$('description').textContent = m.description;
$('stage').style.setProperty('--tint', m.tint);
$('heroImg').src = m.front;
$('heroImg').alt = `${m.name}, front view`;
$('turnaround').src = m.turnaround;
$('turnaround').alt = `${m.name} turnaround: eight views from the Figma file`;
const prev = list[(idx + list.length - 1) % list.length], next = list[(idx + 1) % list.length];
$('prev').href = 'mascot.html?id=' + prev.id; $('prev').title = prev.name;
$('next').href = 'mascot.html?id=' + next.id; $('next').title = next.name;

list.forEach((o) => {
  const a = document.createElement('a');
  a.className = 'other'; a.href = 'mascot.html?id=' + o.id;
  if (o.id === m.id) a.setAttribute('aria-current', 'page');
  a.innerHTML = `<img src="${o.front}" alt="" loading="lazy" />${o.name}`;
  $('others').appendChild(a);
});

/* ------------------------------------------------------------ emotion gallery */
$('emotionsCount').textContent = `${m.emotions.length} emotions`;
$('emotionsSub').textContent = `Every emotion from ${m.name}’s board in Figma, only for this style.`;
const grid = $('emoGrid');
m.emotions.forEach((e, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'emo-card'; b.dataset.emotion = e.id;
  b.style.setProperty('--tint', m.tint);
  b.setAttribute('aria-label', `Preview ${e.name}`);
  b.innerHTML =
    `<span class="emo-art"><img src="${e.image}" alt="" loading="lazy" decoding="async" /></span>` +
    `<span class="emo-meta"><span class="emo-name">${e.name}</span><span class="emo-desc">${e.description}</span></span>`;
  b.addEventListener('click', () => openPreview(i, b));
  grid.appendChild(b);
});

/* ------------------------------------------------------------ preview panel */
const dlg = $('preview'), img = $('pvImg');
let cur = -1, lastTrigger = null;
$('pvAvatar').src = m.front;
$('pvMascot').textContent = m.name;
$('pvStyle').textContent = m.style;
dlg.style.setProperty('--tint', m.tint);

const thumbs = m.emotions.map((e, i) => {
  const t = document.createElement('button');
  t.type = 'button'; t.className = 'pv-thumb'; t.setAttribute('role', 'tab');
  t.setAttribute('aria-label', e.name); t.title = e.name;
  t.innerHTML = `<img src="${e.image}" alt="" loading="lazy" />`;
  t.addEventListener('click', () => show(i));
  $('pvStrip').appendChild(t);
  return t;
});

function openPreview(i, trigger) {
  lastTrigger = trigger || null;
  show(i);
  dlg.showModal();
  document.documentElement.classList.add('modal-open');
}
function closePreview() {
  if (!dlg.open) return;
  dlg.close();
  document.documentElement.classList.remove('modal-open');
  history.replaceState(null, '', location.pathname + location.search);
  if (lastTrigger) lastTrigger.focus({ preventScroll: true });
}
function show(i) {
  const n = m.emotions.length;
  i = (i + n) % n;
  const e = m.emotions[i];
  cur = i;
  img.src = e.image;
  img.alt = `${m.name} — ${e.name}`;
  $('pvTitle').textContent = e.name;
  $('pvDesc').textContent = e.description;
  $('pvCount').textContent = `${i + 1} / ${n}`;
  thumbs.forEach((t, k) => { t.setAttribute('aria-selected', k === i ? 'true' : 'false'); t.tabIndex = k === i ? 0 : -1; });
  thumbs[i].scrollIntoView({ block: 'nearest', inline: 'nearest' });
  history.replaceState(null, '', `${location.pathname}${location.search}#emotion=${e.id}`);
}

$('pvPrev').addEventListener('click', () => show(cur - 1));
$('pvNext').addEventListener('click', () => show(cur + 1));
$('pvClose').addEventListener('click', closePreview);
dlg.addEventListener('cancel', (ev) => { ev.preventDefault(); closePreview(); });
dlg.addEventListener('click', (ev) => { if (ev.target === dlg) closePreview(); });
dlg.addEventListener('keydown', (ev) => {
  if (ev.key === 'ArrowRight') { show(cur + 1); ev.preventDefault(); }
  else if (ev.key === 'ArrowLeft') { show(cur - 1); ev.preventDefault(); }
  else if (ev.key === 'Home') { show(0); ev.preventDefault(); }
  else if (ev.key === 'End') { show(m.emotions.length - 1); ev.preventDefault(); }
});
// swipe between emotions on touch screens
(() => {
  let x0 = null;
  $('pvStage').addEventListener('pointerdown', (ev) => { if (ev.pointerType !== 'mouse') x0 = ev.clientX; });
  $('pvStage').addEventListener('pointerup', (ev) => {
    if (x0 == null) return;
    const dx = ev.clientX - x0;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();

// deep link: mascot.html?id=03#emotion=03-hi
const deep = location.hash.match(/emotion=([\w-]+)/);
if (deep) {
  const di = m.emotions.findIndex((e) => e.id === deep[1]);
  if (di >= 0) openPreview(di, grid.children[di]);
}

/* ------------------------------------------------------------ misc */
document.addEventListener('keydown', (e) => {
  if (dlg.open || e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'button') return;
  if (e.key === 'ArrowLeft') location.href = 'mascot.html?id=' + prev.id;
  else if (e.key === 'ArrowRight') location.href = 'mascot.html?id=' + next.id;
});
const bar = document.querySelector('.topbar');
window.addEventListener('scroll', () => bar.classList.toggle('scrolled', window.scrollY > 4), { passive: true });
