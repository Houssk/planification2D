<?php
	session_start(); // On démarre la session AVANT toute chose

	header('Content-Type: text/xml');
	echo "<?xml version=\"1.0\"?>\n";
	echo "<exemple>\n";

	$id = NULL;
	$size = $_GET["sizeCotyle"];
	$table = $_GET["tableCotyle"];
	$cote = $_GET["coteCotyle"];
	include('connexion.php');

	// On lance la requête
	// Si le GET est vide, on récupère toutes les données de tous les implants
	// Sinon si on a un GET on récupère les données de l'id définit dans le GET
	$query = "SELECT * FROM ".$table." WHERE taille=".$size."";
	$result = mysql_query($query, $dblink) or false;
	echo "<result>";
	print_r($result);
	echo "</result>\n";
	if (mysql_num_rows($result)<=0) {
		$query = "SELECT * FROM ".$table."";
		$result = mysql_query($query, $dblink);

		if ($cote=='D'){
			$tableSize = mysql_num_rows($result);
			echo "<tableSize>".$tableSize."</tableSize>\n";
			$tableSizeHalf = $tableSize/2;
			if ($size>55) {
				$id = $tableSizeHalf;
			} else {
				$id=1;
			}
		}
		if ($cote=='G') {
			$tableSize = mysql_num_rows($result);
			echo "<tableSize>".$tableSize."</tableSize>\n";
			$tableSizeHalf = $tableSize/2;
			if ($size>55) {
				$id = $tableSizeHalf*2;
			} else {
				$id=$tableSizeHalf+1;
			}
		}
		echo "<idselect>".$id."</idselect>\n";
		$query = "SELECT * FROM ".$table." WHERE id=".$id."";
		$result = mysql_query($query, $dblink) or die (mysql_error($dblink));
		// On boucle sur le résultat
		while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
		    echo "<id>" . $row[0] . "</id>\n";
		    echo "<nom> ". utf8_encode($row[1]) . " </nom>";
		    echo "<url>" . $row[2] . "</url>\n";
		    echo "<sizeXPx>" . $row[3] . "</sizeXPx>\n";
		    echo "<sizeYPx>" . $row[4] . "</sizeYPx>\n";
		    echo "<sizeXCm>" . $row[5] . "</sizeXCm>\n";
		    echo "<sizeYCm>" . $row[6] . "</sizeYCm>\n";
		    echo "<taille>" . $row[9] . "</taille>\n";
		}
	} else {
		if ($cote=='D'){
			$query = "SELECT * FROM ".$table." WHERE taille=".$size." ORDER BY ID ASC LIMIT 1";
			$result = mysql_query($query, $dblink);
			while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
			    echo "<id>" . $row[0] . "</id>\n";
			    echo "<nom> ". utf8_encode($row[1]) . " </nom>";
			    echo "<url>" . $row[2] . "</url>\n";
			    echo "<sizeXPx>" . $row[3] . "</sizeXPx>\n";
			    echo "<sizeYPx>" . $row[4] . "</sizeYPx>\n";
			    echo "<sizeXCm>" . $row[5] . "</sizeXCm>\n";
			    echo "<sizeYCm>" . $row[6] . "</sizeYCm>\n";
			    echo "<taille>" . $row[9] . "</taille>\n";
			}
		}
		if ($cote=='G') {
			$query = "SELECT * FROM ".$table." WHERE taille=".$size." ORDER BY ID DESC LIMIT 1";
			$result = mysql_query($query, $dblink);
			while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
			    echo "<id>" . $row[0] . "</id>\n";
			    echo "<nom> ". utf8_encode($row[1]) . " </nom>";
			    echo "<url>" . $row[2] . "</url>\n";
			    echo "<sizeXPx>" . $row[3] . "</sizeXPx>\n";
			    echo "<sizeYPx>" . $row[4] . "</sizeYPx>\n";
			    echo "<sizeXCm>" . $row[5] . "</sizeXCm>\n";
			    echo "<sizeYCm>" . $row[6] . "</sizeYCm>\n";
			    echo "<taille>" . $row[9] . "</taille>\n";
			}
		}
	}
	echo "</exemple>\n";
	include('deconnexion.php');
?>