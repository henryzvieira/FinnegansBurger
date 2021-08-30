//Author Henrique Oliveira ID: 20190611


//Set up validation for username and password using alert
//The forms username and password must be inputted, otherwise an alert is going to appear 
function validateInfo(){
    let username = document.forms["loginForm"]["username"].value;
    let password = document.forms["loginForm"]["password"].value;
	//Set variation for length validation
	var validationLength = document.forms["loginForm"]["password"];
		//Set up if to alert to input username or password if not inputted
        if(username === null || username === "" || password === null || password ===""){
            alert("Please enter Username and Password");
            return false;
        } 
		//Set up if to alert if length is lower or greater than 9
        if (validationLength.value.length < 9 || validationLength.value.lentgh > 9) {
			alert("Password must be 9 characters");
            return false;
        }
}


 //Set up an associative array for the burger size and cost
 //The values represent the cost of the burger i.e A large burger costs €7.00
var size_price = new Array();
	size_price["none"] = 0.00;
	size_price["large"] = 7.00;
	size_price["extra-large"] = 9.00;
	size_price["supersize"] = 17.50;


 //Get size and price from a drop down list
 function getBurgerSizePrice() {
	var BurgerSizePrice = 0;
	//Get reference to the form id = "orderForm"
	var theForm = document.forms["orderForm"];
    //Get reference to the select id = "size"
    var sizeB = theForm.elements["size"];
    //Set BurgerSizePrice equal to value user chooses
    BurgerSizePrice = size_price[sizeB.value];
    //Return BurgerSizePrice
    return BurgerSizePrice;
}


//Get quantity
function getBurgerQuantity() {
	var BurgerQuantity = 0;
	 //Get a reference to the form id = "orderForm"
	var theForm = document.forms["orderForm"];
	 //Get a reference to the select id = "quantity"
    var quantityB = theForm.elements["quantity"];
	//Set up BurgerQuantity equal to quantity user chooses
    BurgerQuantity = quantityB.value;	
	//Return BurgerQuantity
	return BurgerQuantity;	
}


//Calculate total
function calculateTotal() {
    //Get the total price by calling function adding the values of BugerSizePrice and BurgerQuantity
    var burgerPrice = getBurgerSizePrice() * getBurgerQuantity();
    //Get a reference to the discountCode
    var discountCode = document.getElementById("discountCode").value
	//Set up discount of 10% if the discountCode is tacotopping
    if (discountCode === "tacotopping") {
        burgerPrice = burgerPrice * 0.9;
    }
	
    //Display the result
    var divobj = document.getElementById('burgerTotal');
    divobj.style.display = 'block';
    divobj.innerHTML = "The total price for this order is &euro;" + burgerPrice;
}


//Hide total
function hideTotal() {
    var divobj = document.getElementById('burgerTotal');
    divobj.style.display = 'none';
}


//Using JQuery
$(document).ready(function(){
	
//Set up an alert when "supersize" is selected from size
$("#size").on("change", function() {  
    if($(this).val() === "supersize") {
		alert("FOOD WARNING: Please be advised that our 16oz Supersize Burger has high levels of Fat, Satured Fat and Sugars.");
    }
	});
  
  
//Set up an alert when order is submitted
$("#checkout").click(function(){
		alert("Thank you for choosing the best burger in town! Your order is going to be ready in 30 minutes");
    });
	


//Set up an alert when the discountCode is not valid
$("#discountCode").on("change", function() {  
    if($(this).val() === "tacotopping" || $(this).val() === "" ) {
		
    }
	else {alert("This is not a valid Discount Code. Use 'tacotopping' for 10% off");}
  });

  
})
