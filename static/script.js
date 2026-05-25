// ============================================
// EMPÊCHER LE TÉLÉCHARGEMENT DES IMAGES ET VIDÉOS
// ============================================

// Désactiver le clic droit sur les images et vidéos
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
    e.preventDefault();
    return false;
  }
});

// Désactiver le drag-and-drop des images et vidéos
document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
    e.preventDefault();
    return false;
  }
});

// Désactiver les raccourcis clavier pour enregistrer (Ctrl+S, Ctrl+U, F12)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 's' || e.key === 'u' || e.key === 'S' || e.key === 'U')) {
    e.preventDefault();
    return false;
  }
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
});

// ============================================
// LOAD CONSTANTS AND APPLY TO HTML
// ============================================

function applyConstantsToHTML() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Site meta
  if (document.getElementById('pageTitle')) {
    document.getElementById('pageTitle').textContent = SITE_CONFIG.title;
  }
  if (document.getElementById('pageDescription')) {
    document.getElementById('pageDescription').setAttribute('content', SITE_CONFIG.description);
  }
  if (document.getElementById('favicon')) {
    document.getElementById('favicon').setAttribute('href', SITE_CONFIG.favicon);
  }
  if (document.getElementById('shortcutIcon')) {
    document.getElementById('shortcutIcon').setAttribute('href', SITE_CONFIG.favicon);
  }

  // Navbar
  if (typeof NAVBAR_CONFIG !== 'undefined') {
    if (document.getElementById('navbarLogoImg')) {
      document.getElementById('navbarLogoImg').setAttribute('src', NAVBAR_CONFIG.logo.image);
      document.getElementById('navbarLogoImg').setAttribute('alt', NAVBAR_CONFIG.logo.alt);
    }
    if (document.getElementById('navbarLogoText')) {
      document.getElementById('navbarLogoText').textContent = NAVBAR_CONFIG.logo.text;
    }
  }

  // Hero
  if (typeof HERO_CONFIG !== 'undefined') {
    const heroImage = document.querySelector('.hero-portrait');
    if (heroImage) {
      heroImage.setAttribute('src', HERO_CONFIG.image.src);
      heroImage.setAttribute('alt', HERO_CONFIG.image.alt);
    }

    const heroTags = document.querySelector('.hero-tags');
    if (heroTags) {
      heroTags.innerHTML = HERO_CONFIG.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.innerHTML = `${HERO_CONFIG.title.line1}<br><span class="highlight">${HERO_CONFIG.title.line2}</span>`;
    }

    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
      heroDescription.innerHTML = HERO_CONFIG.description;
    }

    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
      heroCta.textContent = HERO_CONFIG.ctaButton.text;
      heroCta.setAttribute('href', HERO_CONFIG.ctaButton.href);
    }

    // Hero stats
    const statValues = document.querySelectorAll('.hero-stats .stat-value');
    const statLabels = document.querySelectorAll('.hero-stats .stat-label');
    HERO_CONFIG.stats.forEach((stat, index) => {
      if (statValues[index]) {
        statValues[index].setAttribute('data-target', stat.value);
      }
      if (statLabels[index]) {
        statLabels[index].textContent = stat.label;
      }
    });
  }

  // About
  if (typeof ABOUT_CONFIG !== 'undefined') {
    const aboutBadge = document.querySelector('.about .section-badge');
    if (aboutBadge) aboutBadge.textContent = ABOUT_CONFIG.badge;

    const aboutTitle = document.querySelector('.about .section-title');
    if (aboutTitle) {
      aboutTitle.innerHTML = `${ABOUT_CONFIG.title.line1}<br><span class="highlight">${ABOUT_CONFIG.title.line2}</span>`;
    }

    const aboutDescription = document.querySelector('.about .section-description');
    if (aboutDescription) aboutDescription.textContent = ABOUT_CONFIG.description;

    const aboutCards = document.querySelectorAll('.about .card');
    ABOUT_CONFIG.cards.forEach((card, index) => {
      if (aboutCards[index]) {
        const cardTitle = aboutCards[index].querySelector('.card-title');
        const cardDesc = aboutCards[index].querySelector('.card-desc');
        if (cardTitle) cardTitle.textContent = card.title;
        if (cardDesc) cardDesc.textContent = card.description;
      }
    });
  }

  // Services
  if (typeof SERVICES_CONFIG !== 'undefined') {
    const serviceCards = document.querySelectorAll('.service-card');
    SERVICES_CONFIG.forEach((service, index) => {
      if (serviceCards[index]) {
        const serviceImage = serviceCards[index].querySelector('.service-image img');
        const serviceTitle = serviceCards[index].querySelector('.service-title');
        const serviceDesc = serviceCards[index].querySelector('.service-desc');
        const serviceBtn = serviceCards[index].querySelector('.service-btn');

        if (serviceImage) {
          serviceImage.setAttribute('src', service.image);
          serviceImage.setAttribute('alt', service.alt);
        }
        if (serviceTitle) serviceTitle.textContent = service.title;
        if (serviceDesc) serviceDesc.textContent = service.description;
        if (serviceBtn) serviceBtn.setAttribute('onclick', `openServiceModal(${index})`);
      }
    });
  }

  // Portfolio
  if (typeof PORTFOLIO_CONFIG !== 'undefined') {
    const portfolioTitle = document.querySelector('.portfolio .section-title');
    if (portfolioTitle) portfolioTitle.textContent = PORTFOLIO_CONFIG.title;

    const filterBtns = document.querySelectorAll('.filter-btn');
    PORTFOLIO_CONFIG.filters.forEach((filter, index) => {
      if (filterBtns[index]) {
        filterBtns[index].textContent = filter.text;
        filterBtns[index].setAttribute('data-filter', filter.value);
      }
    });
  }

  // Formations
  if (typeof FORMATIONS_CONFIG !== 'undefined') {
    const formationsBadge = document.querySelector('.formations .section-badge');
    if (formationsBadge) formationsBadge.textContent = FORMATIONS_CONFIG.badge;

    const formationsTitle = document.querySelector('.formations .section-title');
    if (formationsTitle) formationsTitle.textContent = FORMATIONS_CONFIG.title;

    const formationCards = document.querySelectorAll('.formation-card');
    FORMATIONS_CONFIG.items.forEach((formation, index) => {
      if (formationCards[index]) {
        const formationImage = formationCards[index].querySelector('.formation-image img');
        const formationBadge = formationCards[index].querySelector('.formation-badge');
        const formationTitle = formationCards[index].querySelector('.formation-title');
        const formationDesc = formationCards[index].querySelector('.formation-desc');
        const formationCta = formationCards[index].querySelector('.formation-cta');

        if (formationImage) {
          formationImage.setAttribute('src', formation.image);
          formationImage.setAttribute('alt', formation.alt);
        }
        if (formationBadge) formationBadge.textContent = formation.badge;
        if (formationTitle) formationTitle.textContent = formation.title;
        if (formationDesc) formationDesc.textContent = formation.description;
        if (formationCta) {
          formationCta.textContent = formation.ctaButton.text;
          formationCta.setAttribute('href', formation.ctaButton.href);
        }
      }
    });
  }

  // Expertise
  if (typeof EXPERTISE_CONFIG !== 'undefined') {
    const expertiseBadge = document.querySelector('.expertise .section-badge');
    if (expertiseBadge) expertiseBadge.textContent = EXPERTISE_CONFIG.badge;

    const expertiseTitle = document.querySelector('.expertise .section-title');
    if (expertiseTitle) {
      expertiseTitle.innerHTML = `${EXPERTISE_CONFIG.title.line1} <span class="highlight">${EXPERTISE_CONFIG.title.line2}</span>`;
    }

    const expertiseStats = document.querySelectorAll('.expertise-stats .expertise-stat');
    EXPERTISE_CONFIG.stats.forEach((stat, index) => {
      if (expertiseStats[index]) {
        const statValue = expertiseStats[index].querySelector('.stat-value');
        const statLabel = expertiseStats[index].querySelector('.stat-label');
        if (statValue) statValue.setAttribute('data-target', stat.value);
        if (statLabel) statLabel.textContent = stat.label;
      }
    });
  }

  // FAQ
  if (typeof FAQ_CONFIG !== 'undefined') {
    const faqBadge = document.querySelector('.faq .section-badge');
    if (faqBadge) faqBadge.textContent = FAQ_CONFIG.badge;

    const faqTitle = document.querySelector('.faq .section-title');
    if (faqTitle) {
      faqTitle.innerHTML = `${FAQ_CONFIG.title.line1} <br><span class="highlight">${FAQ_CONFIG.title.line2}</span>`;
    }

    const faqItems = document.querySelectorAll('.faq-item');
    FAQ_CONFIG.items.forEach((item, index) => {
      if (faqItems[index]) {
        const faqQuestion = faqItems[index].querySelector('.faq-question span');
        const faqAnswer = faqItems[index].querySelector('.faq-answer');
        if (faqQuestion) faqQuestion.textContent = item.question;
        if (faqAnswer) faqAnswer.textContent = item.answer;
      }
    });
  }

  // Testimonials
  if (typeof TESTIMONIALS_CONFIG !== 'undefined') {
    const testimonialsTitle = document.querySelector('.testimonials .section-title');
    if (testimonialsTitle) testimonialsTitle.textContent = TESTIMONIALS_CONFIG.title;

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    TESTIMONIALS_CONFIG.items.forEach((testimonial, index) => {
      if (testimonialCards[index]) {
        const testimonialText = testimonialCards[index].querySelector('.testimonial-text');
        const authorName = testimonialCards[index].querySelector('.author-name');
        const authorRole = testimonialCards[index].querySelector('.author-role');
        if (testimonialText) testimonialText.textContent = `"${testimonial.text}"`;
        if (authorName) authorName.textContent = testimonial.author.name;
        if (authorRole) authorRole.textContent = testimonial.author.role;
      }
    });
  }

  // Contact
  if (typeof CONTACT_CONFIG !== 'undefined') {
    const contactBadge = document.querySelector('.contact .section-badge');
    if (contactBadge) contactBadge.textContent = CONTACT_CONFIG.badge;

    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) {
      contactTitle.innerHTML = `${CONTACT_CONFIG.title.line1} <span class="highlight">${CONTACT_CONFIG.title.line2}</span>`;
    }

    const contactDescription = document.querySelector('.contact .section-description');
    if (contactDescription) contactDescription.textContent = CONTACT_CONFIG.description;

    const nameLabel = document.querySelector('.form-group:nth-child(1) label');
    const nameInput = document.querySelector('.form-group:nth-child(1) input');
    const emailLabel = document.querySelector('.form-group:nth-child(2) label');
    const emailInput = document.querySelector('.form-group:nth-child(2) input');
    const messageLabel = document.querySelector('.form-group:nth-child(3) label');
    const messageTextarea = document.querySelector('.form-group:nth-child(3) textarea');
    const submitButton = document.querySelector('.form-submit');

    if (nameLabel) nameLabel.textContent = CONTACT_CONFIG.form.nameLabel;
    if (nameInput) nameInput.setAttribute('placeholder', CONTACT_CONFIG.form.namePlaceholder);
    if (emailLabel) emailLabel.textContent = CONTACT_CONFIG.form.emailLabel;
    if (emailInput) emailInput.setAttribute('placeholder', CONTACT_CONFIG.form.emailPlaceholder);
    if (messageLabel) messageLabel.textContent = CONTACT_CONFIG.form.messageLabel;
    if (messageTextarea) messageTextarea.setAttribute('placeholder', CONTACT_CONFIG.form.messagePlaceholder);
    if (submitButton) {
      submitButton.innerHTML = `
        <svg class="submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        ${CONTACT_CONFIG.form.submitButton}
      `;
    }

    const contactInfoCards = document.querySelectorAll('.contact-info-card');
    CONTACT_CONFIG.info.forEach((info, index) => {
      if (contactInfoCards[index]) {
        const infoTitle = contactInfoCards[index].querySelector('h3');
        const infoValue = contactInfoCards[index].querySelector('p');
        const infoButton = contactInfoCards[index].querySelector('.contact-btn');
        if (infoTitle) infoTitle.textContent = info.title;
        if (infoValue) infoValue.textContent = info.value;
        if (infoButton && info.button) {
          infoButton.textContent = info.button.text;
          infoButton.setAttribute('href', info.button.href);
        }
      }
    });
  }

  // Footer
  if (typeof FOOTER_CONFIG !== 'undefined') {
    const footerLogoImg = document.querySelector('.footer-logo img');
    const footerLogoText = document.querySelector('.footer-logo span');
    const footerDescription = document.querySelector('.footer-brand p');
    const footerCopyright = document.querySelector('.footer-copyright');
    const footerSocialLinks = document.querySelectorAll('.footer-socials .social-link');

    if (footerLogoImg) {
      footerLogoImg.setAttribute('src', FOOTER_CONFIG.logo.image);
      footerLogoImg.setAttribute('alt', FOOTER_CONFIG.logo.alt);
    }
    if (footerLogoText) footerLogoText.innerHTML = FOOTER_CONFIG.logo.text;
    if (footerDescription) footerDescription.textContent = FOOTER_CONFIG.description;
    if (footerCopyright) footerCopyright.textContent = FOOTER_CONFIG.copyright;

    if (footerSocialLinks) {
      footerSocialLinks.forEach((link, index) => {
        if (FOOTER_CONFIG.socials[index]) {
          link.setAttribute('href', FOOTER_CONFIG.socials[index].href);
        }
      });
    }
  }

  // Why Work With Me
  if (typeof WHY_WORK_CONFIG !== 'undefined') {
    const whyWorkBadge = document.querySelector('.why-work .section-badge');
    const whyWorkTitle = document.querySelector('.why-work .section-title');
    const whyWorkDescription = document.querySelector('.why-work .section-description');
    const whyWorkGrid = document.getElementById('whyWorkGrid');

    if (whyWorkBadge) whyWorkBadge.textContent = WHY_WORK_CONFIG.badge;
    if (whyWorkTitle) whyWorkTitle.textContent = WHY_WORK_CONFIG.subtitle;
    if (whyWorkDescription) whyWorkDescription.textContent = "Une approche moderne qui fusionne intelligence artificielle, design premium et stratégie digitale pour créer des résultats concrets.";

    if (whyWorkGrid) {
      whyWorkGrid.innerHTML = WHY_WORK_CONFIG.cards.map(card => `
        <div class="why-work-card">
          <div class="why-work-card-icon">
            ${card.icon}
          </div>
          <h3 class="why-work-card-title">${card.title}</h3>
          <p class="why-work-card-description">${card.description}</p>
        </div>
      `).join('');
    }
  }
}

// Apply constants when DOM is loaded
document.addEventListener('DOMContentLoaded', applyConstantsToHTML);

// ============================================
// PORTFOLIO DATA
// ============================================

// Use data from constants.js if available, otherwise use fallback
const portfolioItems = typeof PORTFOLIO_CONFIG !== 'undefined' ? PORTFOLIO_CONFIG.items : [
  { 
    id: 1, 
    type: 'images', 
    title: 'Boumboum', 
    img: 'boumboum.png',
    gallery: ['boumboum1.png', 'boumboum2.png', 'boumboum3.png']
  },
  { 
    id: 2, 
    type: 'videos', 
    title: 'Montage Short', 
    img: 'monatgeshort.mp4',
    gallery: []
  },
  { 
    id: 3, 
    type: 'images', 
    title: 'Carte Jeune', 
    img: 'cartejeune.png',
    gallery: ['cartejeune1.png', 'cartejeune2.png', 'cartejeune3.png']
  },
  { 
    id: 4, 
    type: 'videos', 
    title: 'Vidéo Publicitaire', 
    img: 'montagevideo imo.mp4',
    gallery: []
  },
  { 
    id: 5, 
    type: 'images', 
    title: 'KFC', 
    img: 'kfc.png',
    gallery: ['kfc1.png', 'kfc2.png', 'kfc3.png']
  },
  { 
    id: 6, 
    type: 'videos', 
    title: 'Vidéos IA', 
    img: 'videoia.MP4',
    gallery: []
  },
  { 
    id: 7, 
    type: 'images', 
    title: 'Habit Marque', 
    img: 'habit.png',
    gallery: ['habit1.png', 'habit2.png', 'habit3.png']
  },
  { 
    id: 8, 
    type: 'images', 
    title: 'Sac', 
    img: 'sac.png',
    gallery: ['sac1.png', 'sac2.png', 'sac3.png']
  },
  { 
    id: 9, 
    type: 'images', 
    title: 'Affiche', 
    img: 'Affiche.png',
    gallery: ['Bon Week-end (1).png', 'affiche3.jpg', 'affiche2.jpg']
  },
  { 
    id: 10, 
    type: 'images', 
    title: 'Logo', 
    img: 'logo.jpg',
    gallery: ['logo1.jpg', 'logo2.jpg']
  },
  { 
    id: 11, 
    type: 'images', 
    title: 'Miniature', 
    img: 'miniature sponsor.jpg',
    gallery: ['MINIATURE.png', 'miniature facile.png', 'miniature2.png']
  },
  { 
    id: 12, 
    type: 'images', 
    title: 'Boisson Bock', 
    img: 'bierre.png',
    gallery: ['bierre1.png', 'bierre2.png']
  }
];

// ============================================
// SERVICES DATA
// ============================================

// Use data from constants.js if available, otherwise use fallback
const servicesData = typeof SERVICES_CONFIG !== 'undefined' ? SERVICES_CONFIG : [
  {
    title: "Création de site web",
    details: "Nous créons des expériences web uniques qui captivent vos visiteurs dès la première seconde. De la landing page minimaliste au portail d'entreprise complexe, chaque pixel est pensé pour servir vos objectifs business.",
    features: ["Design Responsive", "Optimisation SEO", "Vitesse de chargement"],
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>`
  },
  {
    title: "Intelligence Artificielle",
    details: "L'IA n'est plus une option, c'est un avantage compétitif. Nous vous aidons à intégrer des solutions d'IA générative (LLMs, agents autonomes) directement dans vos processus métiers pour gagner un temps précieux.",
    features: ["Shooting IA", "Automatisation", "Vidéos IA", "Formation IA"],
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>`
  },
  {
    title: "Montage Vidéo",
    details: "Le contenu vidéo est roi. Nous réalisons des montages percutants qui retiennent l'attention, en utilisant des outils d'IA pour le sound design, le color grading et les effets visuels avancés.",
    features: ["Short-form (Reels/TikTok)", "Publicités", "Vidéo Youtube", "Vidéo Short"],
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <line x1="7" y1="2" x2="7" y2="22"></line>
      <line x1="17" y1="2" x2="17" y2="22"></line>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="2" y1="7" x2="7" y2="7"></line>
      <line x1="2" y1="17" x2="7" y2="17"></line>
      <line x1="17" y1="17" x2="22" y2="17"></line>
      <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>`
  },
  {
    title: "Design Graphique",
    details: "Une identité visuelle forte est la base de la confiance. Nous concevons des logos, des chartes graphiques et des assets marketing qui respirent le luxe, la technologie et le professionnalisme.",
    features: ["Logos", "Affiches", "Miniature"],
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="13.5" cy="6.5" r=".5"></circle>
      <circle cx="17.5" cy="10.5" r=".5"></circle>
      <circle cx="8.5" cy="7.5" r=".5"></circle>
      <circle cx="6.5" cy="12.5" r=".5"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>`
  }
];

// ============================================
// NAVBAR
// ============================================

const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');
const navbarContainer = document.querySelector('.navbar-container');
const navbarOverlay = document.getElementById('navbarOverlay');
const navLinks = document.querySelectorAll('.nav-link');

let isNavbarOpen = false;

navbarToggle.addEventListener('click', () => {
  isNavbarOpen = !isNavbarOpen;
  navbarContainer.classList.toggle('open', isNavbarOpen);
  
  if (isNavbarOpen) {
    navbarToggle.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
  } else {
    navbarToggle.innerHTML = `
      <div class="animated-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    `;
  }
});

navbarOverlay.addEventListener('click', () => {
  isNavbarOpen = false;
  navbarContainer.classList.remove('open');
  navbarToggle.innerHTML = `
    <div class="animated-dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  `;
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    isNavbarOpen = false;
    navbarContainer.classList.remove('open');
    navbarToggle.innerHTML = `
      <div class="animated-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    `;
  });
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString() + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString() + '+';
    }
  }, 16);
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(counter => {
  counterObserver.observe(counter);
});

// ============================================
// PORTFOLIO
// ============================================

const portfolioGrid = document.getElementById('portfolioGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

function renderPortfolio(filter = 'all') {
  portfolioGrid.innerHTML = '';
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === filter);
  
  filteredItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'portfolio-item';
    itemElement.onclick = () => openPortfolioModal(item);
    
    if (item.type === 'videos') {
      itemElement.innerHTML = `
        <video src="${item.img}" muted loop playsinline class="portfolio-video"></video>
        <div class="play-overlay">
          <div class="play-button">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
        <div class="portfolio-overlay">
          <span class="portfolio-type">Vidéos</span>
          <h3 class="portfolio-title">${item.title}</h3>
        </div>
        <div class="portfolio-border"></div>
      `;
      
      // Auto-play video on hover
      const video = itemElement.querySelector('video');
      itemElement.addEventListener('mouseenter', () => video.play());
      itemElement.addEventListener('mouseleave', () => video.pause());
    } else {
      itemElement.innerHTML = `
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="portfolio-overlay">
          <span class="portfolio-type">Images</span>
          <h3 class="portfolio-title">${item.title}</h3>
        </div>
        <div class="portfolio-border"></div>
      `;
    }
    
    portfolioGrid.appendChild(itemElement);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderPortfolio(currentFilter);
  });
});

// Initial render
renderPortfolio();

// ============================================
// PORTFOLIO MODAL
// ============================================

const portfolioModal = document.getElementById('portfolioModal');
const portfolioModalContent = document.getElementById('portfolioModalContent');
let currentPortfolioItem = null;
let currentImageIndex = 0;

function openPortfolioModal(item) {
  currentPortfolioItem = item;
  currentImageIndex = 0;
  portfolioModal.classList.add('active');
  renderPortfolioModalContent();
}

// Make function globally accessible for onclick handlers
window.openPortfolioModal = openPortfolioModal;

function closePortfolioModal() {
  portfolioModal.classList.remove('active');
  currentPortfolioItem = null;
}

function renderPortfolioModalContent() {
  if (!currentPortfolioItem) return;
  
  let content = '';
  
  if (currentPortfolioItem.type === 'videos') {
    content = `
      <video src="${currentPortfolioItem.img}" controls autoplay muted class="portfolio-modal-media"></video>
      <div class="portfolio-modal-info">
        <span class="portfolio-modal-type">Vidéos</span>
        <h3 class="portfolio-modal-title">${currentPortfolioItem.title}</h3>
      </div>
    `;
  } else {
    const allImages = [currentPortfolioItem.img, ...(currentPortfolioItem.gallery || [])];
    const currentImage = allImages[currentImageIndex];
    
    content = `
      <img src="${currentImage}" alt="${currentPortfolioItem.title}" class="portfolio-modal-media">
      ${allImages.length > 1 ? `
        <div class="portfolio-gallery">
          ${allImages.map((img, idx) => `
            <button data-index="${idx}" class="gallery-btn ${idx === currentImageIndex ? 'active' : ''}">
              <img src="${img}" alt="${currentPortfolioItem.title} ${idx + 1}">
            </button>
          `).join('')}
        </div>
      ` : ''}
      <div class="portfolio-modal-info">
        <span class="portfolio-modal-type">Images</span>
        <h3 class="portfolio-modal-title">${currentPortfolioItem.title}</h3>
      </div>
    `;
  }
  
  portfolioModalContent.innerHTML = content;
  
  // Add event listeners for gallery buttons
  const galleryBtns = portfolioModalContent.querySelectorAll('.gallery-btn');
  galleryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const index = parseInt(btn.dataset.index);
      console.log('Gallery button clicked, index:', index);
      changePortfolioImage(index);
    });
    
    // Also add touchstart for better mobile support
    btn.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const index = parseInt(btn.dataset.index);
      console.log('Gallery button touched, index:', index);
      changePortfolioImage(index);
    });
  });
}

function changePortfolioImage(index) {
  currentImageIndex = index;
  renderPortfolioModalContent();
}

// Make function globally accessible for onclick handlers
window.changePortfolioImage = changePortfolioImage;

// ============================================
// SERVICE MODAL
// ============================================

const serviceModal = document.getElementById('serviceModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
let currentService = null;

function openServiceModal(index) {
  currentService = servicesData[index];
  modalIcon.innerHTML = currentService.icon;
  modalTitle.textContent = currentService.title;
  modalDescription.textContent = currentService.details;
  modalFeatures.innerHTML = currentService.features.map(feature => `
    <div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      ${feature}
    </div>
  `).join('');
  serviceModal.classList.add('active');
}

function closeServiceModal() {
  serviceModal.classList.remove('active');
  currentService = null;
}

function contactForService() {
  const whatsappMessage = `Bonjour AKA Junior,\n\nJe suis intéressé(e) par votre service : ${currentService.title}\n\nJe souhaite démarrer un projet avec vous. Pouvez-vous me renseigner sur ce service ?`;
  const whatsappUrl = `https://wa.me/2250708105701?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
  closeServiceModal();
}

// Make functions globally accessible for onclick handlers
window.openServiceModal = openServiceModal;
window.closeServiceModal = closeServiceModal;
window.closePortfolioModal = closePortfolioModal;
window.contactForService = contactForService;

// ============================================
// FAQ
// ============================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all
    faqItems.forEach(i => i.classList.remove('active'));
    
    // Open clicked if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  const whatsappMessage = `*Nouveau message de contact*\n\n*Nom:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
  const whatsappUrl = `https://wa.me/2250708105701?text=${encodeURIComponent(whatsappMessage)}`;
  
  window.open(whatsappUrl, '_blank');
  
  contactForm.reset();
});

// ============================================
// BACK TO TOP
// ============================================

const backToTop = document.getElementById('backToTop');

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide back to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.style.opacity = '1';
    backToTop.style.pointerEvents = 'auto';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.pointerEvents = 'none';
  }
});

// Initially hide
backToTop.style.opacity = '0';
backToTop.style.pointerEvents = 'none';

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
