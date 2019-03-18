function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["myForm"].elements.length; 
        loopCounter++) {
        if (document.forms["myForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["myForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["myForm"]["fullName"].value = "";
    document.forms["myForm"]["email"].value = "";
	document.forms["myForm"]["phone"].value = "";
	document.forms["myForm"]["inquiry"].value = "";
    //document.getElementById("results").style.display = "none";
    //document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
}

function validateItems() {
    clearErrors();
    var name = document.forms["numberFun"]["fullName"].input;
    var emailAdd = document.forms["myForm"]["email"].input;
	var phoneNum = document.forms["myForm"]["phone"].input;
	var inquiryS = document.forms["myForm"]["inquiry"].input;
    if (name == "") {
        alert("fullName must be filled in.");
        document.forms["myForm"]["fullName"]
           .parentElement.className = "form-group has-error";
        document.forms["myForm"]["fullName"].focus();
        return false;
    }
   if (emailAdd == "") {
       alert("email must be filled in.");
       document.forms["myForm"]["email"]
          .parentElement.className = "form-group has-error"
       document.forms["myForm"]["email"].focus();
       return false;
   }
   
   if (phoneNum == ""|| isNaN(phoneNum) {
       alert("phone must be filled in.");
       document.forms["myForm"]["phone"]
          .parentElement.className = "form-group has-error"
       document.forms["myForm"]["phone"].focus();
       return false;
   }
   if (inquiryS == "") {
       alert("emailAdd must be filled in.");
       document.forms["myForm"]["inquiry"]
          .parentElement.className = "form-group has-error"
       document.forms["myForm"]["inquiry"].focus();
       return false;
   }
   
   
   //document.getElementById("results").style.display = "block";
   //document.getElementById("submitButton").innerText = "Recalculate";
   //document.getElementById("addResult").innerText = Number(num1) +
   //                                                  Number(num2);
   //document.getElementById("subtractResult").innerText = num1 - num2;
   //document.getElementById("multiplyResult").innerText = num1 * num2;
   //document.getElementById("divideResult").innerText = num1 / num2;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}