// ============================================
// FICHIER DE CONFIGURATION DU SITE
// Modifiez les valeurs ci-dessous pour personnaliser votre site
// ============================================

// ============================================
// INFORMATIONS GÉNÉRALES DU SITE
// ============================================
const SITE_CONFIG = {
  // Meta informations
  title: "AKA Junior | Expert IA & Design Premium",
  description: "Expert en Intelligence Artificielle et Design, je propulse votre business avec des solutions web, vidéo et graphiques d'une autorité inégalée.",
  
  // Favicon
  favicon: "monlogo.png",
  
  // WhatsApp (pour le contact)
  whatsappNumber: "0594786319",
  
  // Copyright
  copyright: "© 2026 AKA Junior. Tous droits réservés."
};

// ============================================
// NAVBAR
// ============================================
const NAVBAR_CONFIG = {
  logo: {
    image: "monlogo.png",
    alt: "AKA Junior Logo",
    text: "akajunior"
  },
  links: [
    { text: "Portfolio", href: "#portfolio" },
    { text: "Services", href: "#services" },
    { text: "Formations", href: "#formations" },
    { text: "Expertise", href: "#expertise" },
    { text: "Témoignages", href: "#témoignages" }
  ],
  ctaButton: {
    text: "Démarrer un projet",
    href: "https://wa.me/2250594786319?text=Bonjour%20AKA%20Junior,%0A%0AJe%20souhaite%20d%C3%A9marrer%20un%20projet%20avec%20vous.%0A%0APouvez-vous%20me%20renseigner%20sur%20vos%20services%20?"
  }
};

// ============================================
// HERO SECTION
// ============================================
const HERO_CONFIG = {
  image: {
    src: "junior2.png",
    alt: "AKA Junior Portrait"
  },
  tags: ["Innovation", "IA Générative", "Design"],
  title: {
    line1: "L'IA au service",
    line2: "du Design Premium",
    highlight: "du Design Premium"
  },
  description: " Je suis <strong style='color: white;'>AKA Junior</strong> , spécialiste en marketing digital, intelligence artificielle générative et design premium. J’accompagne les entreprises et les marques dans la création d’expériences web, visuelles et stratégiques capables de renforcer leur image et accélérer leur croissance.",
  ctaButton: {
    text: "Découvrir mes services",
    href: "#services"
  },
  stats: [
    { value: 6, label: "Années d'Expérience" },
    { value: 80, label: "Projets" },
    { value: 20, label: "Élèves Formés" }
  ]
};

// ============================================
// ABOUT SECTION
// ============================================
const ABOUT_CONFIG = {
  badge: "Qui est AKA Junior ?",
  title: {
    line1: "L'IA, je ne l'explique pas.",
    line2: "Je la maîtrise pour vous.",
    highlight: "Je la maîtrise pour vous."
  },
  description: "Avec plus de 6 ans d’expérience, je combine intelligence artificielle générative, design premium, développement web et stratégie digitale pour créer des expériences capables de transformer l’image et la croissance des marques. Certifié Google Ads et Meta Blueprint, j’accompagne entreprises, créateurs et équipes dans l’utilisation concrète de l’IA pour produire plus vite, mieux et avec plus d’impact.",
  cards: [
    {
      title: "Ingénierie IA & Web",
      description: "Fusionner l'IA générative et le développement web pour créer des plateformes intelligentes et performantes."
    },
    {
      title: "Direction Artistique",
      description: "Design graphique premium et montage vidéo cinématique pour une identité visuelle d'autorité."
    },
    {
      title: "Stratégie & Transmission",
      description: "Accompagner les marques et former les talents aux outils qui redéfinissent le marché actuel."
    }
  ]
};

// ============================================
// SERVICES SECTION
// ============================================
const SERVICES_CONFIG = [
  {
    image: "dev web.png",
    alt: "Création de site web",
    title: "Création de site web",
    description: "Conception de sites vitrines et e-commerce ultra-performants, optimisés pour la conversion et le SEO.",
    details: "Nous créons des expériences web uniques qui captivent vos visiteurs dès la première seconde. De la landing page minimaliste au portail d'entreprise complexe, chaque pixel est pensé pour servir vos objectifs business.",
    features: ["Design Responsive", "Optimisation SEO", "Vitesse de chargement"],
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>`
  },
  {
    image: "ia.png",
    alt: "Intelligence Artificielle",
    title: "Intelligence Artificielle",
    description: "Intégration d'agents IA et automatisation de workflows pour scaler votre productivité.",
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
    image: "ideo.png",
    alt: "Montage Vidéo",
    title: "Montage Vidéo",
    description: "Montage dynamique et cinématique pour vos réseaux sociaux et publicités IA-augmenté.",
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
    image: "design.png",
    alt: "Design Graphique",
    title: "Design Graphique",
    description: "Identité visuelle et branding premium pour affirmer votre autorité sur le marché.",
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
// PORTFOLIO SECTION
// ============================================
const PORTFOLIO_CONFIG = {
  title: "Des créations",
  filters: [
    { text: "Tous", value: "all" },
    { text: "Vidéos", value: "videos" },
    { text: "Images", value: "images" }
  ],
  items: [
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
    },
    { 
      id: 13, 
    type: 'videos', 
      title: 'Vidéos IA ', 
      img: 'pub coca.mp4',
      gallery: []
    }
  ]
};

// ============================================
// FORMATIONS SECTION
// ============================================
const FORMATIONS_CONFIG = {
  badge: "Mes Formations",
  title: "Passez au niveau supérieur",
  items: [
    {
      image: "100 photo.png",
      alt: "100 Photos Mémorables",
      badge: "66% OFF",
      title: "100 Photos Mémorables",
      description: "Apprenez à capturer et éditer des photos professionnelles pour vos événements avec votre smartphone.",
      features: ["Techniques de pose", "Éclairage mobile", "Retouche Lightroom", "Presets inclus"],
      info: ["E-learning", "WhatsApp", "Illimité"],
      ctaButton: {
        text: "Découvrir la formation",
        href: "https://akajunior.mychariow.shop/prompt-aniversaire"
      }
    },
    {
      image: "gemini.png",
      alt: "Génération Vidéo IA",
      badge: "50% OFF",
      title: "Génération Vidéo IA",
      description: "Maîtrisez les outils de pointe comme VEO 3 et Gemini Pro pour créer des vidéos cinématiques.",
      features: ["VEO 3 Mastery", "Gemini Pro Prompting", "Montage IA", "Sound Design"],
      info: ["E-learning", "WhatsApp", "Illimité"],
      ctaButton: {
        text: "Découvrir la formation",
        href: "https://akajunior.mychariow.shop/formationveo3"
      }
    }
  ]
};

// ============================================
// EXPERTISE SECTION
// ============================================
const EXPERTISE_CONFIG = {
  badge: "10+ Certifications",
  title: {
    line1: "Une expertise",
    line2: "validée et reconnue",
    highlight: "validée et reconnue"
  },
  stats: [
    { value: 6, label: "Années d'expérience" },
    { value: 20, label: "Certifications" },
    { value: 20, label: "Personnes formées" },
    { value: 2, label: "Formations au catalogue" }
  ],
  logos: [
    { text: "G", name: "Google" },
    { text: "Û", name: "Udemy" },
    { text: "✦", name: "Gemini" },
    { text: "H", name: "HubSpot" },
    { text: "M", name: "Microsoft" },
    { text: "C", name: "ChatGPT" },
    { text: "AI", name: "Claude AI" },
    { text: "f", name: "Facebook" }
  ],
  marquee: [
    "Google Ads", "Google Analytics", "Meta Blueprint", "HubSpot Design", "IA Specialist", "UI/UX Master"
  ]
};

// ============================================
// FAQ SECTION
// ============================================
const FAQ_CONFIG = {
  badge: "Vos questions, mes réponses",
  title: {
    line1: "Tout ce que vous devez",
    line2: "savoir",
    highlight: "savoir"
  },
  items: [
    {
      question: "Quel est le niveau requis pour suivre vos formations ?",
      answer: "Nos formations sont conçues pour être accessibles à tous, du débutant complet à l'expert souhaitant se perfectionner sur les derniers outils d'IA."
    },
    {
      question: "Les formations sont-elles en direct ou en autonomie ?",
      answer: "Vous avez accès à une plateforme de cours en ligne disponible 24h/24 pour apprendre à votre rythme, complétée par des sessions de coaching mensuelles."
    },
    {
      question: "Comment fonctionne la communauté WhatsApp privée ?",
      answer: "Dès votre inscription, vous recevez un lien pour rejoindre notre groupe exclusif où vous pouvez poser vos questions et échanger avec d'autres passionnés."
    },
    {
      question: "Combien de temps ai-je accès à la formation ?",
      answer: "L'accès est illimité et à vie. Vous bénéficiez également de toutes les mises à jour futures gratuitement."
    },
    {
      question: "Les formations sont-elles mises à jour ?",
      answer: "Oui, le monde de l'IA évolue vite. Nous mettons à jour nos contenus dès qu'une nouvelle technologie majeure (comme une nouvelle version de Midjourney ou ChatGPT) sort."
    },
    {
      question: "Vais-je vraiment pouvoir créer des choses concrètes sans compétences techniques ?",
      answer: "Absolument. Notre méthode se concentre sur l'utilisation d'outils no-code et d'IA qui ne demandent aucune ligne de code pour obtenir des résultats professionnels."
    }
  ]
};

// ============================================
// TESTIMONIALS SECTION
// ============================================
const TESTIMONIALS_CONFIG = {
  title: "Ce qu'ils en disent",
  items: [
    {
      text: "J'ai suivi la formation sur VEO 3 et Gemini Pro. Au début, j'étais sceptique sur l'efficacité de ces outils pour mon business de création de contenu. Après 3 semaines, j'ai réduit mon temps de production de 60% tout en améliorant la qualité. Les prompts fournis sont vraiment pratiques et la communauté WhatsApp m'a aidé à débloquer plusieurs situations.",
      author: {
        name: "Kouassi Emmanuel",
        role: "Créateur de contenu, Abidjan"
      }
    },
    {
      text: "AKA Junior a créé notre site vitrine et notre identité visuelle complète. Ce qui m'a impressionné, c'est qu'il a pris le temps de comprendre notre secteur avant de proposer quoi que ce soit. Le résultat est un design qui reflète vraiment notre marque, pas un template générique. Les délais ont été respectés et le support après livraison est excellent.",
      author: {
        name: "Adjoua Mariam",
        role: "Fondatrice, EcoBoutique Côte d'Ivoire"
      }
    },
    {
      text: "Je cherchais quelqu'un pour former mon équipe aux outils d'IA. AKA Junior a adapté la formation à nos besoins spécifiques en marketing digital. Mes collaborateurs sont maintenant autonomes sur Midjourney, ChatGPT et les outils d'automatisation. Le ROI de cette formation est déjà visible après 2 mois.",
      author: {
        name: "Yao Serge",
        role: "Directeur Marketing, Agence Com'Abidjan"
      }
    }
  ]
};

// ============================================
// CONTACT SECTION
// ============================================
const CONTACT_CONFIG = {
  badge: "Travaillons ensemble",
  title: {
    line1: "Une question ?",
    line2: "Parlons-en.",
    highlight: "Parlons-en."
  },
  description: "Formation ou Service. Je réponds à chaque message personnellement.",
  form: {
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "votre@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Décrivez votre projet ou posez votre question...",
    submitButton: "Envoyer le message"
  },
  info: [
    {
      title: "Email",
      value: "akaassafouajoseph@gmail.com",
      button: null
    },
    {
      title: "WhatsApp",
      value: "Discutons sur WhatsApp",
      button: {
        text: "Envoyer un message",
        href: "https://wa.me/2250594786319"
      }
    }
  ]
};

// ============================================
// WHY WORK WITH ME SECTION
// ============================================
const WHY_WORK_CONFIG = {
  badge: "Pourquoi travailler avec AKA Junior ?",
  subtitle: "L’alliance entre IA, design et performance",
  cards: [
    {
      title: "Des solutions pensées pour renforcer votre image, accélérer votre croissance et imposer votre présence digitale.",
      description: "Créer des solutions pensées pour la visibilité, la croissance et la conversion.",
      icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>`
    },
    {
      title: "Fusion entre IA, design et marketing digital",
      description: "Une combinaison moderne entre créativité, technologie et performance.",
      icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>`
    },
    {
      title: "Accompagnement personnalisé",
      description: "Chaque projet est conçu selon les objectifs et l'identité du client.",
      icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>`
    },
    {
      title: "Production rapide et moderne",
      description: "Utilisation des meilleurs outils actuels pour produire efficacement avec une qualité premium.",
      icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>`
    },
    {
      title: "Vision premium et créative",
      description: "Des expériences digitales modernes qui renforcent l'image et l'autorité des marques.",
      icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>`
    },
    {
      title: "Expertise certifiée et continuellement mise à jour",
      description: "Des compétences validées et adaptées aux évolutions constantes du digital et de l'intelligence artificielle.",
      icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>`
    }
  ]
};

// ============================================
// FOOTER
// ============================================
const FOOTER_CONFIG = {
  logo: {
    image: "monlogo.png",
    alt: "AKA Junior Logo",
    text: "AKA Junior"
  },
  description: "L'autorité du design premium et de l'IA générative. Expert Web, Vidéo et Design.",
  socials: [
    { href: "https://www.instagram.com/juniorsurintagram?igsh=MXdmYnJ3NjIzZW93Zg%3D%3D&utm_source=qr", icon: "instagram" },
    { href: "https://www.facebook.com/share/18fR1xHqMV/?mibextid=wwXIfr", icon: "facebook" },
    { href: "#", icon: "linkedin" },
    { href: "#", icon: "github" }
  ],
  copyright: "© 2026 AKA Junior. Tous droits réservés."
};




