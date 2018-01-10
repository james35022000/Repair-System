$(document).ready(function() {
	/************************
	* Box Selector
	*************************/
	$('.boxA').mouseenter(
	  function() {
		$("#boxA > div").css("background-color", "#222");
		$("#boxA > div > p").css("color", "#fff");
	  }
	);

	$('.boxA').mouseleave(
	  function() {
		$("#boxA > div").css("background-color", "#fff");
		$("#boxA > div > p").css("color", "#222");
	  }
	);
	
	$('.boxB').mouseenter(
	  function() {
		$("#boxB > div").css("background-color", "#222");
		$("#boxB > div > p").css("color", "#fff");
	  }
	);

	$('.boxB').mouseleave(
	  function() {
		$("#boxB > div").css("background-color", "#fff");
		$("#boxB > div > p").css("color", "#222");
	  }
	);
	
	
	/************************
	* Menu Selector
	*************************/
	var Menu_Tag = ["#Homepage", "#Contact", "#About", "#Login"];
	var Last_Menu = 0;
	
	if(!!$.cookie('User')) {
		Menu_Tag[3] = "#SignOut";
		$("#menu > ul > #menu_1").addClass("current_page_item");
		$("#menu > ul #menu_4 > a").text("Sign Out");
		$(Menu_Tag[0]).fadeIn();
		Last_Menu = 0;
	}
	else if(!!$.cookie('Error')) {
		$.removeCookie('Error');
		$("#Login > div > span").text("Account or password not found.");
		$("#menu > ul > #menu_4").addClass("current_page_item");
		$("#menu > ul #menu_4 > a").text("Login");
		$(Menu_Tag[3]).fadeIn();
		Last_Menu = 3;
	}
	else {
		$("#menu > ul > #menu_4").addClass("current_page_item");
		$("#menu > ul #menu_4 > a").text("Login");
		$(Menu_Tag[3]).fadeIn();
		Last_Menu = 3;
	}
	
	// menu_1
	$("#menu > ul > #menu_1").mouseenter(
	  function() {
		$("#menu > ul > #menu_1 > a").css("color", "#777");
	  }
	);
	$("#menu > ul > #menu_1").mouseleave(
	  function() {
		$("#menu > ul > #menu_1 > a").css("color", "#fff");
	  }
	);
	$("#menu > ul > #menu_1").click(
	  function() {
		if(!!$.cookie('User')) {
			showPage(0);
		}
		else {
			if(Last_Menu != 3) {
				showPage(3);
			}
			else {
				$("#Login > div > span").text("Please login first.");
			}
		}
	  }
	);
	// menu_2
	$("#menu > ul > #menu_2").mouseenter(
	  function() {
		$("#menu > ul > #menu_2 > a").css("color", "#777");
	  }
	);
	$("#menu > ul > #menu_2").mouseleave(
	  function() {
		$("#menu > ul > #menu_2 > a").css("color", "#fff");
	  }
	);
	$("#menu > ul > #menu_2").click(
	  function() {
		showPage(1);
	  }
	);
	// menu_3
	$("#menu > ul > #menu_3").mouseenter(
	  function() {
		$("#menu > ul > #menu_3 > a").css("color", "#777");
	  }
	);
	$("#menu > ul > #menu_3").mouseleave(
	  function() {
		$("#menu > ul > #menu_3 > a").css("color", "#fff");
	  }
	);
	$("#menu > ul > #menu_3").click(
	  function() {
		showPage(2);
	  }
	);
	// menu_4
	$("#menu > ul > #menu_4").mouseenter(
	  function() {
		$("#menu > ul > #menu_4 > a").css("color", "#777");
	  }
	);
	$("#menu > ul > #menu_4").mouseleave(
	  function() {
		$("#menu > ul #menu_4 > a").css("color", "#fff");
	  }
	);
	$("#menu > ul > #menu_4").click(
	  function() {
		$("#Login > div > span").text("");
		showPage(3);
	  }
	);
	
	
	/************************
	* SignOut Selector
	*************************/
	$("#signout-button").mouseenter(
	  function() {
		$("#signout-button").css("color", "#fff");
		$("#signout-button").css("background-color", "#777");
	  }
	);
	$("#signout-button").mouseleave(
	  function() {
		$("#signout-button").css("color", "#777");
		$("#signout-button").css("background-color", "#fff");
	  }
	);
	$("#signout-button").click(
	  function() {
		if(!!$.cookie('User')) {
			$.removeCookie('User');
			$("#SignOut").fadeOut("fast", function() { 
												$("#Login").fadeIn();
												$("#menu > ul #menu_4 > a").text("Login");
											});
			Menu_Tag[3] = "#Login";
		}
	  }
	);

	function showPage(index) {
		if(index != Last_Menu) {
			$("#menu > ul > #menu_" + (Last_Menu + 1)).removeClass("current_page_item");
			$(Menu_Tag[Last_Menu]).fadeOut("fast", function() { $(Menu_Tag[index]).fadeIn() });
			$("#menu > ul > #menu_" + (index + 1)).addClass("current_page_item");
			Last_Menu = index;
		}
	}
	
});