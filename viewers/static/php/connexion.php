<?php
	// On se connecte à la BDD
	$dbhost="127.0.0.1:3306";
	$dbuser="root";
	$dbpass="";

	$dblink=mysql_connect($dbhost,$dbuser,$dbpass);
	mysql_select_db("planif2d_dedienne",$dblink);
?>