# LORIS LAZULIS

> **Positionnement** : accompagnement indépendant, humain, rigoureux, discret.
> **Cible** : particuliers très aisés (15k–100k€+), rationnels, peu pressés, exigeants.
> **Rôle** : sécuriser la décision, pas vendre des pierres.

---

# 1. STACK TECHNIQUE RECOMMANDÉE (CLAIRE ET EFFICACE)

## Stack technique — Loris Lazulis (site principal)

### Objectif
Site vitrine + contenu à forte valeur ajoutée, orienté SEO, performance et crédibilité haut de gamme.  
Aucune base de données. Interactivité minimale et ciblée. Maintenance faible.

---

### Framework & architecture
- **Astro** (Static Site Generator)
- **TypeScript**
- Architecture **Astro Islands**  
  → JavaScript chargé uniquement là où nécessaire

---

### Styling & design
- **Tailwind CSS**
- **@tailwindcss/typography** (blog / articles longs)
- CSS moderne (transitions, animations subtiles)
- Design sobre, lisible, orienté *quiet luxury*

---

### Interactivité
- **React** (utilisé uniquement pour des islands spécifiques)
  - formulaire de contact / qualification
  - composants interactifs isolés si besoin
- Hydratation contrôlée (`client:load`, `client:idle`)

---

### Contenu & SEO
- Pages statiques (SSG)
- Blog en **MDX**
- SEO on-page par page (title, meta description, OpenGraph)
- Génération automatique :
  - sitemap (`@astrojs/sitemap`)
  - RSS (`@astrojs/rss`)
- Structure prête pour internationalisation (`/en` plus tard)

---

### Formulaire de contact
- Aucun backend propriétaire
- Envoi direct par email via un service tiers
- Netlify Forms 
- Pas de stockage de données sensibles
- RGPD simplifié (mention claire + email)

---

### Déploiement
- Netlify 
- HTTPS automatique
- Build statique → performances élevées, surface d’attaque minimale


---

### Principes clés
- Astro pour tout le contenu
- React uniquement quand nécessaire
- Pas de complexité inutile
- Performance, lisibilité, sobriété


---

# 2. ARCHITECTURE DES PAGES

/src
 |-- pages/
 |   |-- index.astro
 |   |-- comment-je-travaille.astro
 |   |-- honoraires.astro
 |   |-- provenance-ethique.astro
 |   |-- contact.astro
 |   |-- blog/
 |   |   |-- index.astro
 |   |   |-- [slug].astro
 |
 |-- layouts/
 |   |-- BaseLayout.astro
 |
 |-- components/
 |   |-- Header.astro
 |   |-- Footer.astro
 |   |-- CTA.astro
 |   |-- ReactForm.jsx
 |
 |-- content/
 |   |-- blog/ (MDX)


# 3. PAGE D’ACCUEIL — TEXTE COMPLET

## H1

**Loris Lazulis**

## H2 (claim principal)

Accompagnement indépendant pour l’achat de pierres naturelles certifiées

## Introduction

Acheter une pierre précieuse est une décision engageante.
Le marché est complexe, les informations souvent partielles, et les erreurs coûteuses.

J’accompagne des particuliers dans leurs projets d’acquisition afin de sécuriser la démarche, clarifier les options, et réduire les risques — sans jamais vendre de pierres.

## CTA

→ Présenter mon projet

---

## Section : Le problème

Entre certificats difficiles à lire, provenance parfois floue, et vendeurs aux intérêts divergents, beaucoup d’acheteurs préfèrent être accompagnés avant de décider.

---

## Section : Mon rôle

Je n’interviens ni comme vendeur, ni comme expert gemmologue.

Mon rôle consiste à :

* analyser la faisabilité d’un projet
* rechercher des offres cohérentes
* lire et vérifier les certificats existants
* structurer une transaction sécurisée
* attirer l’attention sur les limites et compromis

La décision finale appartient toujours au client.

---

## Section : Comment se déroule un accompagnement

1. Vous décrivez votre projet (pierre, budget, usage)
2. Je valide la faisabilité et le cadre
3. Je recherche et analyse des options pertinentes
4. Vous décidez librement

---

## Section : Provenance & éthique

La provenance des pierres est un sujet sensible.

Je privilégie, lorsque c’est possible, des filières documentées, des vendeurs établis, et des zones d’extraction connues pour leurs standards.

Je peux refuser un dossier lorsque la provenance est trop floue ou incompatible avec ces principes.

---

## Section : Pour qui / pas pour qui

**Ce service est adapté si**

* votre budget est défini
* vous cherchez une pierre naturelle certifiée
* vous souhaitez comprendre avant d’acheter

**Ce service n’est pas adapté si**

* vous cherchez le prix le plus bas à tout prix
* vous souhaitez une validation gratuite
* vous êtes dans l’urgence

---

# 4. PAGE « COMMENT JE TRAVAILLE »

## H1

Comment je travaille

### Ce que je fais

* cadrage et qualification
* sourcing ciblé
* analyse de certificats gemmologiques
* structuration de la transaction

### Ce que je ne fais pas

* expertise gemmologique
* garantie de valeur
* vente ou revente de pierres

### Authenticité

Toute pierre présentée est accompagnée d’un certificat émis par un laboratoire indépendant reconnu.

### Limites

Toute acquisition comporte des compromis. Mon rôle est de les rendre visibles.

---

# 5. PAGE « HONORAIRES »

## H1

Honoraires

* Acompte de mission : 500 €
* Commission : 6 à 8 % du prix de la pierre
* Acompte déduit en cas d’acquisition
* Acompte remboursé si aucune piste conforme n’est trouvée

Aucun frais caché. Aucun engagement automatique.

---

# 6. PAGE « PROVENANCE & ÉTHIQUE »

## H1

Provenance des pierres et considérations éthiques

L’origine des pierres précieuses est parfois difficile à établir avec certitude.

Dans mon travail, je porte une attention particulière à :

* la transparence des vendeurs
* la cohérence des documents
* la traçabilité disponible

Je peux refuser un dossier lorsque les zones grises sont trop importantes.

Ce service vise à réduire les risques, pas à promettre une perfection absolue.

---

# 7. PAGE CONTACT

Formulaire conseillé :

* Type de pierre recherchée
* Budget estimé
* Usage (bijou, collection, autre)
* Délai
* Message libre

CTA : Soumettre mon projet

---

# 8. BLOG — STRATÉGIE SEO COMPLÈTE

## Articles piliers (à écrire en priorité)

1. Comment sécuriser l’achat d’une pierre précieuse
2. Comprendre un certificat gemmologique sans être expert
3. Pierres naturelles : traitements, limites et idées reçues
4. Provenance des pierres précieuses : ce que l’on sait réellement
5. Acheter une pierre en ligne : risques et précautions

## Articles longue traîne

* Différence entre pierre naturelle et pierre synthétique
* Chauffe des saphirs : ce que cela signifie
* Pourquoi certaines pierres sont impossibles à tracer
* Prix bas et pierres précieuses : pourquoi se méfier

---

# 9. SEO — MOTS-CLÉS À CIBLER (FR)

* accompagnement achat pierre précieuse
* pierre naturelle certifiée
* conseil achat pierre
* certificat gemmologique comprendre
* provenance pierre précieuse

---

# 10. TON FIL ROUGE (RAPPEL)

* Pas de promesse
* Pas d’urgence
* Beaucoup d’écrit
* Refus assumé
* Calme constant

> Tu n’aides pas à acheter.
> Tu aides à ne pas se tromper.

---

Document prêt à être utilisé comme cahier des charges + contenu copy-paste.
