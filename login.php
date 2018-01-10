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
	
	// Prevent from sql injection.
	if(!get_magic_quotes_gpc()) {
		$account = addslashes($_POST['login-account']);
		$password = addslashes($_POST['login-password']);
	}
	else {
		$account = $_POST['login-account'];
		$password = $_POST['login-password'];
	}
			
	if($account == "") {
		setcookie("Error", "Account should not be empty.", time() + 60) or die('unable to create cookie');
		exit();
	}
	if($password == "") {
		setcookie("Error", "Password should not be empty.", time() + 60) or die('unable to create cookie');
		exit();
	}
	
	$query = mysql_query("SELECT * FROM `UserInfo` WHERE `UserId` = '$account' AND `Password` = '$password'");
	$data = mysql_fetch_assoc($query);
			
	if (!$data){
		$success = FALSE;
		setcookie("Error", "Account or password not found.", time() + 60) or die('unable to create cookie');
	}
	else{				
		$success = TRUE;
		setcookie("User", $account, time() + 3600) or die('unable to create cookie'); 
	}
?>