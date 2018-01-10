<?php
	$success = FALSE;
	header("Content-Type:text/html; charset=utf-8");
	header("Location: index.html");
	error_reporting(0);
	if(!@mysql_connect("dbhome.cs.nctu.edu.tw","jcchen0316047_cs","jack841008")) {
		die('Could not connect: '. mysql_error());
	}
	if(!@mysql_select_db('jcchen0316047_cs')) {
		die('Could not connect: '. mysql_error());
	}
	
	$user = $_POST['repair-user'];
	$email = $_POST['repair-email'];
	$phone = $_POST['repair-phone'];
	$type = $_POST['repair-type'];
	$subject = $_POST['repair-subject'];
	
	if(!isset($_COOKIE['User'])) {
		setcookie("Error", "Please login again.", time() + 60);
	}
	else {
		$insert = mysql_query("INSERT INTO RepairList (UserID, User, Email, Phone, Type, Subject) VALUES ('$_COOKIE[User]', '$user', '$email', '$phone', '$type', '$subject')");
		$data = mysql_fetch_assoc($insert);
		if (!$data) {
			setcookie("Error", "Unknown error.", time() + 60) or die('unable to create cookie');
		}
		else {
			setcookie("Success", "Submit complete!", time() + 60) or die('unable to create cookie');
		}
	}
?>