function go() {
var empt = document.check.url.value;
if (empt === "")
{
alert("Please Provide a URL.");
return false;
}
else 
{
var url = document.getElementById("url").value
window.open("http://"+document.location.host+"/go?url="+url)
return true; 
}
}

window.onhashchange = function() { 

}