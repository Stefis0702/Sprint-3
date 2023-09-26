
// Exercise 7
function validate(e) {
	e.preventDefault();
	// var error = 0;
	// // Get the input fields
	// var fName = document.getElementById("fName");
	// var fEmail = document.getElementById("fEmail");

	// // Get the error elements
	// var errorName = document.getElementById("errorName");
	// var errorEmail = document.getElementById("errorEmail");  
	
	// // Validate fields entered by the user: name, phone, password, and email
	// if(fName.value == ""){
	// 	error++;
	// }

	// if(fEmail.value == ""){
	// 	error++;
	// }
	let error=0;
	 
	 if(error>0){
	e.preventDefault();
	}else{
		alert("Error");
	}
	//almacenar los input en cada variable
	var fName=document.getElementById("fName");
	var lastName=document.getElementById("fLastN");
	var email=document.getElementById("fEmail");
	var password=document.getElementById("fPassword");
	var address=document.getElementById("fAddress");
	var phoneNumber=document.getElementById("fPhone");

	var isValid= true;
	
	
	if(fName.value.length<3){
		fName.classList.add("is-invalid");
		document.getElementById("errorName").style.display = "block";
		 isValid = false;
		 error++;
	 } else {
		 fName.classList.remove("is-invalid");
		 document.getElementById("errorName").style.display = "none";
	 }
	 if(lastName.value.length<3){
		lastName.classList.add("is-invalid");
		document.getElementById("errorLastN").style.display = "block";
		 isValid = false;
		 error++;
	 } else {
		 lastName.classList.remove("is-invalid");
		 document.getElementById("errorLastN").style.display = "none";
	 }
	 var paramEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
	 if(email.value.length<3 || !paramEmail.test(email.value)){
		email.classList.add("is-invalid");
		document.getElementById("errorEmail").style.display = "block";
		 isValid = false;
		 error++;
	 } else {
		 email.classList.remove("is-invalid");
		 document.getElementById("errorEmail").style.display = "none";
	 }
	 var paramPaswor= /^(?=.*[0-9])(?=.*[a-zA-Z])/;
	 if(password.value.length<3 || !paramPaswor.test(password.value)){
		password.classList.add("is-invalid");
		document.getElementById("errorPassword").style.display = "block";
		 isValid = false;
		 error++;
	 } else {
		 password.classList.remove("is-invalid");
		 document.getElementById("errorPassword").style.display = "none";
	 }
	 if(address.value.length<3){
		address.classList.add("is-invalid");
		document.getElementById("errorAddress").style.display = "block";
		 isValid = false;
		 error++;
	 } else {
		 address.classList.remove("is-invalid");
		 document.getElementById("errorAddress").style.display = "none";
	 }
	 var paramPhone= /^[0-9]{9}$/;
	 if(phoneNumber.value.length<3 || !paramPhone.test(phoneNumber.value)){
		phoneNumber.classList.add("is-invalid");
		document.getElementById("errorPhone").style.display = "block";
		 isValid = false;
		 error++;
	 } else {
		 phoneNumber.classList.remove("is-invalid");
		 document.getElementById("errorPhone").style.display = "none";
	 }
}
