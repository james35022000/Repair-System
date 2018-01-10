var MENU_MODE = 0;
var BOX_MODE = 1;

var Menu_Tag = ["#Homepage", "#Contact", "#About", "#Login"];
var Page_Tag = ["#Repair", "#Search"];
var Last_Page = "#Homepage";

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
	
	$('.boxA').click(
	  function() {
		showPage(0, BOX_MODE);
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
	
	$('.boxB').click(
	  function() {
		$.ajax({
			type :"GET",
            url  : "search.php",
            dataType: "text",
            success : function(data) {
						if(data != "") {
							result = data.split(";");
							html = "<table class=\"search-table\"><tr><th width=\"60px\">CaseID</th><th width=\"80px\">姓名</th><th width=\"60px\">種類</th><th width=\"300px\">問題描述</th><th width=\"150px\">時間</th><th width=\"40px\">完成</th><th width=\"100px\">備註</th></tr>";
							for(i = 0; i < result.length - 1; i++) {
								line = result[i].split(",");
								html += ("<tr><th width=\"60px\">" + line[0] + "</th><th width=\"80px\">" + line[1] + "</th><th width=\"60px\">" + line[2] + "</th><th width=\"300px\">" + line[3] + "</th><th width=\"150px\">" + line[4] + "</th><th width=\"40px\">" + line[5] + "</th><th width=\"100px\">" + line[6] + "</th></tr>")
							}
							html += "</table>"
							$("#Search > form").html(html);
						}
						else {
							$("#Search > form").html("<h3>" + "Oops, nothing here" + "</h3>");
						}
						showPage(1, BOX_MODE);
			        }
        });
	  }
	);
	
	
	/************************
	* Menu Selector
	*************************/
	if(!!$.cookie('Submit_Success')) {
		window.alert($.cookie('Submit_Success'));
		$.removeCookie('Submit_Success');
	}
	else if(!!$.cookie('Submit_Error')) {
		window.alert($.cookie('Submit_Error'));
		$.removeCookie('Submit_Error');
	}
	
	// Login state
	if(!!$.cookie('User')) {
		Menu_Tag[3] = "#SignOut";
		$("#menu > ul > #menu_1").addClass("current_page_item");
		$("#menu > ul #menu_4 > a").text("Sign Out");
		$("#logo > h5").text("UID: " + $.cookie('User'));
		$(Menu_Tag[0]).fadeIn();
		Last_Page = Menu_Tag[0];
	}
	else if(!!$.cookie('Error')) {
		$("#Login > div > span").text($.cookie('Error'));
		$.removeCookie('Error');
		$("#menu > ul > #menu_4").addClass("current_page_item");
		$("#menu > ul #menu_4 > a").text("Login");
		$(Menu_Tag[3]).fadeIn();
		Last_Page = Menu_Tag[3];
	}
	else {
		$("#menu > ul > #menu_4").addClass("current_page_item");
		$("#menu > ul #menu_4 > a").text("Login");
		$("#logo > h5").text("");
		$(Menu_Tag[3]).fadeIn();
		Last_Page = Menu_Tag[3];
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
			showPage(0, MENU_MODE);
		}
		else {
			$("#Login > div > span").text("Please login first.");
			if(Last_Page != Menu_Tag[3]) {
				Menu_Tag[3] = "#Login";
				$("#menu > ul #menu_4 > a").text("Login");
				showPage(3, MENU_MODE);
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
		showPage(1, MENU_MODE);
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
		showPage(2, MENU_MODE);
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
		showPage(3, MENU_MODE);
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
												$("#logo > h5").text("");
											});
			Menu_Tag[3] = "#Login";
			Last_Page = Menu_Tag[3];
		}
	  }
	);

	function showPage(index, mode) {
		switch(mode) {
			case MENU_MODE:
				if(Menu_Tag[index] != Last_Page) {
					$("#menu > ul > .current_page_item").removeClass("current_page_item");
					$(Last_Page).fadeOut("fast", function() { $(Menu_Tag[index]).fadeIn() });
					$("#menu > ul > #menu_" + (index + 1)).addClass("current_page_item");
					Last_Page = Menu_Tag[index];
				}
				break;
			case BOX_MODE:
				$(Last_Page).fadeOut("fast", function() { $(Page_Tag[index]).fadeIn() });
				Last_Page = Page_Tag[index];
				break;
		}
	}
	
});