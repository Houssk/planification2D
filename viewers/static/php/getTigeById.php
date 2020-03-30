<?php
	session_start(); // On démarre la session AVANT toute chose

	header('Content-Type: text/xml');
	echo "<?xml version=\"1.0\"?>\n";
	echo "<exemple>\n";

	$id = $_GET["idTige"];
	$table = $_GET["tableTige"];
	include('connexion.php');

	// On lance la requête
	// Si le GET est vide, on récupère toutes les données de tous les implants
	// Sinon si on a un GET on récupère les données de l'id définit dans le GET
	$query = "SELECT * FROM ".$table." WHERE id=".$id."";
	$result = mysql_query($query, $dblink) or die (mysql_error($dblink));
	var_dump($dblink);
	// On boucle sur le résultat
	while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
	    echo "<id>" . $row[0] . "</id>\n";
	    echo "<nom> ". utf8_encode($row[1]) . " </nom>";
	    echo "<url>" . $row[2] . "</url>\n";
	    echo "<distOffsetX>".$row[15]."</distOffsetX>\n";
	    echo "<widthPx>" . $row[3] . "</widthPx>\n";
	    echo "<widthCm>" . $row[4] . "</widthCm>\n";
	    echo "<heightPx>" . $row[5] . "</heightPx>\n";
	    echo "<heightCm>" . $row[6] . "</heightCm>\n";
	    echo "<PtMecaHautXPx>" . $row[16] ."</PtMecaHautXPx>\n";
	    echo "<PtMecaHautYPx>" . $row[17] ."</PtMecaHautYPx>\n";
	    echo "<taille>" . $row[20] ."</taille>";

	}
	echo "</exemple>\n";
	
	include('deconnexion.php');
?>