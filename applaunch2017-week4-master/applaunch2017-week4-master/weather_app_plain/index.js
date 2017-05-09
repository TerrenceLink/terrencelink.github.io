// You can use test.json for testing purposes.
// axios.get("test.json").then().catch()
var button = document.getElementById("button_go")
var button = document.getElementById("button_go").bgcolor='#ffffff';
var content = document.getElementById("content");	



// Add Event Listener of click to button
button.addEventListener("click", function(){
	content.innerText = "Bye Bye";
});