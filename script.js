const remoteAssets = {
  'ig-hero.webp': 'public/assets/barbalho/instagram-hero-reframed.png',
  'hero-bg.webp': 'public/assets/barbalho/hero-background.png',
  'hero-person.webp': 'public/assets/barbalho/hero-person.png',
  'ig-01.webp': 'public/assets/barbalho/instagram-01.jpg',
  'ig-02.webp': 'public/assets/barbalho/instagram-02.webp',
  'ig-03.webp': 'public/assets/barbalho/instagram-03.webp',
  'ig-04.webp': 'public/assets/barbalho/instagram-04.jpg',
  'ig-05.webp': 'public/assets/barbalho/instagram-05.webp',
  'ig-06.webp': 'public/assets/barbalho/instagram-06.webp',
};
const asset = (name) => remoteAssets[name] || `public/assets/barbalho/${name}`;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelector('.whatsapp')?.remove();

const heroSlides = [
  { image: 'ig-hero.webp', kicker: 'MAIS QUE OBRIGAÇÃO.', title: 'Contabilidade que trabalha a favor do seu negócio.', copy: 'Experiência técnica e visão consultiva para transformar números em decisões seguras.', href: '#services' },
];

const activities = [
  ['instagram-hero.jpg', 'Consultoria contábil e tributária', 'Planejamos o enquadramento ideal, analisamos o Fator R e orientamos decisões que impactam o lucro.'],
  ['ig-03.webp', 'Gestão financeira e estratégia', 'Ajudamos empresários a entender seus números e tomar decisões com base em dados reais.'],
  ['ig-02.webp', 'Portal do cliente', 'Documentos, pendências e retornos organizados em um só lugar para sua empresa.'],
  ['ig-04.webp', 'Abertura e legalização', 'Cuidamos da abertura, alteração e legalização para seu negócio nascer seguro e regularizado.'],
  ['ig-05.webp', 'Planejamento tributário', 'Estudo preventivo para reduzir a carga tributária dentro da lei e evitar surpresas.'],
  ['ig-06.webp', 'Parcelamentos e regularização', 'Atuamos na negociação e parcelamento de débitos fiscais com segurança e clareza.'],
  ['ig-03.webp', 'Consultoria para saúde', 'Orientação contábil e financeira para clínicas, consultórios e empresas do setor da saúde.'],
  ['instagram-01.jpg', 'Indicadores e relatórios', 'Informação organizada para acompanhar compras, vendas, margem e alíquotas efetivas.'],
];

const products = [
  ['growth-chart', 'Patrimônio em evolução', 'Organização, visão e decisões que fazem sua empresa crescer com mais previsibilidade.'],
];

const content = [
  ['blue', 'REFORMA TRIBUTÁRIA', 'Simples Puro ou Regime Híbrido?', 'A escolha precisa considerar custos, créditos, margem e competitividade.', 'ig-04.webp'],
  ['navy', 'GESTÃO', 'Faturar mais não significa lucrar mais.', 'Acompanhe DRE, fluxo de caixa e indicadores do negócio.', 'ig-03.webp'],
  ['yellow', 'ORGANIZAÇÃO', 'Quem se antecipa, cresce com segurança.', 'Documentação correta e processos organizados fazem diferença.', 'ig-02.webp'],
];

const heroSlidesEl = document.querySelector('#hero-slides');
const activityTrack = document.querySelector('#activity-track');
const productTrack = document.querySelector('#product-track');
const contentGrid = document.querySelector('#content-grid');

heroSlidesEl.innerHTML = heroSlides.map((slide, index) => {
  const media = slide.image === 'ig-hero.webp'
    ? `<div class="hero-media hero-layered"><img class="hero-background" src="${asset('hero-bg.webp')}" alt="" aria-hidden="true" /><img class="hero-person" src="${asset('hero-person.webp')}" alt="${slide.title}" /></div>`
    : `<div class="hero-media"><img src="${asset(slide.image)}" alt="${slide.title}" /></div>`;
  return `
  <article class="hero-slide${index === 0 ? ' active' : ''}" data-slide="${index}">
    <div class="hero-copy"><p class="hero-kicker">${slide.kicker}</p><h1>${slide.title}</h1><p>${slide.copy}</p><a class="hero-cta" href="${slide.href}">SAIBA MAIS</a></div>
    ${media}
  </article>`;
}).join('');

const aboutFrame = document.querySelector('.counter-image');
if (aboutFrame) {
  aboutFrame.classList.add('layered-portrait');
  aboutFrame.innerHTML = `<img class="portrait-background" src="${asset('hero-bg.webp')}" alt="" aria-hidden="true" /><img class="about-person" src="${asset('hero-person.webp')}" alt="Fabio Barbalho em retrato profissional no escritório" />`;
}

const portraitCard = document.querySelector('.counter-image');
if (portraitCard && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  portraitCard.addEventListener('pointermove', (event) => {
    const bounds = portraitCard.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    portraitCard.style.setProperty('--photo-x', `${Math.max(0, Math.min(1, x)) * 100}%`);
    portraitCard.style.setProperty('--photo-y', `${Math.max(0, Math.min(1, y)) * 100}%`);
    portraitCard.style.setProperty('--photo-rx', `${(0.5 - y) * 8}deg`);
    portraitCard.style.setProperty('--photo-ry', `${(x - 0.5) * 10}deg`);
    portraitCard.style.setProperty('--photo-shift-x', `${(0.5 - x) * 12}px`);
    portraitCard.style.setProperty('--photo-shift-y', `${(0.5 - y) * 12}px`);
  });
  portraitCard.addEventListener('pointerleave', () => {
    portraitCard.style.setProperty('--photo-x', '50%');
    portraitCard.style.setProperty('--photo-y', '50%');
    portraitCard.style.setProperty('--photo-rx', '0deg');
    portraitCard.style.setProperty('--photo-ry', '0deg');
    portraitCard.style.setProperty('--photo-shift-x', '0px');
    portraitCard.style.setProperty('--photo-shift-y', '0px');
  });
}

const heroPerson = document.querySelector('.hero-person');
const aboutPerson = document.querySelector('.about-person');
const sharedPortraitEnabled = heroPerson && aboutPerson && !reduceMotion;
if (sharedPortraitEnabled) {
  const transferPortrait = document.createElement('img');
  transferPortrait.className = 'portrait-transfer';
  transferPortrait.src = asset('hero-person.webp');
  transferPortrait.alt = '';
  transferPortrait.setAttribute('aria-hidden', 'true');
  document.body.appendChild(transferPortrait);

  const clamp01 = (value) => Math.max(0, Math.min(1, value));
  let portraitFrame = null;
  let portraitMetrics = null;
  const measurePortrait = () => {
    const targetRect = aboutPerson.getBoundingClientRect();
    const currentScroll = window.scrollY;
    const startRect = heroPerson.getBoundingClientRect();
    portraitMetrics = {
      startLeft: currentScroll < 1 ? startRect.left : portraitMetrics?.startLeft ?? startRect.left,
      startTop: currentScroll < 1 ? startRect.top : portraitMetrics?.startTop ?? startRect.top,
      startWidth: currentScroll < 1 ? startRect.width : portraitMetrics?.startWidth ?? startRect.width,
      startHeight: currentScroll < 1 ? startRect.height : portraitMetrics?.startHeight ?? startRect.height,
      aboutTop: targetRect.top + currentScroll,
      aboutLeft: targetRect.left,
      aboutWidth: targetRect.width,
      aboutHeight: targetRect.height,
    };
  };
  const syncPortraitTransfer = () => {
    if (!portraitMetrics) return;
    const { startLeft, startTop, startWidth, startHeight, aboutTop, aboutLeft, aboutWidth, aboutHeight } = portraitMetrics;
    const endScroll = Math.max(1, aboutTop - window.innerHeight * .48);
    const progress = clamp01(window.scrollY / endScroll);
    const targetTop = aboutTop - window.scrollY;
    const mix = (from, to) => from + (to - from) * progress;
    transferPortrait.style.left = `${mix(startLeft, aboutLeft)}px`;
    transferPortrait.style.top = `${mix(startTop, targetTop)}px`;
    transferPortrait.style.width = `${mix(startWidth, aboutWidth)}px`;
    transferPortrait.style.height = `${mix(startHeight, aboutHeight)}px`;
    transferPortrait.style.opacity = progress < 1 ? '1' : '0';
    heroPerson.style.opacity = '0';
    aboutPerson.style.opacity = progress >= 1 ? '1' : '0';
  };
  const schedulePortraitSync = () => {
    if (portraitFrame !== null) return;
    portraitFrame = window.requestAnimationFrame(() => {
      portraitFrame = null;
      syncPortraitTransfer();
    });
  };
  const refreshPortraitMetrics = () => {
    measurePortrait();
    schedulePortraitSync();
  };
  measurePortrait();
  window.addEventListener('scroll', schedulePortraitSync, { passive: true });
  window.addEventListener('resize', refreshPortraitMetrics);
  schedulePortraitSync();
} else if (aboutPerson) {
  aboutPerson.style.opacity = '1';
}

const activityYears = ['2026', '2026', '2025', '2025', '2024', '2024', '2024', '2023'];
const whatsappNumber = '5521964947833';
const serviceWhatsAppLink = (title, text) => {
  const message = `Olá! Vim pelo site da Barbalho Contabilidade e gostaria de solicitar um orçamento para ${title}. Minha necessidade é: ${text} Gostaria de entender a melhor solução para a minha empresa.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
const contentWhatsAppLink = (title, text) => {
  const message = `Olá! Vi o conteúdo "${title}" no site da Barbalho Contabilidade. Gostaria de conversar sobre essa necessidade: ${text} Também gostaria de receber um orçamento para a minha empresa.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
activityTrack.innerHTML = activities.map(([image, title, text], index) => `
  <a class="project-item reveal" href="${serviceWhatsAppLink(title, text)}" target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento para ${title}" data-project-index="${index}"><div class="project-item-highlight" aria-hidden="true"></div><div class="project-item-content"><div class="project-item-title"><h3>${title}</h3></div><p>${text}</p></div><img class="project-item-thumb" src="${asset(image)}" alt="" aria-hidden="true" loading="lazy" /><span class="project-item-year">${activityYears[index] || '2024'}</span></a>`).join('');

const growthGraphMarkup = `
  <div class="product-media growth-graph" role="img" aria-label="Gráfico animado de evolução patrimonial: uma linha ascendente rompe o novo patamar de crescimento">
    <div class="growth-topline"><span>INDICADOR VISUAL</span><span class="growth-status"><i></i>EM EVOLUÇÃO</span></div>
    <div class="growth-graph-head"><span>ORGANIZAÇÃO QUE GERA RESULTADO</span><b>Patrimônio em alta.</b></div>
    <div class="growth-chart" aria-hidden="true">
      <div class="growth-ceiling"><span>NOVO PATAMAR</span></div>
      <div class="growth-grid"></div>
      <svg viewBox="0 0 600 300" preserveAspectRatio="none">
        <defs><linearGradient id="growth-area-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#3d7cff" stop-opacity=".48"/><stop offset="1" stop-color="#3d7cff" stop-opacity="0"/></linearGradient></defs>
        <path class="growth-area" d="M32 252 C82 244 108 225 146 212 S205 198 242 172 S302 148 332 151 S377 141 410 106 S458 88 486 49 S520 30 548 8 L548 274 L32 274 Z" />
        <path class="growth-threshold" d="M30 58 H570" />
        <path class="growth-path" d="M32 252 C82 244 108 225 146 212 S205 198 242 172 S302 148 332 151 S377 141 410 106 S458 88 486 49 S520 30 548 8" />
        <path class="growth-arrow" d="M548 8 L528 32 L550 24 Z"/>
        <circle class="growth-point" cx="548" cy="8" r="7" />
      </svg>
      <span class="growth-impact"></span>
    </div>
    <div class="growth-axis" aria-hidden="true"><span>HOJE</span><span>PROCESSO</span><span>NOVO PATAMAR</span></div>
  </div>`;
productTrack.innerHTML = products.map(([image, title, text]) => `
  <article class="product-card reveal">${image === 'growth-chart' ? growthGraphMarkup : `<div class="product-media"><img loading="lazy" src="${asset(image)}" alt="${title}" /></div>`}<div class="product-copy"><h3>${title}</h3><p>${text}</p><button class="text-link text-button" type="button" data-open-portal>CONFERIR</button></div></article>`).join('');

contentGrid.innerHTML = content.map(([tone, tag, title, text, image]) => `<a class="content-card ${tone} reveal" href="${contentWhatsAppLink(title, text)}" target="_blank" rel="noopener noreferrer" aria-label="Conversar sobre ${title}"><div class="content-card-media"><img loading="lazy" src="${asset(image)}" alt="${title}" /></div><div class="content-card-body"><span class="content-tag">${tag}</span><strong>${title}</strong><p>${text}</p></div></a>`).join('');

let heroIndex = 0;
const updateHero = (nextIndex) => {
  heroIndex = (nextIndex + heroSlides.length) % heroSlides.length;
  document.querySelectorAll('.hero-slide').forEach((slide, index) => slide.classList.toggle('active', index === heroIndex));
  document.querySelector('#hero-current').textContent = String(heroIndex + 1);
};
document.querySelector('#hero-prev')?.addEventListener('click', () => updateHero(heroIndex - 1));
document.querySelector('#hero-next')?.addEventListener('click', () => updateHero(heroIndex + 1));

const initProjectShowcase = () => {
  const showcase = document.querySelector('#activities-showcase');
  const preview = document.querySelector('#activities-preview');
  const previewImage = document.querySelector('#activities-preview-image');
  const items = [...(showcase?.querySelectorAll('.project-item') || [])];
  if (!showcase || !preview || !previewImage || !items.length) return;

  let target = { x: 0, y: 0 };
  let current = { x: 0, y: 0 };
  let raf = 0;
  const isDesktop = () => window.matchMedia('(min-width: 621px) and (pointer: fine)').matches;
  const updatePreview = () => {
    current.x += (target.x - current.x) * .15;
    current.y += (target.y - current.y) * .15;
    const maxX = Math.max(12, showcase.clientWidth - preview.offsetWidth - 12);
    const x = Math.min(maxX, Math.max(12, current.x + 24));
    const y = Math.max(8, current.y - 112);
    preview.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    raf = requestAnimationFrame(updatePreview);
  };
  const setActive = (index) => {
    const [image, title] = activities[index];
    previewImage.src = asset(image);
    previewImage.alt = title;
    showcase.classList.add('has-preview');
    items.forEach((item, itemIndex) => item.classList.toggle('is-hovered', itemIndex === index));
  };
  const clearActive = () => {
    showcase.classList.remove('has-preview');
    items.forEach((item) => item.classList.remove('is-hovered'));
  };
  showcase.addEventListener('pointermove', (event) => {
    if (!isDesktop()) return;
    const bounds = showcase.getBoundingClientRect();
    target.x = event.clientX - bounds.left;
    target.y = event.clientY - bounds.top;
  });
  items.forEach((item, index) => {
    item.addEventListener('pointerenter', () => { if (isDesktop()) setActive(index); });
    item.addEventListener('focus', () => setActive(index));
    item.addEventListener('blur', clearActive);
  });
  showcase.addEventListener('pointerleave', () => { if (isDesktop()) clearActive(); });
  if (!reduceMotion) raf = requestAnimationFrame(updatePreview);
  window.addEventListener('resize', () => { if (!isDesktop()) clearActive(); });
};
initProjectShowcase();

const menuToggle = document.querySelector('#menu-toggle');
const mainNav = document.querySelector('#main-nav');
const setMenu = (open) => { menuToggle.classList.toggle('is-open', open); mainNav.classList.toggle('is-open', open); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); document.body.classList.toggle('menu-open', open); };
menuToggle.addEventListener('click', () => setMenu(!mainNav.classList.contains('is-open')));
mainNav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });

document.querySelectorAll('[data-language]').forEach((language) => language.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelectorAll('[data-language]').forEach((item) => { item.classList.toggle('active', item === language); item.toggleAttribute('aria-current', item === language); });
}));

const searchOverlay = document.querySelector('#search-overlay');
const searchInput = document.querySelector('#service-search');
const searchResults = document.querySelector('#search-results');
const searchItems = activities.map(([, title]) => title).concat(['Portal do cliente', 'Lembretes de prazo', 'Reforma tributária']);
const renderSearch = (query = '') => { const normalized = query.toLocaleLowerCase('pt-BR'); const matches = searchItems.filter((item) => item.toLocaleLowerCase('pt-BR').includes(normalized)); searchResults.innerHTML = matches.length ? matches.map((item) => `<a class="search-result" href="#services"><span>${item}</span></a>`).join('') : '<p>Nenhum resultado encontrado.</p>'; };
renderSearch();
document.querySelector('#search-open').addEventListener('click', () => { searchOverlay.hidden = false; searchInput.focus(); });
searchInput.addEventListener('input', () => renderSearch(searchInput.value));

const portalOverlay = document.querySelector('#portal-overlay');
const contactOverlay = document.querySelector('#contact-overlay');
const setModal = (modal, open) => { modal.hidden = !open; document.body.classList.toggle('modal-open', open); if (open) window.setTimeout(() => modal.querySelector('input')?.focus(), 50); };
document.addEventListener('click', (event) => {
  if (event.target.closest('[data-open-portal]')) { setMenu(false); setModal(portalOverlay, true); }
  if (event.target.closest('[data-close-portal]')) setModal(portalOverlay, false);
  if (event.target.closest('[data-open-contact]')) { setModal(portalOverlay, false); setModal(contactOverlay, true); }
  if (event.target.closest('[data-close-contact]')) setModal(contactOverlay, false);
  if (event.target.closest('[data-close-search]')) searchOverlay.hidden = true;
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { setModal(portalOverlay, false); setModal(contactOverlay, false); searchOverlay.hidden = true; setMenu(false); } });

document.querySelector('#portal-form').addEventListener('submit', (event) => { event.preventDefault(); document.querySelector('#portal-status').textContent = 'Demo pronta. A integração real do login entra na próxima etapa.'; });
document.querySelector('#contact-form').addEventListener('submit', (event) => { event.preventDefault(); document.querySelector('#contact-status').textContent = 'Mensagem preparada no protótipo. Nenhum dado foi enviado.'; event.currentTarget.reset(); });
document.querySelector('#document-file').addEventListener('change', (event) => { const file = event.target.files[0]; document.querySelector('#document-status').textContent = file ? `${file.name} pronto para conferência local. Nenhum upload foi realizado.` : ''; });

let previousScroll = window.scrollY;
window.addEventListener('scroll', () => { const current = window.scrollY; document.querySelector('#header').classList.toggle('is-hidden', current > previousScroll && current > 116); if (current < previousScroll || current < 58) document.querySelector('#header').classList.remove('is-hidden'); previousScroll = current; }, { passive: true });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .1 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// Lightweight inertial scroll: native on touch/reduced-motion, eased on desktop wheel input.
const smoothScrollEnabled = !reduceMotion && window.matchMedia('(pointer: fine)').matches;
const smoothScroll = { current: window.scrollY, target: window.scrollY, raf: 0, active: false, lastTime: 0 };
const clampScroll = (value) => Math.max(0, Math.min(value, document.documentElement.scrollHeight - window.innerHeight));
const scrollFrame = (time) => {
  const delta = Math.min(.05, Math.max(.001, (time - smoothScroll.lastTime) / 1000));
  smoothScroll.lastTime = time;
  const ease = 1 - Math.pow(.001, delta);
  smoothScroll.current += (smoothScroll.target - smoothScroll.current) * ease;
  window.scrollTo(0, smoothScroll.current);
  if (Math.abs(smoothScroll.target - smoothScroll.current) < .35) {
    smoothScroll.current = smoothScroll.target;
    smoothScroll.active = false;
    smoothScroll.raf = 0;
    window.scrollTo(0, smoothScroll.current);
    return;
  }
  smoothScroll.raf = window.requestAnimationFrame(scrollFrame);
};
const startSmoothScroll = () => {
  if (!smoothScrollEnabled || smoothScroll.raf) return;
  smoothScroll.active = true;
  smoothScroll.lastTime = performance.now();
  smoothScroll.raf = window.requestAnimationFrame(scrollFrame);
};
const scrollToElement = (element) => {
  if (!smoothScrollEnabled) { element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); return; }
  const headerOffset = window.innerWidth <= 620 ? 58 : 116;
  smoothScroll.current = window.scrollY;
  smoothScroll.target = clampScroll(element.getBoundingClientRect().top + window.scrollY - headerOffset + 20);
  startSmoothScroll();
};
if (smoothScrollEnabled) {
  window.addEventListener('wheel', (event) => {
    if (event.ctrlKey || event.metaKey || document.body.classList.contains('modal-open') || document.body.classList.contains('menu-open')) return;
    const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
    const nextTarget = clampScroll((smoothScroll.active ? smoothScroll.target : window.scrollY) + event.deltaY * multiplier);
    if (nextTarget === (smoothScroll.active ? smoothScroll.target : window.scrollY)) return;
    event.preventDefault();
    if (!smoothScroll.active) smoothScroll.current = window.scrollY;
    smoothScroll.target = nextTarget;
    startSmoothScroll();
  }, { passive: false });
  window.addEventListener('scroll', () => {
    if (!smoothScroll.active) smoothScroll.current = smoothScroll.target = window.scrollY;
  }, { passive: true });
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return;
    const target = document.querySelector(hash);
    if (!target) return;
    event.preventDefault();
    history.pushState(null, '', hash);
    scrollToElement(target);
  });
}
