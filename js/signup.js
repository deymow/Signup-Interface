var hit = document.getElementById("door");
hit.onclick = function validate(){
	if(document.getElementById("fName").value == "")
	{
		alert("provide your first name");
		//document.getElementById.focus();
		return false;
	}
	if(document.getElementById("lName").value == "")
	{
		alert("provide your last name");
		//document.getElelmentById.focus();
		return false;
	}
	if(document.getElementById("emailAdd").value == "")
	{
		alert("provide your email");
		//document.getElementById.focus();
		return false;

	}
	if(document.getElementById("phoneNo").value == "")
	{
		alert("provide your phone number");
		//document.getElementById.focus();
		return false;
	}
	if(document.getElementById("locate").value == "")
	{
		alert("provide your location");
		//document.getElementById.focus();
		return false;
	}
	return true;
}