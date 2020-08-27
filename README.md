# Planification 2D SERF

## Langages utilisés

* HTML5, CSS3
* JavaScript, jQuery
* PHP 5.6.40
* MySQL

## Dépendences

* Node Package Manager

## Installation

* Commencez par clôner le dépôt suivant : 

```bash
git clone -b SerfDev https://github.com/Houssk/planification2D.git
```

## Mise en place de la BDD

* Créer une nouvelle base de donnée (En utf8_general_ci).
* Importer le fichier `/Base de données/planif2d_serf.sql` dans la nouvelle base de donnée.
* Créer un fichier nommé `connexion.php` dans `/viewers/static/php`.
* Ajouter le code suivant dans `/viewers/static/php/connexion.php` : 

```php
<?php
	$dbname="NOM-DE-LA-BASE-DE-DONNEE-LOREM-IPSUM"; //Ne pas oublier de changer le nom de la base de donnée.

	$dbhost="127.0.0.1";
	$dbuser="root";
	$dbpass="";

	$dblink=mysql_connect($dbhost, $dbuser, $dbpass);

	mysql_select_db($dbname, $dblink);
?>
```
* Modifier le contenu que vous venez d'ajouter avec les bon identifiants et le bon nom de base de donnée.

## Installer les assets

```bash
npm install
```

## Lancer l'application

* En local, le chemin d'accés est dans `/viewers/static/`. Exemple :
```bash
http://localhost/planificationSerf/viewers/static/
```
* Si le lien ne contient pas (par exemple) `/en/` avant le nom du projet (`localhost/en/planificationSerf` en reprenant le lien précédent en exemple) l'application sera par défault en Français. 