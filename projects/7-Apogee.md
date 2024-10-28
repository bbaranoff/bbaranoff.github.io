# APOGÉ

L’intelligence Artificielle en Périphérie pOur l’aGriculture de prÉcision

1 - Introduction

De nos jours, l’agriculture nécessite une attention particulière pour éviter une mauvaise utilisation des pesticides et de l’eau, par exemple.
Pour être en mesure de faire face à cela, l’agriculteur doit savoir ce qu’il peut et ne peut pas faire. Cette thèse a pour prétention de
combler l’écart entre les connaissances des agriculteurs et des informaticiens. De cette manière, nous devons intégrer les connaissances
des agriculteurs et proposer quelque chose de facile à utiliser pour l’aider à devenir un utilisateur final de thèmes tels que l’IA ou LoRa.
Il est dommage qu’à partir de maintenant, il ne puisse pas utiliser ces technologies alors qu’elles seraient des outils vraiment utiles pour
superviser et agir sur ses champs.

2 - Contexte

Les besoins de l’agriculture de précision

L’agriculture de précision vise à maximiser la production tout en minimisant l’utilisation des ressources naturelles et en réduisant les
impacts environnementaux. Cela nécessite une collecte précise de données sur les sols, les cultures et les conditions météorologiques, ainsi
qu’une surveillance continue des conditions de croissance pour permettre des interventions en temps réel. L’agriculture de précision repose sur
des technologies avancées telles que l’intelligence artificielle (IA), les capteurs, les drones et les systèmes de communication en réseau.

Les défis actuels de l’agriculture de précision

L’un des principaux défis de l’agriculture de précision est de combiner efficacement les connaissances agronomiques avec les technologies
avancées. Les agriculteurs ont souvent une connaissance pratique approfondie de leurs cultures et de leurs sols, mais ils peuvent manquer
de compétences en informatique pour tirer le meilleur parti des technologies de précision. D’autre part, les ingénieurs et les
informaticiens peuvent avoir une compréhension limitée des besoins et des contraintes du monde agricole, ce qui peut entraîner des solutions
techniques qui ne sont pas adaptées à la réalité du terrain.

3 - Solution proposée : APOGÉ

Pour répondre à ces défis, nous avons développé APOGÉ - l’intelligence Artificielle en Périphérie pOur l’aGriculture de prÉcision. Il s’agit
d’une solution de surveillance et de contrôle de l’agriculture de précision basée sur l’IA, qui utilise des capteurs décentralisés pour collecter des données en temps réel sur les conditions de croissance des cultures. Les données sont traitées localement, sans avoir besoin d’une
connexion Internet constante, ce qui permet d’économiser de l’énergie et de réduire les coûts de communication.

APOGÉ utilise des algorithmes d’apprentissage automatique pour analyser les données collectées et fournir des recommandations précises pour
optimiser la production de cultures. Les recommandations sont présentées à l’agriculteur sous forme de

4 - Processus :

Nous avons choisi d’utiliser un drone pour survoler les champs de l’agriculteur et vérifier ses plantations. Nous avons choisi le
processeur NVIDIA Jetson pour le traitement des données avec l’IA utilisant Edge pour éviter autant que possible l’utilisation du cloud.
En effet, Jetson devrait suffire pour une première vue de ce projet. Et aussi longtemps qu’il s’agit d’électronique embarquée, la dissipation de
puissance devrait être inférieure à celle d’un ordinateur traditionnel et nous pouvons le placer sur le drone. Les moyens de communication se
feront par Wi-Fi et LoRa :

  -   Wi-Fi pour la collecte de données massive
  -   LoRa pour traiter les requêtes précises et ciblées

5 - Méthodologie

Pour commencer, nous devrons définir les exigences de notre système, qui
seront basées sur les besoins exprimés dans la section précédente. Cela nous permettra de déterminer les composants matériels et logiciels
nécessaires pour construire notre solution. Ensuite, nous concevrons l’architecture globale de notre système, en prenant en compte les
différents composants matériels et logiciels nécessaires. Cette étape nous permettra d’identifier les éventuels points de blocage ou de
dysfonctionnement de notre solution, ainsi que les solutions à apporter.

Après avoir conçu l’architecture globale, nous nous concentrerons sur la mise en place des différents composants de notre système. Cela inclura
notamment l’installation et la configuration de tous les logiciels nécessaires, ainsi que le déploiement du matériel sur site.

Une fois que tous les composants auront été installés et configurés,
nous procéderons à des tests de validation pour nous assurer que notre solution répond aux exigences fonctionnelles et non fonctionnelles
définies précédemment. Nous effectuerons également des tests de performance pour nous assurer que notre système peut traiter les données
dans des délais raisonnables.

Enfin, nous livrerons le système au client, accompagné d’une
documentation complète sur son fonctionnement, sa maintenance et sa gestion. Nous formerons également le personnel du client sur 
l’utilisation du système et fournirons un support technique pour répondre à toutes les questions ou problèmes éventuels. Nous allons
utiliser le service cloud de WeeNat (<https://weenat.com/>) pour cette étude.

6 - Enjeux et anticipations:

  -   La surveillance et l’utilisation d’un champ agricole par EDGE-IA permettront de réduire les coûts pour l’utilisateur.
  -   Préservation de l’écosystème (avec la détection des maladies, l’agriculteur peut éviter d’utiliser des pesticides et ne traiter que les maladies qui affectent ses parcelles).
  -   Partager ses données en échange d’argent ou d’autres données.
  -   Apposer une étiquette indiquant qu’il n’a pas utilisé de pesticides et que ses cultures sont saines.

7 - Motivations

Passionné de radio-télécommunications depuis 10 ans, je suis ravi de partager mes connaissances avec ceux qui peuvent les comprendre. Avec
des compétences en télécommunications mobiles (GSM -\> 5G-SA) et en LoRa, je suis bien placé pour aborder le sujet proposé. Peu de personnes
sont capables de comprendre ces protocoles, ce qui me donne une perspective unique sur le sujet.
