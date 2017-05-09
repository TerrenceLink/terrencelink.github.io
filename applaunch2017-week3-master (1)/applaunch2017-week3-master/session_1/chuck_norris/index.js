// API EndPoint
var url =  "http://api.icndb.com/jokes/random";

// Get Ordered List Element
var ol = document.getElementById("jokes")

// Create Request
var request = new XMLHttpRequest();
request.open("GET", url, true);

request.onload = function(){
  // Handle Response
  if(request.status == 200){

    // Parse the String into JSON Object
    var jsonObject = JSON.parse(request.response);

    // Print out the joke, that is not funny sometimes
    console.log(jsonObject.value.joke);

    var li = document.createElement("li");

    // Add Text into the <li></li>
    // So, <li></li> become <li>Text</li>
    li.innerHTML = jsonObject.value.joke;

    ol.apppendChild (li);

    
  }
}


// Send Request
request.send();