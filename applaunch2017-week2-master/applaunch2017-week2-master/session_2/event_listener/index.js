// Get Element Here.
var button = document.getElementById("button_clickme");
var content = document.getElementById("content");	



// Add Event Listener of click to button
button.addEventListener("click", function(){
	content.innerText = "Bye Bye";
});