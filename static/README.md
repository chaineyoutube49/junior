# AKA Junior - Site Web Statique

## 🎉 Conversion Terminée !

Le projet React/Vite a été entièrement converti en site web statique autonome.

## 📁 Structure du dossier

```
static/
├── index.html          # Fichier principal à ouvrir
├── style.css           # Tous les styles (remplace Tailwind CSS)
├── script.js           # Toutes les interactions (remplace React)
├── *.png               # Toutes les images
├── *.jpg               # Toutes les images
└── *.mp4               # Toutes les vidéos
```

## 🚀 Comment utiliser

### Méthode 1 : Double-clic (Recommandée)
1. Ouvrez le dossier `static`
2. Double-cliquez sur `index.html`
3. Le site s'ouvre directement dans votre navigateur

### Méthode 2 : Glisser-déposer
1. Ouvrez votre navigateur
2. Glissez le fichier `index.html` dans la fenêtre du navigateur

## ✅ Ce qui a été modifié

### 1. **Framework supprimé**
- ❌ React 19
- ❌ Vite
- ❌ TypeScript
- ❌ Tailwind CSS v4
- ❌ Motion (Framer Motion)
- ❌ Lucide React
- ❌ Canvas Confetti

### 2. **Remplacements effectués**
- ✅ React → HTML pur
- ✅ Tailwind CSS → CSS pur (style.css)
- ✅ Lucide React → SVG inline
- ✅ Motion → Animations CSS
- ✅ Composants React → JavaScript vanilla (script.js)

### 3. **Fonctionnalités conservées**
- ✅ Design identique
- ✅ Couleurs identiques
- ✅ Polices identiques (Montserrat & Inter)
- ✅ Animations identiques
- ✅ Responsive mobile
- ✅ Navigation
- ✅ Portfolio avec filtres
- ✅ Modals (services & portfolio)
- ✅ Formulaire de contact
- ✅ FAQ accordéon
- ✅ Compteurs animés
- ✅ Effets de hover
- ✅ Background blobs animés
- ✅ Scanning lights

## 🎯 Ce que vous devez faire

1. **Ouvrir** le fichier `static/index.html` dans votre navigateur
2. **C'est tout !** Plus besoin de :
   - npm
   - node.js
   - npm run dev
   - serveur local
   - terminal

## 📝 Notes importantes

- Le site fonctionne **100% localement**
- Aucune connexion internet requise pour le fonctionnement de base
- Les liens externes (WhatsApp, formations) nécessitent internet
- Toutes les images et vidéos sont incluses dans le dossier
- Le site est **complètement autonome**

## 🔧 Si vous voulez modifier le site

### ⚡ MÉTHODE RAPIDE : constants.js (RECOMMANDÉ)
Toutes les données du site sont centralisées dans le fichier `constants.js`. C'est le moyen le plus simple de modifier votre site !

**Comment utiliser constants.js :**
1. Ouvrez le fichier `constants.js` dans un éditeur de texte
2. Modifiez les valeurs selon vos besoins (textes, images, liens, etc.)
3. Sauvegardez le fichier
4. Rafraîchissez la page `index.html` dans votre navigateur

**Sections modifiables dans constants.js :**
- `SITE_CONFIG` : Titre, description, favicon, numéro WhatsApp
- `NAVBAR_CONFIG` : Logo, liens de navigation
- `HERO_CONFIG` : Image, tags, titre, description, statistiques
- `ABOUT_CONFIG` : Badge, titre, description, cartes
- `SERVICES_CONFIG` : Liste des services avec images, descriptions, fonctionnalités
- `PORTFOLIO_CONFIG` : Titre, filtres, liste des projets (images/vidéos)
- `FORMATIONS_CONFIG` : Liste des formations avec badges, descriptions, liens
- `EXPERTISE_CONFIG` : Badge, titre, statistiques, logos
- `FAQ_CONFIG` : Liste des questions/réponses
- `TESTIMONIALS_CONFIG` : Liste des témoignages
- `CONTACT_CONFIG` : Formulaire de contact, informations de contact
- `FOOTER_CONFIG` : Logo, description, copyright

### Modifier le contenu manuellement
- **Textes** : Éditez directement dans `index.html`
- **Styles** : Éditez dans `style.css`
- **Interactions** : Éditez dans `script.js`

### Ajouter/modifier des images
1. Copiez vos nouvelles images dans le dossier `static/`
2. Mettez à jour les références dans `constants.js` (méthode rapide)
3. OU mettez à jour les références dans `index.html` ou `script.js` (méthode manuelle)

### Modifier le portfolio
Éditez le tableau `PORTFOLIO_CONFIG.items` dans `constants.js` (méthode rapide)
OU éditez le tableau `portfolioItems` dans `script.js` (méthode manuelle)

### Modifier les services
Éditez le tableau `SERVICES_CONFIG` dans `constants.js` (méthode rapide)
OU éditez le tableau `servicesData` dans `script.js` (méthode manuelle)

## 💡 Avantages de la version statique

- ✅ **Aucune installation requise**
- ✅ **Ultra-rapide** (pas de build)
- ✅ **Portable** (dossier unique)
- ✅ **Compatible tous navigateurs**
- ✅ **Facile à héberger** (n'importe quel hébergeur statique)
- ✅ **SEO friendly**
- ✅ **Léger**

## 🎨 Design conservé

- Couleur principale : `#FF0000` (rouge)
- Fond : `#0D0D0D` (noir)
- Cartes : `#1A1A1A` (gris foncé)
- Police display : Montserrat
- Police body : Inter

---

**Créé le : 24 mai 2026**
**Version : 1.0.0 - Statique**
