<?php
	$success = FALSE;
	header("Content-Type:text/html; charset=utf-8");
	//header("Location: index.html");
	error_reporting(0);
	if(!@mysql_connect("dbhome.cs.nctu.edu.tw","","")) {
		die('Could not connect: '. mysql_error());
	}
	if(!@mysql_select_db('jcchen0316047_cs')) {
		die('Could not connect: '. mysql_error());
	}
		
	if(!isset($_COOKIE['User'])) {
		setcookie("Error", "Please login again.", time() + 60);
	}
	else {
		$query = mysql_query("SELECT CaseID, User, Type, Subject, SubmitDate, Finished, Notes FROM RepairList WHERE UserID = '$_COOKIE[User]'");
		$data = array();
		while($row = mysql_fetch_assoc($query)) {
			$data[] = $row;
		}
		$result = "";
		for($i = 0; $i < count($data); $i++) {
			$result = $result . $data[$i]['CaseID'] . "," . $data[$i]['User'] . "," . $data[$i]['Type'] . "," . $data[$i]['Subject'] . "," . $data[$i]['SubmitDate'] . "," . $data[$i]['Finished'] . "," . $data[$i]['Notes'] . ";";
		}
		echo $result;
	}
?>