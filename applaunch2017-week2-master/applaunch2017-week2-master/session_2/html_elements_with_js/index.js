// Declare an array for shopping list.
var shoppingList=[
"Carlsberg",
"Orange",
"Apple",
"Pizza",
"Meat"
]
// Get the Body Tag here.
var body=document.getElementById("content");

// Create heading element .
var heading=document.createElement("h1");
heading.innerText="Shopping List";

//Append heading element to body
body.appendChild(heading);

// Create Order List Element.
var orderListElement=document.createElement("ol");

 

// Loop through your shopping list
// and create li element here.
 for(var i = 0; i < shoppingList.length; i++){
  var listElement=document.createElement("li");
  listElement.innerText=shoppingList[i];
  orderListElement.appendChild(listElement);
  }



// Append ordered list to the body
body.appendChild(orderListElement);