import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Je suis un administrateur réseau certifié Cisco en réseaux et Google en cybersécurité, avec un Master en Administration et Sécurité des réseaux. Mon objectif ? Optimiser et sécuriser les systèmes informatiques tout en explorant les nouvelles technologies. Toujours en quête de solutions innovantes, je partage aussi mes connaissances à travers des vidéos éducatives sur la cybersécurité.`;

export const ABOUT_TEXT = `Passionné par l’informatique et toujours avide de nouvelles connaissances, je suis un administrateur réseaux en constante évolution. Mon intérêt pour la cybersécurité, le développement d’applications web et les bases de données me pousse à approfondir mes compétences et relever de nouveaux défis.

J’ai une solide maîtrise des distributions Linux, du langage Python, ainsi que d’outils comme Burp Suite, Wireshark et SQL, qui me permettent d’analyser, sécuriser et optimiser les infrastructures informatiques.

En parallèle, je partage mes connaissances en cybersécurité à travers des vidéos sur ma chaîne YouTube, avec pour objectif de rendre ce domaine plus accessible. En dehors de la tech, je suis aussi passionné par le fitness, et j’anime une chaîne TikTok où je partage du contenu motivant et inspirant sur le sujet.

Doté d’un bon esprit d’équipe, je sais communiquer efficacement, m’adapter aux différentes situations et surtout, trouver des solutions face aux défis techniques et humains. Toujours en quête d’apprentissage, je continue d’explorer et d’évoluer dans les domaines qui me passionnent.`;

export const EXPERIENCES = [
   {
    year: "Septembre 2023 - Décembre 2023",
    role: "Agent technique",
    company: "VISION FINANCE S.A",
    description: `Lors de mon stage, j’ai assisté les employés dans l’utilisation d’un logiciel propriétaire en leur fournissant des formations pratiques et des support techniques. J’ai pris en charge l’explication des fonctionnalités du logiciel, aidé à résoudre des problèmes techniques rencontrés par les utilisateurs et fourni des conseils pour optimiser son utilisation au quotidien. Mon rôle a permis d'assurer une transition fluide et une prise en main rapide du logiciel par les équipes, contribuant ainsi à améliorer leur productivité.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "Sptember 2020 - Décembre 2020",
    role: "Agent Technique",
    company: "YOVI Intelligent Technologie SARL",
    description: `Lors de mon stage, j’ai participé à l’installation et à la configuration de caméras de surveillance pour renforcer la sécurité des locaux. J’ai également participé à la mise en place d'une porte à accès contrôlé par code PIN, permettant de sécuriser l'entrée dans une zone restreinte. Mon travail a consisté à câbler, paramétrer et tester le système de verrouillage électronique afin d’assurer son bon fonctionnement et garantir un accès sécurisé uniquement aux personnes autorisées.`,
    
  }
];

export const PROJECTS = [
  {
    title: "Mise en place la VoIP dans un réseaux sans fil en utilisant Asterisk",
    image: project1,
    description:
      "Dans le cadre de mon BTS, j'ai réalisé un projet visant à implémenter un système de VoIP (Voice over IP) au sein d'un réseau sans fil. L'objectif était de mettre en place une infrastructure téléphonique professionnelle en utilisant Asterisk, une solution de communication open-source, et d'évaluer sa performance dans un environnement réseau sans fil.",
    technologies: ["Asterisk", "Ubuntu"],
  },
  {
    title: "Ecoute des paquets en utilisant wireshark",
    image: project2,
    description:
      "Dans ce projet, j'ai utilisé Wireshark, un outil de capture de paquets, pour analyser le trafic réseau et vérifier la mise en place du chiffrement SSL/TLS dans une application web. L'objectif principal était de valider que les communications entre le client et le serveur étaient sécurisées grâce au protocole SSL/TLS, en analysant les paquets échangés et en identifiant les informations sensibles protégées par le chiffrement.",
    technologies: ["Wireshark", "SSL/TLS", "Reactjs", "Django"],
  },
  {
    title: "Application web avec Chiffrement Homomorphe",
    image: project3,
    description:
      "Ce projet faisait partie de mon thème de master en cybersécurité et avait pour objectif de concevoir une application web de gestion de finances permettant aux utilisateurs de suivre leurs dépenses et gérer leur budget de manière sécurisée. L'application était conçue pour intégrer le chiffrement homomorphe afin d'effectuer des calculs sur des données sensibles sans jamais exposer ces données en clair.\nLe chiffrement homomorphe permet d’effectuer des opérations sur des données chiffrées sans les déchiffrer, ce qui garantit la confidentialité des informations personnelles et financières. Ce projet a donc combiné la gestion des finances et des techniques avancées de sécurité des données, dans le but de protéger la vie privée des utilisateurs tout en leur offrant une expérience fluide et fonctionnelle.",
    technologies: ["React.js", "MongoDB", "TenSEAL", "HTTP/SSL"],
  },
];

export const CONTACT = {
  address: "Ekie, Yaoundé, Cameroun ",
  phoneNo: "+237 659255792 / 651486786 ",
  email: "etatafrank850@gmail.com",
};
