<?php
	// On se connecte à la BDD
    $dbhost="localhost";
	$dbuser="root";
	$dbpass="On30rth0M3d!cal";

	$dblink=mysql_connect($dbhost,$dbuser,$dbpass);
	mysql_select_db("planif2d_serf",$dblink);
?>