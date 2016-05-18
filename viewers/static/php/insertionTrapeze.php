<?php
	header('Content-Type: text/xml');
	echo "<?xml version=\"1.0\"?>\n";
	echo "<exemple>";

	include('connexion.php');

	$X1 = $_POST['X1'];
	$Y1 = $_POST['Y1'];
	$X2 = $_POST['X2'];
	$Y2 = $_POST['Y2'];
	$Cote = $_POST['Cote'];

	$query = "INSERT INTO trapeze VALUES ('$ID','$X1','$Y1','$X2','$Y2','$Cote')";
	$result = mysql_query($query,$dblink) or die (mysql_error($dblink));

	echo "</exemple>\n";

	include('deconnexion.php');
?>