# Projet Bille

Bienvenue dans **Projet Bille**, une animation interactive de billes en mouvement réalisée avec **React, TypeScript, CSS, HTML et JavaScript**.

![Demo](https://projet-bille.netlify.app/demo.gif)

## 🌐 Accéder au projet

Vous pouvez voir le projet en ligne ici : [projet-bille.netlify.app](https://projet-bille.netlify.app/)

---

## 📚 Description

Ce projet propose une **animation dynamique** de billes qui se déplacent de manière fluide sur un **canvas HTML5**, avec des interactions en fonction des mouvements de la souris et du redimensionnement de la fenêtre.

### 🔎 Fonctionnalités principales

- ✅ Animation fluide et réactive grâce à **requestAnimationFrame**
- ✅ Redimensionnement automatique pour s'adapter à la taille de l'écran
- ✅ Effet de connexion entre les billes selon leur proximité
- ✅ Interaction avec la souris pour modifier les positions
- ✅ Optimisation des performances pour garantir une expérience fluide

---

## 💪 Technologies utilisées

- **React** - Composants réutilisables et gestion de l'état
- **TypeScript** - Typage strict pour un code robuste
- **CSS** - Mise en page réactive et animations visuelles
- **HTML5 Canvas** - Dessin et animation performants
- **Netlify** - Déploiement facile et rapide

---

## 🛠 Installation et exécution

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/yourusername/projet-bille.git
   ```

2. Accédez au dossier du projet :
   ```bash
   cd projet-bille
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Lancez l'application en local :
   ```bash
   npm run dev
   ```

---

## 🛡️ Configuration

Aucune configuration supplémentaire n'est requise. L'application est prête à l'emploi après installation.

---

## 📅 Fonctionnement du projet

L'animation repose sur la manipulation du contexte 2D du canvas. Les étapes clés sont :

1. **Création des billes** : Génération de positions aléatoires et de couleurs
2. **Mise à jour des positions** : Gestion des collisions avec les bords de l'écran
3. **Connexion des billes** : Dessin de lignes entre les billes proches
4. **Gestion des événements** : Interaction avec la souris et redimensionnement de la fenêtre

---

## 📱 Aperçu du code

```tsx
const canvasRef = useRef<HTMLCanvasElement | null>(null);

useEffect(() => {
  const canvas = canvasRef.current!;
  const context = canvas.getContext("2d");

  // Initialisation de l'animation
  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
  }

  animate();
}, []);

return <canvas ref={canvasRef} className="bille-canvas" />;
```

---

## 👥 Contributeurs

- [Ryan Decian](https://github.com/ryandecian)

N'hésitez pas à proposer des améliorations ou signaler des bugs via les **issues** du projet.

---

## 📤 Déploiement

Le projet est déployé via **Netlify** pour une mise en ligne rapide et efficace. Pour déployer une nouvelle version, exécutez :

```bash
npm run build
```

Puis envoyez les fichiers générés dans le dossier `dist` sur Netlify.

---

## 📈 Roadmap

- [ ] Ajout de nouvelles animations de particules
- [ ] Amélioration des performances pour les écrans haute résolution
- [ ] Intégration d'une interface utilisateur pour personnaliser l'animation

---

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

Merci d'avoir consulté ce projet ! N'hésitez pas à me faire part de vos retours 🚀

