
	<?php
		error_reporting(0);
		if(!@mysql_connect("dbhome.cs.nctu.edu.tw","jcchen0316047_cs","jack841008")) {
			die('Could not connect: '. mysql_error());
		}
		if(!@mysql_select_db('jcchen0316047_cs')) {
			die('Could not connect: '. mysql_error());
		}
	?>
