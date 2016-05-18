<?php
	header('Content-Type: text/xml');
	echo "<?xml version=\"1.0\"?>\n";
	echo "<exemple>";

	include ('connexion.php');

	$X = $_POST['X'];
	$Y = $_POST['Y'];
	$Cote = $_POST['Cote'];

	$query = "INSERT INTO cercle VALUES ('$ID','$X','$Y','$Cote')";
	$result = mysql_query($query,$dblink) or die (mysql_error($dblink));

	echo "</exemple>\n";

	include('deconnexion.php');
?>