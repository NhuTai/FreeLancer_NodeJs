function loadXMLDoc() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for older browsers
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("demo").innerHTML =
				this.responseText;
		}
	};
	xmlhttp.open("GET", "test.html", true);
	//xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	//xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
	xmlhttp.send();
}