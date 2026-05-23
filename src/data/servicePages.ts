export interface ServicePageData {
  slug: string;
  title: string;
  description: string;
  badge: string;
  h1: string;
  lead: string[];
  intent: string;
  situations: string[];
  deliverables: Array<{
    title: string;
    text: string;
  }>;
  process: Array<{
    title: string;
    text: string;
  }>;
  checks: string[];
  warningSigns: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  related: Array<{
    title: string;
    href: string;
    text: string;
  }>;
  updatedDate: string;
}

const commonRelated = [
  {
    title: "Comment je travaille",
    href: "/comment-je-travaille",
    text: "Le cadre complet de l'accompagnement, les limites et les étapes."
  },
  {
    title: "Honoraires",
    href: "/honoraires",
    text: "Acompte de mission, commission et frais tiers éventuels."
  },
  {
    title: "Présenter mon projet",
    href: "/contact",
    text: "Décrire votre besoin pour recevoir une première réponse."
  }
];

export const servicePages: ServicePageData[] = [
  {
    slug: "accompagnement-achat-pierre-precieuse",
    title: "Accompagnement achat pierre précieuse",
    description: "Aide indépendante pour acheter une pierre précieuse certifiée : cadrage, analyse des offres, certificats, provenance et transaction sécurisée.",
    badge: "Service principal",
    h1: "Accompagnement pour l'achat d'une pierre précieuse",
    lead: [
      "Acheter une pierre précieuse engage souvent plusieurs milliers d'euros, parfois beaucoup plus. Le problème n'est pas seulement de trouver une belle pierre : il faut comprendre ce que l'on achète, vérifier les documents, évaluer le vendeur et refuser les zones grises.",
      "Mon rôle est d'apporter un regard indépendant avant la décision. Je ne vends pas de pierres, je n'ai pas de stock et je ne suis pas rémunéré par les vendeurs. L'accompagnement sert à cadrer votre besoin, analyser les propositions et réduire les risques avant paiement."
    ],
    intent: "Cette page s'adresse aux particuliers qui veulent acheter une pierre naturelle certifiée sans dépendre uniquement du discours commercial du vendeur.",
    situations: [
      "Vous avez repéré une pierre mais vous ne savez pas si le prix est cohérent.",
      "Vous hésitez entre plusieurs saphirs, rubis, émeraudes ou spinelles avec des certificats différents.",
      "Vous voulez comprendre si le traitement, l'origine ou la certification changent réellement la valeur.",
      "Vous achetez à distance et souhaitez sécuriser les conditions de retour, d'inspection ou de re-certification."
    ],
    deliverables: [
      {
        title: "Cadrage du besoin",
        text: "Clarification du type de pierre, du budget, de l'usage final, des traitements acceptables et des compromis réalistes."
      },
      {
        title: "Analyse des propositions",
        text: "Lecture des annonces, comparaison des informations, cohérence entre photos, certificat, prix et discours du vendeur."
      },
      {
        title: "Vérification documentaire",
        text: "Contrôle des certificats, du laboratoire, des numéros de rapport, des mentions de traitements et des limites du document."
      },
      {
        title: "Cadre de transaction",
        text: "Points de vigilance sur paiement, transport, assurance, période d'inspection, retour et re-certification éventuelle."
      }
    ],
    process: [
      {
        title: "Premier cadrage",
        text: "Vous décrivez le projet, le budget, les contraintes et les offres déjà identifiées."
      },
      {
        title: "Validation de faisabilité",
        text: "Je vous dis si la demande est réaliste, si elle mérite un accompagnement et où sont les risques principaux."
      },
      {
        title: "Analyse ou recherche",
        text: "Selon le cas, j'analyse les offres existantes ou je vous aide à identifier des pistes plus cohérentes."
      },
      {
        title: "Décision informée",
        text: "Vous gardez la décision finale, avec une lecture claire des atouts, limites et points bloquants."
      }
    ],
    checks: [
      "Laboratoire émetteur du certificat et possibilité de vérification en ligne.",
      "Cohérence du poids, des dimensions, de la couleur et des photos.",
      "Mention des traitements et impact probable sur la valeur.",
      "Origine géographique : ce qu'elle prouve, ce qu'elle ne prouve pas.",
      "Réputation et transparence du vendeur.",
      "Conditions de retour, inspection, assurance et paiement."
    ],
    warningSigns: [
      "Prix très inférieur au marché sans justification claire.",
      "Certificat ancien, incomplet ou émis par un laboratoire peu connu.",
      "Refus de re-certification ou d'inspection indépendante.",
      "Pression à décider vite, paiement irréversible ou vendeur difficile à identifier.",
      "Origine prestigieuse affirmée sans document vérifiable."
    ],
    faqs: [
      {
        question: "Est-ce que vous vendez des pierres ?",
        answer: "Non. Je ne vends pas de pierres, je n'ai pas de stock et je ne perçois pas de commission des vendeurs. Mon intervention porte sur l'aide à la décision et la réduction du risque."
      },
      {
        question: "Pouvez-vous garantir que l'achat sera parfait ?",
        answer: "Non. Une pierre reste un achat avec une part de subjectivité et d'incertitude. Mon travail consiste à rendre les risques visibles, vérifier les éléments contrôlables et éviter les décisions mal cadrées."
      },
      {
        question: "À partir de quel budget l'accompagnement est-il pertinent ?",
        answer: "Il devient surtout pertinent lorsque l'erreur potentielle coûte plus cher que l'accompagnement, généralement à partir de plusieurs milliers d'euros. Le premier échange sert à vérifier cette pertinence."
      }
    ],
    related: [
      {
        title: "Vérification de certificat",
        href: "/verification-certificat-gemmologique",
        text: "Contrôler ce que dit vraiment un rapport gemmologique."
      },
      {
        title: "Analyse d'annonce",
        href: "/analyse-annonce-pierre-precieuse",
        text: "Repérer les omissions et incohérences avant de payer."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "conseil-achat-pierre-precieuse",
    title: "Conseil achat pierre précieuse",
    description: "Conseil indépendant avant achat d'une pierre précieuse : comprendre les risques, comparer les offres et décider sans pression commerciale.",
    badge: "Conseil indépendant",
    h1: "Conseil avant l'achat d'une pierre précieuse",
    lead: [
      "Un achat de pierre précieuse ne se résume pas à une fiche produit. Deux pierres peuvent sembler proches à l'oeil, mais avoir des valeurs très différentes selon le traitement, l'origine, le laboratoire ou la qualité de taille.",
      "Le conseil indépendant intervient avant la décision : il sert à poser les bonnes questions, éliminer les offres fragiles et éviter de confondre une belle histoire commerciale avec une proposition solide."
    ],
    intent: "Cette page vise les acheteurs qui veulent un avis extérieur avant d'engager un budget significatif.",
    situations: [
      "Vous ne savez pas si le prix demandé est raisonnable.",
      "Vous avez reçu un certificat mais vous ne comprenez pas les implications pratiques.",
      "Vous avez besoin d'une méthode pour comparer plusieurs offres.",
      "Vous voulez savoir quelles questions poser au vendeur avant d'aller plus loin."
    ],
    deliverables: [
      {
        title: "Avis de cohérence",
        text: "Mise en perspective du prix, du type de pierre, de la qualité annoncée et du niveau de documentation."
      },
      {
        title: "Lecture des risques",
        text: "Identification des points qui peuvent affecter la valeur ou la sécurité de l'achat : traitement, origine, vendeur, modalités."
      },
      {
        title: "Questions à poser",
        text: "Liste de demandes concrètes à adresser au vendeur pour lever les ambiguïtés avant paiement."
      },
      {
        title: "Recommandation de suite",
        text: "Poursuivre, négocier, demander une re-certification, élargir la recherche ou arrêter le dossier."
      }
    ],
    process: [
      {
        title: "Contexte",
        text: "Vous transmettez les offres, certificats, photos, budget et contraintes."
      },
      {
        title: "Tri initial",
        text: "Je distingue les points vérifiables, les affirmations commerciales et les informations manquantes."
      },
      {
        title: "Analyse",
        text: "Je vous explique les conséquences concrètes de chaque point faible ou point fort."
      },
      {
        title: "Arbitrage",
        text: "Vous décidez avec une vision plus nette des compromis."
      }
    ],
    checks: [
      "Niveau de preuve derrière les affirmations du vendeur.",
      "Qualité et réputation du laboratoire.",
      "Informations manquantes dans l'annonce ou la facture.",
      "Traitements déclarés ou potentiellement sous-documentés.",
      "Comparables disponibles pour comprendre la fourchette de prix."
    ],
    warningSigns: [
      "Discours très valorisant mais peu de données mesurables.",
      "Certificat fourni seulement après insistance.",
      "Photos trop retouchées ou absence de vidéo exploitable.",
      "Vendeur qui présente une origine comme garantie absolue.",
      "Refus de temps de réflexion."
    ],
    faqs: [
      {
        question: "Un conseil ponctuel suffit-il ?",
        answer: "Parfois oui, si vous avez déjà une offre précise et une question limitée. Pour une recherche complète ou une transaction complexe, un accompagnement structuré est plus adapté."
      },
      {
        question: "Donnez-vous une estimation de valeur officielle ?",
        answer: "Non. Je peux apprécier la cohérence d'un prix avec les informations disponibles, mais je ne produis pas d'expertise officielle ni de valeur assurantielle."
      },
      {
        question: "Pouvez-vous parler directement au vendeur ?",
        answer: "Cela peut être envisagé selon le dossier, notamment pour clarifier des documents ou conditions, mais toujours dans un cadre transparent validé avec vous."
      }
    ],
    related: [
      {
        title: "Accompagnement complet",
        href: "/accompagnement-achat-pierre-precieuse",
        text: "Pour un projet qui demande plus qu'un avis ponctuel."
      },
      {
        title: "Éviter les arnaques",
        href: "/eviter-arnaque-pierre-precieuse",
        text: "Les signaux qui doivent ralentir ou stopper une décision."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "courtier-pierre-precieuse-independant",
    title: "Courtier pierre précieuse indépendant",
    description: "Courtier indépendant en pierres précieuses : aide à l'achat, analyse des offres et accompagnement sans stock ni commission vendeur.",
    badge: "Indépendance",
    h1: "Courtier en pierre précieuse indépendant",
    lead: [
      "Le mot courtier peut prêter à confusion. Ici, il ne signifie pas marchand de pierres. Mon rôle est d'accompagner l'acheteur, pas d'écouler un stock ni de pousser une offre précise.",
      "L'indépendance est le point central : je suis rémunéré par le client, pas par le vendeur. Cela permet de dire non à une proposition, de demander plus de preuves ou de recommander de ne pas acheter."
    ],
    intent: "Cette page clarifie le positionnement pour les personnes qui cherchent un intermédiaire indépendant, sans conflit d'intérêt côté vendeur.",
    situations: [
      "Vous voulez un tiers qui défende votre intérêt d'acheteur.",
      "Vous ne souhaitez pas dépendre uniquement d'un marchand ou d'une maison de vente.",
      "Vous cherchez quelqu'un capable de structurer la recherche et d'écarter les dossiers fragiles.",
      "Vous voulez comprendre la différence entre courtage, vente, expertise et conseil."
    ],
    deliverables: [
      {
        title: "Recherche orientée client",
        text: "Les critères partent de votre projet, pas d'un inventaire disponible."
      },
      {
        title: "Filtrage des offres",
        text: "Les propositions sont écartées si la documentation, le prix ou le vendeur posent problème."
      },
      {
        title: "Mise en concurrence",
        text: "Lorsque c'est possible, plusieurs options sont comparées pour éviter une décision isolée."
      },
      {
        title: "Refus assumé",
        text: "Un courtier indépendant doit pouvoir dire qu'aucune offre ne mérite d'être poursuivie."
      }
    ],
    process: [
      {
        title: "Mandat clair",
        text: "Le périmètre, les honoraires et les critères sont posés avant la recherche."
      },
      {
        title: "Sourcing sélectif",
        text: "Je privilégie les vendeurs identifiables, les documents vérifiables et les conditions raisonnables."
      },
      {
        title: "Analyse contradictoire",
        text: "Chaque offre est regardée sous l'angle des risques, pas seulement des qualités annoncées."
      },
      {
        title: "Accompagnement final",
        text: "Je vous aide à aborder les conditions pratiques sans jamais remplacer votre décision."
      }
    ],
    checks: [
      "Absence de rémunération par le vendeur.",
      "Critères écrits avant la recherche.",
      "Transparence sur les limites et frais tiers.",
      "Capacité à recommander de ne pas acheter.",
      "Documentation vérifiable avant tout engagement."
    ],
    warningSigns: [
      "Intermédiaire rémunéré uniquement si une vente précise se conclut.",
      "Absence de transparence sur les liens avec les vendeurs.",
      "Promesse de plus-value ou discours d'investissement garanti.",
      "Refus d'expliquer les limites du certificat ou de la provenance.",
      "Pression pour décider vite."
    ],
    faqs: [
      {
        question: "Un courtier indépendant peut-il négocier ?",
        answer: "Oui, si le dossier s'y prête. Mais la négociation ne doit jamais remplacer les vérifications de base : certificat, vendeur, traitement, conditions et prix."
      },
      {
        question: "Pourquoi ne pas passer directement par un vendeur ?",
        answer: "Vous pouvez le faire. L'accompagnement devient utile lorsque le montant, la complexité ou la distance rendent l'erreur trop coûteuse."
      },
      {
        question: "Êtes-vous gemmologue ?",
        answer: "Non. Je ne remplace pas un laboratoire ni un expert gemmologue. Mon rôle porte sur la lecture critique des documents, la cohérence commerciale et le cadre d'achat."
      }
    ],
    related: [
      {
        title: "Ce que je fais et refuse",
        href: "/blog/ce-que-je-fais-et-refuse",
        text: "Le cadre exact de mon intervention."
      },
      {
        title: "Accompagnement achat",
        href: "/accompagnement-achat-pierre-precieuse",
        text: "Le déroulé pratique d'un dossier."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "verification-certificat-gemmologique",
    title: "Vérification certificat gemmologique",
    description: "Aide pour vérifier et comprendre un certificat gemmologique avant achat : laboratoire, numéro, traitements, origine et limites du rapport.",
    badge: "Certificats",
    h1: "Vérification de certificat gemmologique avant achat",
    lead: [
      "Un certificat gemmologique est indispensable, mais il n'est pas toujours suffisant. Il faut savoir qui l'a émis, ce qu'il décrit exactement, ce qu'il ne dit pas et comment ses mentions influencent le risque d'achat.",
      "Je vous aide à lire le rapport avec une logique d'acheteur : authenticité du numéro, laboratoire, poids, dimensions, couleur, traitements, origine éventuelle et cohérence avec l'annonce."
    ],
    intent: "Cette page répond aux personnes qui ont déjà un certificat en main et veulent éviter de le surinterpréter avant de payer.",
    situations: [
      "Vous avez un certificat GIA, SSEF, Gübelin, Lotus ou autre, mais vous ne savez pas quoi regarder.",
      "Le vendeur met en avant une origine prestigieuse et vous voulez vérifier ce qu'elle signifie.",
      "Le certificat est ancien ou émis par un laboratoire moins connu.",
      "Les photos, le prix ou le discours ne semblent pas cohérents avec le rapport."
    ],
    deliverables: [
      {
        title: "Contrôle du rapport",
        text: "Vérification du laboratoire, du numéro, de la date et des informations accessibles publiquement."
      },
      {
        title: "Lecture des mentions",
        text: "Explication des termes liés au poids, dimensions, couleur, clarté, origine et traitements."
      },
      {
        title: "Limites du certificat",
        text: "Un rapport décrit une pierre, mais ne garantit pas le prix, l'éthique, l'historique commercial ou l'intérêt d'achat."
      },
      {
        title: "Re-certification éventuelle",
        text: "Recommandation de mise à jour si le certificat est ancien, incomplet ou trop faible pour le montant engagé."
      }
    ],
    process: [
      {
        title: "Envoi des documents",
        text: "Vous transmettez le certificat, l'annonce, les photos et le contexte de prix."
      },
      {
        title: "Lecture structurée",
        text: "Je reprends chaque mention importante et son implication pour l'achat."
      },
      {
        title: "Vérification de cohérence",
        text: "Le rapport est comparé au discours du vendeur et aux éléments de vente."
      },
      {
        title: "Avis de suite",
        text: "Je vous indique les questions restantes et l'intérêt éventuel d'une re-certification."
      }
    ],
    checks: [
      "Nom du laboratoire et réputation dans la catégorie de pierre concernée.",
      "Numéro de rapport vérifiable sur le site officiel.",
      "Date du certificat et évolution des techniques de détection.",
      "Mention de traitement : chauffe, huile, remplissage, diffusion, irradiation.",
      "Origine géographique et degré de certitude.",
      "Correspondance entre poids/dimensions et photos ou annonce."
    ],
    warningSigns: [
      "Certificat maison présenté comme équivalent à un laboratoire indépendant.",
      "Numéro introuvable ou capture d'écran floue.",
      "Rapport ancien pour une pierre à forte prime de non-traitement.",
      "Origine prestigieuse annoncée mais absente du certificat.",
      "Vendeur qui refuse d'envoyer le rapport complet."
    ],
    faqs: [
      {
        question: "Un certificat prouve-t-il la valeur d'une pierre ?",
        answer: "Non. Il décrit des caractéristiques gemmologiques. La valeur dépend aussi de la beauté, de la demande, du vendeur, de la rareté et des conditions de vente."
      },
      {
        question: "Tous les laboratoires se valent-ils ?",
        answer: "Non. Certains laboratoires sont plus reconnus, mieux équipés ou plus crédibles selon le type de pierre et la question posée."
      },
      {
        question: "Quand faut-il demander une re-certification ?",
        answer: "Quand le rapport est ancien, incomplet, émis par un laboratoire faible ou lorsque le montant justifie une vérification indépendante plus solide."
      }
    ],
    related: [
      {
        title: "Comprendre un certificat",
        href: "/blog/comprendre-certificat-gemmologique",
        text: "Guide détaillé des mentions principales."
      },
      {
        title: "Re-certification",
        href: "/faire-recertifier-pierre-precieuse",
        text: "Quand un nouveau rapport devient utile."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "analyse-annonce-pierre-precieuse",
    title: "Analyse annonce pierre précieuse",
    description: "Analyse indépendante d'une annonce de pierre précieuse avant achat : photos, certificat, prix, vendeur, omissions et signaux d'alerte.",
    badge: "Annonce en ligne",
    h1: "Analyse d'annonce de pierre précieuse avant achat",
    lead: [
      "Une annonce de pierre précieuse peut être séduisante tout en restant insuffisante. Les photos, les adjectifs et le prix ne suffisent pas à sécuriser une décision.",
      "J'analyse l'annonce comme un dossier d'achat : ce qui est dit, ce qui manque, ce qui doit être vérifié et ce qui doit vous faire ralentir avant paiement."
    ],
    intent: "Cette page vise les acheteurs qui ont repéré une annonce en ligne ou une proposition privée et veulent un avis indépendant avant d'aller plus loin.",
    situations: [
      "Vous avez trouvé une pierre sur un site marchand, une marketplace ou auprès d'un vendeur étranger.",
      "L'annonce mentionne une origine ou une qualité exceptionnelle, mais la preuve documentaire est floue.",
      "Vous ne savez pas quelles informations demander avant de vous engager.",
      "Le vendeur pousse à payer vite ou propose des modalités peu protectrices."
    ],
    deliverables: [
      {
        title: "Lecture de l'annonce",
        text: "Décryptage des termes valorisants, des données techniques, des omissions et des promesses implicites."
      },
      {
        title: "Contrôle des visuels",
        text: "Analyse de la cohérence des photos et vidéos avec le certificat et les caractéristiques annoncées."
      },
      {
        title: "Vendeur et conditions",
        text: "Vérification de l'identité, des mentions légales, des conditions de retour, d'inspection et de paiement."
      },
      {
        title: "Liste d'actions",
        text: "Questions à poser, documents à exiger, points à négocier ou raisons d'arrêter le dossier."
      }
    ],
    process: [
      {
        title: "Transmission du lien",
        text: "Vous envoyez l'annonce, les captures utiles, le certificat et les échanges éventuels avec le vendeur."
      },
      {
        title: "Analyse des signaux",
        text: "Je classe les éléments en points rassurants, zones floues et alertes."
      },
      {
        title: "Questions au vendeur",
        text: "Je formule les demandes qui permettent de tester la solidité de la proposition."
      },
      {
        title: "Décision",
        text: "Vous savez s'il faut poursuivre, demander plus de preuves, négocier ou abandonner."
      }
    ],
    checks: [
      "Type exact de pierre, poids, dimensions, traitement et origine.",
      "Certificat complet, numéro vérifiable et laboratoire crédible.",
      "Photos sous plusieurs lumières, vidéo, absence de retouches excessives.",
      "Prix cohérent avec les caractéristiques annoncées.",
      "Vendeur identifiable, historique, politique de retour claire.",
      "Possibilité d'une inspection ou re-certification avant achat définitif."
    ],
    warningSigns: [
      "Contact uniquement par messagerie privée sans identité claire.",
      "Paiement irréversible demandé avant envoi de documents.",
      "Origine prestigieuse répétée mais non confirmée par un laboratoire.",
      "Prix présenté comme une occasion urgente.",
      "Refus d'envoyer le certificat original ou les conditions écrites."
    ],
    faqs: [
      {
        question: "Analysez-vous une annonce gratuitement ?",
        answer: "Non. Une analyse utile demande un vrai travail de lecture, de vérification et de mise en contexte. Elle s'inscrit dans un accompagnement ou une mission cadrée."
      },
      {
        question: "Pouvez-vous dire si l'annonce est une arnaque ?",
        answer: "Je peux identifier des signaux d'alerte et des incohérences. En revanche, je ne peux pas prouver à distance tout ce qui relève de la pierre physique sans laboratoire ou inspection."
      },
      {
        question: "Que se passe-t-il si l'annonce est insuffisante ?",
        answer: "Je vous indique les informations manquantes et les demandes à faire au vendeur. Si elles restent sans réponse, c'est souvent une raison de ne pas poursuivre."
      }
    ],
    related: [
      {
        title: "Lire une annonce",
        href: "/blog/lire-annonce-pierre-precieuse",
        text: "Guide des termes et omissions fréquentes."
      },
      {
        title: "Éviter les arnaques",
        href: "/eviter-arnaque-pierre-precieuse",
        text: "Les signaux à repérer avant paiement."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "eviter-arnaque-pierre-precieuse",
    title: "Éviter arnaque pierre précieuse",
    description: "Aide pour éviter une arnaque lors de l'achat d'une pierre précieuse : certificats douteux, prix trop bas, vendeur opaque et paiement risqué.",
    badge: "Prévention des risques",
    h1: "Éviter une arnaque à la pierre précieuse",
    lead: [
      "Les arnaques ne ressemblent pas toujours à des annonces grossières. Certaines propositions sont bien présentées, avec des photos propres, un certificat partiel et un discours convaincant.",
      "La prévention consiste à repérer les incohérences avant qu'elles ne deviennent une perte : vendeur non identifiable, certificat faible, origine invérifiable, prix trop attractif ou conditions de paiement dangereuses."
    ],
    intent: "Cette page s'adresse aux acheteurs qui veulent sécuriser une décision avant de transférer de l'argent ou d'engager une transaction à distance.",
    situations: [
      "Le prix paraît très intéressant par rapport aux offres comparables.",
      "Le vendeur dit que plusieurs acheteurs sont intéressés et pousse à décider vite.",
      "Le certificat existe, mais il est flou, ancien ou difficile à vérifier.",
      "La transaction se fait à distance, sans inspection ni retour clair."
    ],
    deliverables: [
      {
        title: "Détection des alertes",
        text: "Lecture critique des documents, du discours, du prix et des conditions proposées."
      },
      {
        title: "Scénarios de risque",
        text: "Identification des conséquences possibles : mauvaise pierre, traitement caché, faux certificat, vendeur injoignable."
      },
      {
        title: "Demandes de preuve",
        text: "Liste de documents ou garanties à demander avant d'aller plus loin."
      },
      {
        title: "Décision de prudence",
        text: "Recommandation claire : poursuivre prudemment, re-certifier, renégocier ou abandonner."
      }
    ],
    process: [
      {
        title: "Collecte",
        text: "Vous rassemblez annonce, certificat, échanges, identité du vendeur et conditions de paiement."
      },
      {
        title: "Classement des risques",
        text: "Je distingue ce qui est normal, incertain, préoccupant ou bloquant."
      },
      {
        title: "Vérifications ciblées",
        text: "On vérifie les points qui changent vraiment la décision."
      },
      {
        title: "Plan d'action",
        text: "Vous repartez avec les questions à poser et les limites à ne pas franchir."
      }
    ],
    checks: [
      "Identité réelle et coordonnées du vendeur.",
      "Certificat complet et vérifiable sur le site du laboratoire.",
      "Cohérence entre prix, rareté annoncée et qualité documentée.",
      "Modalités de paiement et possibilité de recours.",
      "Conditions de retour, inspection ou escrow.",
      "Historique de la pierre et cohérence des documents."
    ],
    warningSigns: [
      "Paiement par virement irrévocable vers un compte non cohérent.",
      "Promesse de valeur de revente ou d'investissement garanti.",
      "Certificat envoyé en photo basse qualité sans numéro exploitable.",
      "Refus de facture ou de coordonnées professionnelles.",
      "Vendeur vexé par les questions normales de vérification."
    ],
    faqs: [
      {
        question: "Un prix trop bas est-il toujours une arnaque ?",
        answer: "Pas toujours, mais c'est un signal d'alerte majeur. Un prix anormalement bas doit être expliqué par des caractéristiques objectives, pas par une histoire commerciale."
      },
      {
        question: "Le certificat suffit-il à éviter une arnaque ?",
        answer: "Non. Il faut aussi vérifier qu'il correspond à la pierre vendue, qu'il est authentique et que la transaction est sécurisée."
      },
      {
        question: "Que faire si le vendeur refuse une re-certification ?",
        answer: "Pour une pierre de valeur significative, ce refus doit être pris très au sérieux. Un vendeur solide devrait accepter un cadre de vérification raisonnable."
      }
    ],
    related: [
      {
        title: "Analyse d'annonce",
        href: "/analyse-annonce-pierre-precieuse",
        text: "Passer une proposition au crible avant achat."
      },
      {
        title: "Achat en ligne",
        href: "/accompagnement-achat-pierre-precieuse-en-ligne",
        text: "Sécuriser les dossiers à distance."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "accompagnement-achat-pierre-precieuse-en-ligne",
    title: "Accompagnement achat pierre précieuse en ligne",
    description: "Accompagnement pour acheter une pierre précieuse en ligne : analyse de l'annonce, certificat, vendeur, conditions de retour et paiement sécurisé.",
    badge: "Achat à distance",
    h1: "Accompagnement pour acheter une pierre précieuse en ligne",
    lead: [
      "Acheter en ligne donne accès à beaucoup d'offres, mais retire plusieurs protections naturelles : voir la pierre, rencontrer le vendeur, comparer physiquement et réagir avant paiement.",
      "L'accompagnement sert à remplacer une partie de cette sécurité par une méthode : documents complets, vendeur identifiable, certificat vérifiable, conditions écrites, retour possible et re-certification si nécessaire."
    ],
    intent: "Cette page cible les acheteurs qui regardent des pierres en ligne et veulent réduire les risques avant de commander.",
    situations: [
      "Vous avez trouvé une pierre sur un site étranger ou une marketplace.",
      "Le vendeur accepte l'envoi, mais les conditions de retour sont floues.",
      "Vous ne savez pas si les photos reflètent correctement la pierre.",
      "Vous envisagez une re-certification après réception."
    ],
    deliverables: [
      {
        title: "Pré-analyse de l'offre",
        text: "Lecture de l'annonce, du certificat, des photos, du prix et de la politique du vendeur."
      },
      {
        title: "Cadre de commande",
        text: "Vérification des conditions d'inspection, retour, assurance, transport et paiement."
      },
      {
        title: "Questions au vendeur",
        text: "Demandes précises pour obtenir les informations manquantes avant transfert d'argent."
      },
      {
        title: "Stratégie de réception",
        text: "Organisation possible d'une inspection ou re-certification selon la valeur et les risques."
      }
    ],
    process: [
      {
        title: "Audit de l'annonce",
        text: "Je vérifie la cohérence de l'offre avant toute négociation."
      },
      {
        title: "Validation des documents",
        text: "Le certificat et les informations du vendeur sont contrôlés."
      },
      {
        title: "Sécurisation pratique",
        text: "On clarifie transport, assurance, retour et paiement."
      },
      {
        title: "Décision",
        text: "Vous décidez avec un cadre écrit et moins de zones inconnues."
      }
    ],
    checks: [
      "Vendeur identifié, coordonnées et historique.",
      "Certificat complet et vérifiable.",
      "Photos et vidéos sous plusieurs angles et lumières.",
      "Politique de retour écrite et délai suffisant.",
      "Assurance transport adaptée à la valeur.",
      "Possibilité de faire vérifier la pierre après réception."
    ],
    warningSigns: [
      "Retour impossible pour une pierre de valeur importante.",
      "Vendeur qui refuse toute vidéo ou photo supplémentaire.",
      "Expédition non assurée ou valeur déclarée incohérente.",
      "Paiement hors plateforme sans protection.",
      "Certificat local peu crédible pour une pierre très chère."
    ],
    faqs: [
      {
        question: "Faut-il éviter totalement l'achat en ligne ?",
        answer: "Non. L'achat en ligne peut fonctionner avec un vendeur sérieux, un certificat solide, des conditions écrites et un plan de vérification."
      },
      {
        question: "La photo suffit-elle à juger une pierre ?",
        answer: "Non. Les photos aident, mais elles peuvent masquer ou accentuer certains aspects. Elles doivent être croisées avec certificat, vidéo et conditions d'inspection."
      },
      {
        question: "Quand utiliser un escrow ?",
        answer: "Lorsque le montant, la distance ou le niveau de confiance le justifie. C'est un frais tiers, à discuter selon le dossier."
      }
    ],
    related: [
      {
        title: "Acheter en ligne",
        href: "/blog/acheter-pierre-precieuse-en-ligne",
        text: "Les risques spécifiques aux achats à distance."
      },
      {
        title: "Analyse d'annonce",
        href: "/analyse-annonce-pierre-precieuse",
        text: "Lire une proposition avant de s'engager."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "aide-achat-saphir-certifie",
    title: "Aide achat saphir certifié",
    description: "Aide indépendante pour acheter un saphir certifié : couleur, chauffe, origine, certificat, prix et risques avant décision.",
    badge: "Saphir",
    h1: "Aide pour acheter un saphir certifié",
    lead: [
      "Le saphir est l'une des pierres les plus recherchées, mais aussi l'une des plus difficiles à comparer. Couleur, saturation, chauffe, origine, taille et laboratoire peuvent changer fortement la valeur.",
      "Je vous aide à analyser un saphir avant achat, sans vendre la pierre ni dépendre du vendeur. L'objectif est de comprendre ce qui est prouvé, ce qui reste incertain et ce qui justifie ou non le prix."
    ],
    intent: "Cette page répond aux personnes qui veulent acheter un saphir naturel certifié et sécuriser leur décision.",
    situations: [
      "Vous hésitez entre saphir chauffé et non chauffé.",
      "L'origine Sri Lanka, Cachemire, Madagascar ou Birmanie est mise en avant.",
      "Le prix varie fortement entre deux pierres qui semblent proches.",
      "Le certificat est ancien ou le laboratoire n'est pas évident à apprécier."
    ],
    deliverables: [
      {
        title: "Lecture couleur et traitement",
        text: "Mise en contexte de la couleur, de la saturation, de la chauffe et de leur impact sur la valeur."
      },
      {
        title: "Analyse du certificat",
        text: "Vérification du laboratoire, de l'origine éventuelle et des mentions de traitement."
      },
      {
        title: "Cohérence du prix",
        text: "Comparaison avec les critères réellement documentés, pas seulement avec les adjectifs de l'annonce."
      },
      {
        title: "Questions au vendeur",
        text: "Demandes précises sur photos, vidéos, inspection, re-certification et conditions."
      }
    ],
    process: [
      {
        title: "Critères",
        text: "On définit couleur souhaitée, budget, usage et tolérance aux traitements."
      },
      {
        title: "Tri",
        text: "Les offres sont filtrées selon certificat, prix, vendeur et cohérence visuelle."
      },
      {
        title: "Analyse",
        text: "Les meilleurs candidats sont étudiés plus finement."
      },
      {
        title: "Décision",
        text: "Vous choisissez en connaissant les compromis entre beauté, rareté et sécurité."
      }
    ],
    checks: [
      "Traitement : chauffé, non chauffé, diffusion ou mention insuffisante.",
      "Origine géographique et niveau de preuve.",
      "Couleur : teinte, saturation, tonalité et homogénéité.",
      "Inclusions visibles et qualité de taille.",
      "Certificat adapté à la valeur annoncée.",
      "Prime de prix justifiée ou seulement racontée."
    ],
    warningSigns: [
      "Saphir présenté comme non chauffé avec certificat ancien ou faible.",
      "Origine Cachemire ou Birmanie annoncée sans laboratoire majeur.",
      "Photos très saturées, sans vidéo ni lumière neutre.",
      "Prix bas pour une combinaison rare sans explication.",
      "Vendeur qui minimise l'importance de la chauffe."
    ],
    faqs: [
      {
        question: "Un saphir chauffé est-il à éviter ?",
        answer: "Non. La chauffe est fréquente et acceptée si elle est déclarée. Le problème est de payer une prime de non-chauffe pour une pierre insuffisamment documentée."
      },
      {
        question: "L'origine est-elle toujours déterminable ?",
        answer: "Non. Elle dépend de la pierre et du laboratoire. Une origine annoncée par le vendeur doit être distinguée d'une origine mentionnée sur certificat."
      },
      {
        question: "Quel certificat demander pour un saphir cher ?",
        answer: "Pour une pierre de valeur significative, il faut privilégier un laboratoire reconnu et envisager une re-certification si le rapport est ancien ou insuffisant."
      }
    ],
    related: [
      {
        title: "Saphir non chauffé",
        href: "/verification-saphir-non-chauffe",
        text: "Comprendre la prime et les risques autour du non-chauffé."
      },
      {
        title: "Traitements",
        href: "/blog/traitements-pierres-precieuses",
        text: "Les traitements et leur impact sur la valeur."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "aide-achat-rubis-certifie",
    title: "Aide achat rubis certifié",
    description: "Aide indépendante pour acheter un rubis certifié : origine, traitement, verre plombifère, certificat, prix et risques avant achat.",
    badge: "Rubis",
    h1: "Aide pour acheter un rubis certifié",
    lead: [
      "Le rubis concentre plusieurs risques : origine très valorisée, traitements lourds, écarts de prix considérables et discours commerciaux parfois agressifs.",
      "Avant d'acheter, il faut comprendre si le rubis est naturel, traité, rempli, chauffé, quelle origine est prouvée et si le certificat est suffisant pour le montant engagé."
    ],
    intent: "Cette page cible les acheteurs qui veulent un avis indépendant avant d'acheter un rubis naturel certifié.",
    situations: [
      "Le vendeur parle de rubis birman, pigeon blood ou sans traitement.",
      "Le prix paraît attractif pour une pierre annoncée comme rare.",
      "Le certificat mentionne des traitements que vous ne comprenez pas.",
      "Vous voulez éviter les rubis fortement remplis ou survalorisés."
    ],
    deliverables: [
      {
        title: "Analyse traitement",
        text: "Lecture des mentions de chauffe, remplissage, résidus ou verre plombifère."
      },
      {
        title: "Origine et langage commercial",
        text: "Distinction entre origine documentée, appellation vendeuse et vocabulaire non standardisé."
      },
      {
        title: "Cohérence prix",
        text: "Mise en perspective du prix avec la qualité, le traitement et le laboratoire."
      },
      {
        title: "Cadre de prudence",
        text: "Questions, documents et conditions à exiger avant toute décision."
      }
    ],
    process: [
      {
        title: "Documents",
        text: "Vous transmettez certificat, annonce, photos et échanges."
      },
      {
        title: "Traitement",
        text: "Je vérifie si les traitements changent radicalement la valeur ou le risque."
      },
      {
        title: "Comparaison",
        text: "L'offre est replacée dans une logique de marché et de rareté réelle."
      },
      {
        title: "Recommandation",
        text: "Vous savez s'il faut poursuivre, demander un laboratoire plus fort ou arrêter."
      }
    ],
    checks: [
      "Rubis naturel ou synthétique, naturel ou traité.",
      "Présence de remplissage au verre ou résidus significatifs.",
      "Origine géographique documentée ou seulement affirmée.",
      "Qualité de couleur et transparence.",
      "Laboratoire adapté au niveau de prix.",
      "Conditions de retour et de re-certification."
    ],
    warningSigns: [
      "Rubis très rouge et très bon marché présenté comme exceptionnel.",
      "Mention floue autour du remplissage ou des résidus.",
      "Origine birmane non confirmée par un laboratoire reconnu.",
      "Certificat local peu connu pour une pierre très chère.",
      "Refus de re-certification indépendante."
    ],
    faqs: [
      {
        question: "Le verre plombifère est-il grave ?",
        answer: "Oui, pour la valeur. Certains rubis remplis peuvent être beaucoup moins chers que des rubis de qualité comparable sans ce traitement lourd."
      },
      {
        question: "Que signifie pigeon blood ?",
        answer: "C'est une appellation valorisante, mais son usage varie. Il faut vérifier le laboratoire, la couleur réelle et les critères associés, pas seulement le terme commercial."
      },
      {
        question: "Un rubis birman vaut-il toujours plus cher ?",
        answer: "L'origine peut ajouter une prime, mais seulement si elle est crédible et si la pierre est belle, correctement certifiée et traitée de manière acceptable."
      }
    ],
    related: [
      {
        title: "Traitements",
        href: "/blog/traitements-pierres-precieuses",
        text: "Comprendre les traitements qui changent la valeur."
      },
      {
        title: "Vérifier un certificat",
        href: "/verification-certificat-gemmologique",
        text: "Lire les mentions avant de décider."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "aide-achat-emeraude-certifie",
    title: "Aide achat émeraude certifiée",
    description: "Aide indépendante pour acheter une émeraude certifiée : huile, traitement, origine, jardin, certificat, prix et risques avant achat.",
    badge: "Émeraude",
    h1: "Aide pour acheter une émeraude certifiée",
    lead: [
      "L'émeraude est une pierre magnifique, mais rarement simple. Les inclusions, l'huile, le degré de traitement et l'origine peuvent faire varier fortement la valeur.",
      "Je vous aide à lire le dossier d'achat d'une émeraude : certificat, traitement, photos, cohérence du prix, origine annoncée et conditions de transaction."
    ],
    intent: "Cette page s'adresse aux acheteurs qui envisagent une émeraude naturelle et veulent comprendre les risques avant achat.",
    situations: [
      "Le certificat mentionne huile, minor, moderate ou significant.",
      "Le vendeur met en avant une origine Colombie, Zambie ou Brésil.",
      "Vous ne savez pas si les inclusions sont normales ou problématiques.",
      "Vous voulez éviter une émeraude trop traitée ou fragile pour l'usage prévu."
    ],
    deliverables: [
      {
        title: "Lecture du traitement",
        text: "Explication des mentions d'huile ou de remplissage et de leur impact probable."
      },
      {
        title: "Analyse de cohérence",
        text: "Mise en relation entre couleur, clarté, jardin, taille, certificat et prix."
      },
      {
        title: "Usage et fragilité",
        text: "Points de vigilance si l'émeraude est destinée à une bague ou un bijou porté régulièrement."
      },
      {
        title: "Questions au vendeur",
        text: "Demandes sur entretien, stabilité, certificat, retour et historique de traitement."
      }
    ],
    process: [
      {
        title: "Objectif",
        text: "On clarifie l'usage final, le niveau de qualité attendu et le budget."
      },
      {
        title: "Certificat",
        text: "Je lis les mentions de traitement, origine et observations importantes."
      },
      {
        title: "Visuels",
        text: "Les photos et vidéos sont comparées aux caractéristiques annoncées."
      },
      {
        title: "Arbitrage",
        text: "Vous comprenez le compromis entre beauté, traitement, robustesse et prix."
      }
    ],
    checks: [
      "Degré d'huile ou de remplissage.",
      "Origine géographique et laboratoire émetteur.",
      "Jardin, fractures visibles et solidité pour l'usage prévu.",
      "Couleur, tonalité et transparence.",
      "Entretien recommandé et risques de traitement instable.",
      "Prix cohérent avec qualité et traitement."
    ],
    warningSigns: [
      "Émeraude très propre à prix bas sans explication.",
      "Traitement non mentionné alors que la pierre est significative.",
      "Photos uniquement très flatteuses, sans gros plan exploitable.",
      "Origine Colombie annoncée sans certificat solide.",
      "Vendeur qui minimise totalement l'huile ou les fractures."
    ],
    faqs: [
      {
        question: "Une émeraude huilée est-elle mauvaise ?",
        answer: "Non. L'huile est fréquente et acceptée à certains niveaux. Le point important est le degré de traitement et la transparence du vendeur."
      },
      {
        question: "Le jardin est-il toujours un défaut ?",
        answer: "Pas forcément. Les inclusions font partie de l'émeraude, mais leur visibilité, leur position et leur impact sur la solidité doivent être regardés."
      },
      {
        question: "Faut-il un certificat pour une émeraude ?",
        answer: "Pour une acquisition significative, oui. Le certificat aide à clarifier traitement, origine éventuelle et caractéristiques objectives."
      }
    ],
    related: [
      {
        title: "Traitements",
        href: "/blog/traitements-pierres-precieuses",
        text: "Comprendre huile, remplissage et traitements."
      },
      {
        title: "Provenance",
        href: "/provenance-ethique",
        text: "Ce qu'on peut savoir ou non sur l'origine."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "verification-saphir-non-chauffe",
    title: "Vérifier un saphir non chauffé",
    description: "Aide pour vérifier un saphir non chauffé avant achat : certificat, laboratoire, ancien rapport, prime de prix et risque de surpayer.",
    badge: "Saphir non chauffé",
    h1: "Vérifier un saphir non chauffé avant achat",
    lead: [
      "La mention non chauffé peut justifier une prime importante sur un saphir. C'est précisément pour cela qu'elle doit être documentée avec rigueur.",
      "Un certificat ancien, ambigu ou émis par un laboratoire faible peut créer un risque majeur : payer une prime de rareté sans preuve suffisante."
    ],
    intent: "Cette page vise les acheteurs qui envisagent un saphir présenté comme non chauffé et veulent vérifier la solidité de cette affirmation.",
    situations: [
      "Le vendeur affirme que le saphir est non chauffé.",
      "Le certificat date de plusieurs années ou vient d'un laboratoire peu connu.",
      "Le prix inclut clairement une prime de non-chauffe.",
      "Vous voulez savoir si une re-certification est nécessaire."
    ],
    deliverables: [
      {
        title: "Lecture du certificat",
        text: "Analyse des termes exacts utilisés pour la chauffe et les limites du laboratoire."
      },
      {
        title: "Évaluation du risque",
        text: "Appréciation de la solidité du dossier par rapport au prix demandé."
      },
      {
        title: "Décision de re-certification",
        text: "Recommandation selon la date du rapport, la valeur et le niveau de preuve."
      },
      {
        title: "Questions au vendeur",
        text: "Demandes à formuler avant d'accepter la prime de non-chauffe."
      }
    ],
    process: [
      {
        title: "Rapport",
        text: "Vous transmettez le certificat et les informations de vente."
      },
      {
        title: "Prime",
        text: "On regarde si le prix dépend fortement de la mention non chauffé."
      },
      {
        title: "Vérification",
        text: "Le laboratoire, la date et les formulations sont analysés."
      },
      {
        title: "Suite",
        text: "On décide si l'achat peut avancer ou si une re-certification est indispensable."
      }
    ],
    checks: [
      "Formulation exacte : no indications of heating, no heat, indications, etc.",
      "Date du certificat et méthodes disponibles à l'époque.",
      "Laboratoire et réputation sur les saphirs.",
      "Possibilité de diffusion ou traitement non détecté anciennement.",
      "Prix comparé à un saphir chauffé similaire.",
      "Acceptation par le vendeur d'un contrôle indépendant."
    ],
    warningSigns: [
      "Prime très élevée appuyée sur un certificat ancien.",
      "Vendeur qui refuse un laboratoire de premier plan.",
      "Confusion entre naturel et non chauffé.",
      "Origine prestigieuse et non-chauffe annoncées sans rapport solide.",
      "Urgence artificielle pour bloquer la pierre."
    ],
    faqs: [
      {
        question: "Naturel veut-il dire non chauffé ?",
        answer: "Non. Une pierre naturelle peut avoir été chauffée. La mention non chauffé doit être traitée séparément et prouvée par un rapport adapté."
      },
      {
        question: "Pourquoi un certificat ancien pose-t-il problème ?",
        answer: "Les méthodes de détection évoluent. Pour une pierre chère, un rapport ancien peut être insuffisant pour justifier une prime importante."
      },
      {
        question: "Faut-il toujours re-certifier ?",
        answer: "Pas toujours. Mais si le prix dépend fortement de la non-chauffe, la re-certification devient souvent raisonnable."
      }
    ],
    related: [
      {
        title: "Aide achat saphir",
        href: "/aide-achat-saphir-certifie",
        text: "Regarder le dossier complet d'un saphir."
      },
      {
        title: "Re-certification",
        href: "/faire-recertifier-pierre-precieuse",
        text: "Quand refaire analyser une pierre."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  },
  {
    slug: "faire-recertifier-pierre-precieuse",
    title: "Faire re-certifier une pierre précieuse",
    description: "Quand faire re-certifier une pierre précieuse avant achat : certificat ancien, laboratoire faible, traitement douteux, achat en ligne ou valeur élevée.",
    badge: "Re-certification",
    h1: "Faire re-certifier une pierre précieuse avant achat",
    lead: [
      "La re-certification consiste à faire analyser à nouveau une pierre par un laboratoire indépendant. Ce n'est pas une formalité inutile : dans certains dossiers, c'est la différence entre un achat sécurisé et une décision trop fragile.",
      "Elle devient particulièrement pertinente lorsqu'un certificat est ancien, incomplet, émis par un laboratoire peu reconnu ou lorsque le vendeur demande une prime importante pour une caractéristique sensible."
    ],
    intent: "Cette page s'adresse aux acheteurs qui hésitent à demander une nouvelle analyse avant de finaliser une acquisition.",
    situations: [
      "Le certificat a plus de cinq à dix ans.",
      "Le laboratoire n'est pas reconnu pour le type de pierre concerné.",
      "Le prix dépend d'une absence de traitement ou d'une origine prestigieuse.",
      "L'achat se fait à distance avec une période d'inspection possible."
    ],
    deliverables: [
      {
        title: "Avis d'opportunité",
        text: "Déterminer si la re-certification est utile, indispensable ou disproportionnée."
      },
      {
        title: "Choix du laboratoire",
        text: "Identifier un laboratoire adapté à la pierre et à la question posée."
      },
      {
        title: "Cadre avec le vendeur",
        text: "Prévoir délai, responsabilité, transport, assurance et conséquence du résultat."
      },
      {
        title: "Lecture du nouveau rapport",
        text: "Comparer l'ancien et le nouveau certificat pour comprendre les écarts."
      }
    ],
    process: [
      {
        title: "Évaluation",
        text: "On regarde l'ancien certificat, le prix, le vendeur et les enjeux."
      },
      {
        title: "Décision",
        text: "Je vous indique si la re-certification est rationnelle dans ce dossier."
      },
      {
        title: "Organisation",
        text: "Si elle est retenue, le cadre d'envoi et de retour doit être clair."
      },
      {
        title: "Interprétation",
        text: "Le nouveau résultat est expliqué et intégré dans la décision d'achat."
      }
    ],
    checks: [
      "Âge et qualité de l'ancien certificat.",
      "Montant de l'achat par rapport au coût de re-certification.",
      "Type de pierre et traitements à détecter.",
      "Laboratoire le plus pertinent selon le cas.",
      "Accord écrit du vendeur sur les modalités.",
      "Assurance et transport de la pierre."
    ],
    warningSigns: [
      "Vendeur qui refuse toute re-certification sur une pierre chère.",
      "Certificat ancien utilisé pour justifier une prime élevée.",
      "Traitement ou origine décisifs mais mal documentés.",
      "Absence de période d'inspection.",
      "Frais ou responsabilités non clarifiés."
    ],
    faqs: [
      {
        question: "La re-certification est-elle toujours à la charge de l'acheteur ?",
        answer: "Souvent oui, car elle protège l'acheteur. Mais le cadre peut être négocié selon le vendeur, le montant et l'importance de la vérification."
      },
      {
        question: "Que faire si le nouveau certificat contredit l'ancien ?",
        answer: "Il faut comprendre la nature de l'écart : méthode plus récente, opinion de laboratoire, traitement mieux détecté ou erreur initiale. La décision dépend ensuite des conditions prévues avec le vendeur."
      },
      {
        question: "Combien de temps cela prend-il ?",
        answer: "Le délai dépend du laboratoire, du pays, de la pierre et du type de rapport demandé. Il faut l'intégrer avant de s'engager définitivement."
      }
    ],
    related: [
      {
        title: "Article re-certification",
        href: "/blog/re-certification-pierre-precieuse",
        text: "Guide détaillé sur les cas fréquents."
      },
      {
        title: "Vérification certificat",
        href: "/verification-certificat-gemmologique",
        text: "Lire le rapport avant de décider."
      },
      ...commonRelated
    ],
    updatedDate: "2026-04-26"
  }
];

export const servicePageMap = new Map(servicePages.map((page) => [page.slug, page]));

export const featuredServiceLinks = servicePages
  .filter((page) =>
    [
      "accompagnement-achat-pierre-precieuse",
      "verification-certificat-gemmologique",
      "analyse-annonce-pierre-precieuse",
      "eviter-arnaque-pierre-precieuse",
      "aide-achat-saphir-certifie",
      "courtier-pierre-precieuse-independant"
    ].includes(page.slug)
  )
  .map((page) => ({
    title: page.title,
    href: `/${page.slug}/`,
    description: page.description
  }));
