# CampusNumerique - Landing Page

Site web officiel de CampusNumerique, une initiative de formation en technologies numériques basée à Sangmélima, Cameroun.

## 🚀 À propos

CampusNumerique est une entreprise d'éducation aux nouvelles technologies dédiée à offrir aux collégiens, lycéens, étudiants et travailleurs une formation de pointe en codage et en art numérique.

## ✨ Fonctionnalités

- 🎨 Design moderne et responsive (mobile-first)
- 📱 Interface optimisée pour tous les appareils
- 🎓 Présentation des bootcamps et formations
- 📅 Détails des sessions disponibles
- 💬 Section FAQ
- 📞 Formulaire de contact
- 🌐 Support français

## 🛠️ Technologies utilisées

- **Framework**: [Next.js 16.2.9](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Hosting**: AWS Amplify
- **CI/CD**: Automated deployment via GitHub

## 📦 Installation

1. Cloner le repository :
```bash
git clone https://github.com/Arnauldzeh/campus-numerique-landing-page.git
cd campus-numerique-landing-page/landing-page
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🚀 Déploiement

### Déploiement sur AWS Amplify

1. **Pusher votre code sur GitHub** :
```bash
cd landing-page
git init
git add .
git commit -m "Initial commit - CampusNumerique landing page"
git branch -M master
git remote add origin https://github.com/Arnauldzeh/campus-numerique-landing-page.git
git push -u origin master
```

2. **Configurer AWS Amplify** :
   - Aller sur [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Cliquer sur "New app" → "Host web app"
   - Sélectionner "GitHub" et autoriser l'accès
   - Choisir votre repository `campus-numerique-landing-page`
   - Configurer le build :
     - **App name**: campus-numerique
     - **Branch**: master
     - **Build settings**: Amplify détectera automatiquement le fichier `amplify.yml`
   - Cliquer sur "Save and deploy"

3. **Variables d'environnement** (si nécessaire) :
   - Dans Amplify Console → App settings → Environment variables
   - Ajouter vos variables si besoin

4. **Custom domain** (optionnel) :
   - Aller dans "Domain management"
   - Ajouter votre domaine personnalisé

### Configuration avancée

Le fichier `amplify.yml` est déjà configuré pour :
- ✅ Installation des dépendances avec npm
- ✅ Build optimisé de Next.js
- ✅ Cache des modules pour des builds plus rapides
- ✅ Support des routes dynamiques Next.js

### Déploiement manuel (alternative)

```bash
# Installer AWS Amplify CLI
npm install -g @aws-amplify/cli

# Configurer Amplify
amplify configure

# Initialiser le projet
amplify init

# Publier
amplify publish
```

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build de production
- `npm start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Personnalisation

### Couleurs principales
- Purple: `#7C3AED` (purple-600)
- Orange: `#F97316` (orange-500)
- Gray dark: `#1F2937` (gray-800)

### Modifier le contenu

- **Page d'accueil**: `app/page.tsx`
- **Page bootcamp**: `app/bootcamp/[id]/page.tsx`
- **Layout global**: `app/layout.tsx`


## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou un pull request.