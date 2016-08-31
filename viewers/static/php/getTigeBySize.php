<?php
	session_start(); // On démarre la session AVANT toute chose

	header('Content-Type: text/xml');
	echo "<?xml version=\"1.0\"?>\n";
	echo "<exemple>\n";

	$id = NULL;
	$size = $_GET["sizeTige"];
	$table = $_GET["tableTige"];
	$cote = $_GET["coteTige"];
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
			if ($size>5) {
				$id = $tableSizeHalf;
			} else {
				$id=1;
			}
		}
		if ($cote=='G') {
			$tableSize = mysql_num_rows($result);
			echo "<tableSize>".$tableSize."</tableSize>\n";
			$tableSizeHalf = $tableSize/2;
			if ($size>5) {
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
		    echo "<distOffsetX>".$row[15]."</distOffsetX>\n";
		    echo "<widthPx>" . $row[3] . "</widthPx>\n";
		    echo "<widthCm>" . $row[4] . "</widthCm>\n";
		    echo "<heightPx>" . $row[5] . "</heightPx>\n";
		    echo "<heightCm>" . $row[6] . "</heightCm>\n";
		    echo "<PtMecaHautXPx>" . $row[16] ."</PtMecaHautXPx>\n";
		    echo "<PtMecaHautYPx>" . $row[17] ."</PtMecaHautYPx>\n";
		    echo "<taille>" . $row[20] ."</taille>";
		}
	} else {
		if ($cote=='D'){
			$query = "SELECT * FROM ".$table." WHERE taille=".$size." ORDER BY id ASC LIMIT 1";
			$result = mysql_query($query, $dblink);
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
		}
		if ($cote=='G') {
			$query = "SELECT * FROM ".$table." WHERE taille=".$size." ORDER BY id DESC LIMIT 1";
			$result = mysql_query($query, $dblink);
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
		}
	}
	echo "</exemple>\n";
	include('deconnexion.php');
?>