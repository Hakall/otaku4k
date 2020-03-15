# otaku4k
Mini front end project for Systel SA

Created with Angular CLI, use json-server for mocking back-end

## Enoncé
Le groupe électro-punk Otaku 4K souhaite se faire connaître internationalement. Pour le moment, leur plus grande réussite est l’animation réussie du mariage du cousin d’un membre du groupe.
Pour passer à la vitesse supérieure, ils ont décidé de mettre en place un site internet afin de se faire connaître et de pouvoir mieux connaître leurs fans.
Le groupe est composé de 4 membres : 
Tetsuo Nagasaki aka Goku : Chanteur principal
Samantha Botox aka Barbie : Bassiste et chanteuse
Isaac Turing aka Stormtrooper : Guitariste
Adèle Curie aka Esmeralda : Batteuse
Un ami du groupe a développé des services REST pour récupérer la liste des membres du groupe, leurs activités et leurs fans.

### Cahier des charges
Le site devra être consultable à partir d’un mobile ou d’un ordinateur, avec un affichage adapté à l’écran.
La page principale devra afficher les dernières activités du groupe.
Une barre de navigation devra permettre d’accéder à la présentation du groupe ainsi qu’à la liste des fans.
Sur la page de présentation du groupe, il sera possible d’accéder par des liens à une description individuelle de chaque membre.
La page présentant les fans contiendra une liste qu’il sera possible de trier et de filtrer sur chacune de ses colonnes. Il sera possible d’ajouter de nouveaux fans à cette liste qui seront persistés dans le fichier json. 
Cette liste doit rester performante même si le groupe obtient, dans le futur, un grand nombre de fans.
Le style graphique du site doit être moderne (la police Comic Sans MS est proscrite).
Le site doit s’appuyer sur les technologies suivantes :
HTML5


CSS ou SCSS
Javascript ou Typescript (l’utilisation du framework Angular est conseillée)
L’utilisation d’un CMS est interdite.
Les appels aux services REST doivent être réalisés de manière asynchrone afin de garder une navigation fluide même si les services sont longs à répondre.
L’architecture du site doit permettre une évolution facile si nécessaire.

### Données fournies
Fichiers image :
Goku.jpg (membre du groupe)
Barbie.jpg (membre du groupe)
Stormtrooper.jpg (membre du groupe)
Esmeralda.jpg (membre du groupe)
Otaku4K.jpg (le groupe en entier)
Anniversaire.jpg (activité)
Boum.jpg (activité)
Garage.jpg (activité)


Fichier Otaku4K.json contenant la liste des membres du groupe, des activités et des fans
Pour permettre d’interroger ce fichier sous forme de services REST, il est recommandé d’utiliser json-server https://www.npmjs.com/package/json-server

## To deploy
require Docker

````
docker-compose build
docker-compose up -d
````

then go to http://localhost:8042


## To stop
````
docker-compose rm -sf
````
