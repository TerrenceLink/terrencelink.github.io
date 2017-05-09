// API EndPoint
var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";

axios.get (url)
   .then(function(response){
   	 console.log(response.data.data.image_url);
   	 var imageURL = response.data.data.image_url;

   	 var imgTag = document.getElementById("image")
   	 imgTag.src = imageURL;
   })	







//axios.get(url)
 // .then(function(response) {

    // Get Image Element

    // Change the source of the image
 // })
  //.catch(function(error) {
    // Log Error
 // })/*
