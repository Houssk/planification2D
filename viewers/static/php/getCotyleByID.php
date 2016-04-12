<?php
	session_start(); // On démarre la session AVANT toute chose

	header('Content-Type: text/xml');
	echo "<?xml version=\"1.0\"?>\n";
	echo "<exemple>\n";

	$id = $_GET["idCotyle"];
	include('connexion.php');

	// On lance la requête
	// Si le GET est vide, on récupère toutes les données de tous les implants
	// Sinon si on a un GET on récupère les données de l'id définit dans le GET
	$query = "SELECT * FROM cotyles WHERE id=".$id."";
	$result = mysql_query($query, $dblink) or die (mysql_error($dblink));
	
	// On boucle sur le résultat
	while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
	    echo "<id>" . $row[0] . "</id>\n";
	    echo "<nom> ". $row[1] . " </nom>";
	    echo "<url>" . $row[2] . "</url>\n";
	    echo "<sizeXPx>" . $row[3] . "</sizeXPx>\n";
	    echo "<sizeYPx>" . $row[4] . "</sizeYPx>\n";
	    echo "<sizeXCm>" . $row[5] . "</sizeXCm>\n";
	    echo "<sizeYCm>" . $row[6] . "</sizeYCm>\n";
	}
	echo "</exemple>\n";
	
	include('deconnexion.php');
?>