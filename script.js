// ── Project Data for Modal ──
const projectData = {
  avenflix: {
    title: 'AvenFlix',
    status: 'Completed',
    icon: 'fas fa-film',
    color: 'linear-gradient(135deg,#f093fb,#f5576c)',
    description: 'A feature-rich movie discovery app powered by the TMDB API. Users can browse trending movies, search titles, view detailed info, and sign in with Google.',
    features: [
      'TMDB API integration with real-time movie data',
      'Google Sign-In authentication',
      'Reactive UI with GetX state management',
      'Movie search, trending & category browsing',
      'Detailed movie pages with ratings & trailers',
      'Smooth page transitions and animations'
    ],
    tech: ['Flutter', 'Dart', 'GetX', 'TMDB API', 'Google Auth', 'REST API'],
    folder: 'avenflix', count: 6, ext: 'png',
    github: 'https://github.com/KashifKT'
  },
  quickfood: {
    title: 'QuickFood',
    status: 'Completed',
    icon: 'fas fa-utensils',
    color: 'linear-gradient(135deg,#fa709a,#fee140)',
    description: 'A food ordering app with a clean UI, restaurant listings, menu browsing, and cart management with smooth animations throughout.',
    features: [
      'Restaurant listing with categories',
      'Menu browsing with item details',
      'Cart management with quantity control',
      'Firebase backend integration',
      'Smooth UI animations and transitions',
      'Order summary screen'
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'UI/UX'],
    folder: 'quickfood', count: 3, ext: 'png',
    github: 'https://github.com/KashifKT'
  },
  splitoye: {
    title: 'SplitOye',
    status: 'Completed',
    icon: 'fas fa-receipt',
    color: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    description: 'An expense splitting app built with offline-first architecture. Track shared expenses, split bills among friends, and manage balances — all without internet.',
    features: [
      'Offline-first with Hive local database',
      'Add & split expenses among groups',
      'Balance tracking per person',
      'Clean and intuitive UI',
      'Persistent data across sessions',
      'Expense history and summaries'
    ],
    tech: ['Flutter', 'Dart', 'Hive', 'Offline-First', 'UI/UX'],
    folder: 'splitoye', count: 4, ext: 'png',
    github: 'https://github.com/KashifKT'
  },
  task: {
    title: 'Todo / Task App',
    status: 'Completed',
    icon: 'fas fa-tasks',
    color: 'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    description: 'A clean and minimal task management app with local storage, priority labels, and an intuitive interface for daily productivity.',
    features: [
      'Create, edit and delete tasks',
      'Priority labels (High / Medium / Low)',
      'Local storage with Hive',
      'Mark tasks as complete',
      'Clean minimal UI design',
      'Persistent data storage'
    ],
    tech: ['Flutter', 'Dart', 'Hive', 'UI/UX'],
    folder: 'task', count: 4, ext: 'png',
    github: 'https://github.com/KashifKT'
  },
  tajarmart: {
    title: 'Tajar Mart',
    status: 'In Progress',
    icon: 'fas fa-store',
    color: 'linear-gradient(135deg,#f7971e,#ffd200)',
    description: 'A full-featured e-commerce platform currently in active development. Tajar Mart provides a seamless shopping experience with product catalog, cart, order management, and a seller dashboard.',
    features: [
      'Product catalog with categories & filters',
      'Cart and wishlist management',
      'Order placement and tracking',
      'Coupon-based discount system',
      'Seller dashboard for product management',
      'Dio API integration with error handling',
      'Offline caching with Hive',
      'Clean Architecture with Riverpod'
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'Dio', 'Hive', 'Clean Architecture', 'MVVM'],
    folder: 'tajarmart', count: 3, ext: 'png',
    github: null
  },
  flyalqudus: {
    title: 'Fly Al Qudus',
    status: 'In Progress',
    icon: 'fas fa-plane-departure',
    color: 'linear-gradient(135deg,#1a1a2e,#0f3460)',
    description: 'An airline management system currently under development. Fly Al Qudus handles flight booking, seat selection, and passenger management with real-time updates.',
    features: [
      'Flight search and booking flow',
      'Interactive seat selection',
      'Passenger details management',
      'Booking confirmation & e-ticket',
      'Real-time flight status updates',
      'Admin panel for flight management',
      'MVVM architecture with Riverpod',
      'REST API integration'
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'REST API', 'MVVM', 'Clean Architecture'],
    folder: 'flyalqudus', count: 1, ext: 'png',
    github: null
  },
  wakhla: {
    title: 'Wakhla',
    status: 'Completed',
    icon: 'fas fa-shopping-cart',
    color: 'linear-gradient(135deg,#4facfe,#00f2fe)',
    description: 'A live e-commerce project where I contributed to the UI/UX design and REST API integration as part of a team.',
    features: [
      'Product browsing and detail screens',
      'REST API integration for live data',
      'UI/UX design contributions',
      'Responsive layouts for all devices',
      'Team collaboration on live project',
      'Performance optimizations'
    ],
    tech: ['Flutter', 'Dart', 'REST API', 'UI/UX'],
    folder: 'wakhla', count: 3, ext: 'png',
    github: 'https://github.com/KashifKT'
  },
  chatapp: {
    title: 'Chat App',
    status: 'Completed',
    icon: 'fas fa-comments',
    color: 'linear-gradient(135deg,#f093fb,#f5576c)',
    description: 'A real-time messaging app with Firebase Authentication, FCM push notifications, and media sharing capabilities.',
    features: [
      'Real-time messaging with Firebase',
      'Firebase Authentication (Login/Signup)',
      'FCM push notifications',
      'Media sharing (images)',
      'Online/offline status indicators',
      'Clean chat UI design'
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'FCM', 'UI/UX'],
    folder: 'chatapp', count: 4, ext: 'png',
    github: 'https://github.com/KashifKT'
  }
};

// ── Image Sliders ──
document.querySelectorAll('.project-img.slider').forEach(slider => {
  const folder = slider.dataset.folder;
  const count = parseInt(slider.dataset.count);
  const ext = slider.dataset.ext || 'jpg';
  let current = 0;

  for (let i = 1; i <= count; i++) {
    const img = document.createElement('img');
    img.src = `images/${folder}/${i}.${ext}`;
    img.alt = folder;
    img.loading = 'lazy';
    if (i === 1) img.classList.add('active');
    slider.appendChild(img);
  }

  const dots = document.createElement('div');
  dots.className = 'slider-dots';
  for (let i = 0; i < count; i++) {
    const d = document.createElement('div');
    d.className = 'slider-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', e => { e.stopPropagation(); goTo(i); });
    dots.appendChild(d);
  }
  slider.appendChild(dots);

  const prev = document.createElement('button');
  prev.className = 'slider-arrow prev';
  prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
  const next = document.createElement('button');
  next.className = 'slider-arrow next';
  next.innerHTML = '<i class="fas fa-chevron-right"></i>';
  slider.appendChild(prev);
  slider.appendChild(next);

  const imgs = slider.querySelectorAll('img');
  const dotEls = slider.querySelectorAll('.slider-dot');

  function goTo(n) {
    imgs[current].classList.remove('active');
    dotEls[current].classList.remove('active');
    current = (n + count) % count;
    imgs[current].classList.add('active');
    dotEls[current].classList.add('active');
  }

  prev.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
  next.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
  setInterval(() => goTo(current + 1), 2000 + Math.random() * 3000);
});

// ── Project Modal ──
const overlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(key) {
  const p = projectData[key];
  if (!p) return;

  const imgs = p.folder
    ? Array.from({length: p.count}, (_, i) =>
        `<img src="images/${p.folder}/${i+1}.${p.ext}" alt="${p.title}" />`
      ).join('')
    : `<div class="modal-icon-placeholder" style="background:${p.color}"><i class="${p.icon}"></i></div>`;

  const githubBtn = p.github
    ? `<a href="${p.github}" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> View Code</a>`
    : '';

  modalBody.innerHTML = `
    <div class="modal-header" style="background:${p.color}">
      ${p.folder
        ? `<div class="modal-slider">${imgs}<div class="modal-slider-dots"></div></div>`
        : `<div class="modal-icon-placeholder"><i class="${p.icon}"></i></div>`
      }
    </div>
    <div class="modal-content">
      <div class="modal-title-row">
        <h2>${p.title}</h2>
        <span class="status-badge ${p.status === 'In Progress' ? 'ongoing' : 'done'}">${p.status}</span>
      </div>
      <p class="modal-desc">${p.description}</p>
      <h3>Key Features</h3>
      <ul class="modal-features">
        ${p.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
      </ul>
      <h3>Tech Stack</h3>
      <div class="modal-tags">
        ${p.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
      <div class="modal-actions">${githubBtn}</div>
    </div>
  `;

  // Init modal slider if images exist
  if (p.folder) {
    const mImgs = modalBody.querySelectorAll('.modal-slider img');
    const mDots = modalBody.querySelector('.modal-slider-dots');
    let mCurrent = 0;
    mImgs[0].classList.add('active');

    mImgs.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'modal-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => mGoTo(i));
      mDots.appendChild(d);
    });

    function mGoTo(n) {
      mImgs[mCurrent].classList.remove('active');
      mDots.children[mCurrent].classList.remove('active');
      mCurrent = (n + mImgs.length) % mImgs.length;
      mImgs[mCurrent].classList.add('active');
      mDots.children[mCurrent].classList.add('active');
    }
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Open on card click
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});

// Open on Details button
document.querySelectorAll('.btn-detail').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const key = btn.closest('.project-card').dataset.project;
    openModal(key);
  });
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Typing Animation ──
const texts = ['Flutter Developer', 'Mobile App Developer', 'Dart Enthusiast', 'UI/UX Craftsman'];
let tIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById('typedText');

function type() {
  const current = texts[tIdx];
  el.textContent = deleting ? current.substring(0, cIdx--) : current.substring(0, cIdx++);
  if (!deleting && cIdx > current.length) { deleting = true; setTimeout(type, 1500); return; }
  if (deleting && cIdx < 0) { deleting = false; tIdx = (tIdx + 1) % texts.length; }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// ── Navbar Scroll ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ── Hamburger ──
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── Skill Bars ──
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => bar.style.width = bar.dataset.width);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

// ── Contact Form ──
document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
  });

  const data = await res.json();
  if (data.success) {
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = 'linear-gradient(135deg,#43e97b,#38f9d7)';
    e.target.reset();
  } else {
    btn.innerHTML = '<i class="fas fa-times"></i> Failed. Try again.';
    btn.style.background = 'linear-gradient(135deg,#f5576c,#f093fb)';
  }

  btn.disabled = false;
  setTimeout(() => { btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message'; btn.style.background = ''; }, 3000);
});

// ── Fade-in on Scroll ──
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-card, .about-grid, .exp-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  fadeObserver.observe(el);
});
