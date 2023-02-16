
// Exercise 6
function validate() {

  let error = 0;

 // Get the input fields
 let fName = document.getElementById("fName");
 let fLastN = document.getElementById("fLastN");
 let fEmail = document.getElementById("fEmail");
 let fAddress = document.getElementById("fAddress");
 let fPassword = document.getElementById("fPassword");
 let fPhone = document.getElementById("fPhone");


 // Get the error elements
 let errorName = document.getElementById("errorName");
 let errorLastN = document.getElementById("errorLastN");
 let errorEmail = document.getElementById("errorEmail");  
 let errorAddress = document.getElementById("errorAddress");
 let errorPassword = document.getElementById("errorPassword");
 let errorPhone = document.getElementById("errorPhone");

 // Get correct elements
  let correctField = document.getElementById("correctField");


	// Validate fields entered by the user: name, phone, password, and email

  // Validate name + last name
let letters = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i;

  if (fName.value.length >= 3 && letters.test(fName.value)) {
    fName.style.borderColor = "#5db435";
    fName.classList.add("is-valid");
    fName.classList.remove("is-invalid");
    correctField.style.display = "block";
		errorName.style.display = "none";
  } else {
    error++;
    fName.style.borderColor = "#F66060";
    fName.classList.add("is-invalid");
		fName.classList.remove("is-valid");
		errorName.style.display = "block";
  }

  if (fLastN.value.length >= 3 && letters.test(fLastN.value)) {
    fLastN.style.borderColor = "#5db435";
    fLastN.classList.add("is-valid");
		fLastN.classList.remove("is-invalid");
    correctField.style.display = "block";
		errorLastN.style.display = "none";
  } else {
    error++;
    fLastN.style.borderColor = "#F66060";
    fLastN.classList.add("is-invalid");
		fLastN.classList.remove("is-valid");
		errorLastN.style.display = "block";
  }


     // Validate email address

  let email = /^[-'a-zA-Z0-9_+]+@[-'a-zA-Z0-9_+]+\.[a-z]{2,3}$/i;

  if (fEmail.value.length >= 3 && email.test(fEmail.value)) {
    fEmail.style.borderColor = "#5db435";
    fEmail.classList.add("is-valid");
    correctField.style.display = "block";
		fEmail.classList.remove("is-invalid");
		errorEmail.style.display = "none";
  } else {
    error++;
    fEmail.style.borderColor = "#F66060";
    fEmail.classList.add("is-invalid");
		fEmail.classList.remove("is-valid");
		errorEmail.style.display = "block";
  }

   // Validate address

  let address = /^.{3,}$/;

  if (fAddress.value.length >= 3 && address.test(fAddress.value)) {
    fAddress.style.borderColor = "#5db435";
    fAddress.classList.add("is-valid");
    correctField.style.display = "block";
		fAddress.classList.remove("is-invalid");
		errorAddress.style.display = "none";
  } else {
    error++;
    fAddress.style.borderColor = "#F66060";
    fAddress.classList.add("is-invalid");
    fAddress.classList.remove("is-valid");
		errorAddress.style.display = "block";
  }

  // Validate password

  let password = /^.{4,8}$/;

  if (fPassword.value.length >= 3 && password.test(fPassword.value)) {
    fPassword.style.borderColor = "#5db435";
    fPassword.classList.add("is-valid");
    correctField.style.display = "block";
		fPassword.classList.remove("is-invalid");
		errorPassword.style.display = "none";
  } else {
    error++;
    fPassword.style.borderColor = "#F66060";
    fPassword.classList.add("is-invalid");
    fPassword.classList.remove("is-valid");
		errorPassword.style.display = "block";
  }


  // Validate phone number

  let phone = /^\d{9}$/;

  if (fPhone.value.length >= 4 && phone.test(fPhone.value)) {
    fPhone.style.borderColor = "#5db435";
    fPhone.classList.add("is-valid");
    correctField.style.display = "block";
		fPhone.classList.remove("is-invalid");
		errorPhone.style.display = "none";
  } else {
    error++;
    fPhone.style.borderColor = "#F66060";
    fPhone.classList.add("is-invalid");
    fPhone.classList.remove("is-valid");
		errorPhone.style.display = "block";
  }


/*
  // Validate name

	if(fName.value == "" || fName.length < 3){
		error++;
		fName.style.borderColor = "#F66060";
    errorName.classList.remove("is-invalid");
    correctName.classList.add("is-valid");

		if(fName.value.length >= 3){
			errorName.innerHTML = "No puede incluir números";
		}

	} else if (!/^[-'a-zA-ZÀ-ÿ\s]{3,}$/i.test(fName)) {
		error++;
		fName.style.borderColor = "#5db435";
    fName.classList.add("is-valid");
		
	}


  // Validate last name

	if (fLastN.value === '' || fLastN.length < 3) {
		error++;
		document.getElementById("fLastN").style.borderColor = "#F66060";
		errorLastN.style.display = "block";
  } else if (!/^[-'a-zA-ZÀ-ÿ\s]{3,}$/i.test(fName)) {
		error++;
		document.getElementById("fLastN").style.borderColor = "#5db435";
		errorLastN.style.display = "block";
  }

  // Validate email
	if(fEmail.value === '' || fEmail.length < 3){
    error++;
		errorEmail.style.display = "block";
		document.getElementById("fEmail").style.borderColor = "#F66060";
	} else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(fEmail)) {
		error++;
		document.getElementById("fEmail").style.borderColor = "#5db435";
		errorEmail.style.display = "block";
	}


// Validate address

if(fAddress.value === '' || fAddress.length < 3){
  error++;
  errorAddress.style.display = "block";
  document.getElementById("fAddress").style.borderColor = "#F66060";
} else if (!/^[a-zA-Z]+$/.test(fAddress)) {
  error++;
  document.getElementById("fAddress").style.borderColor = "#5db435";
  errorEmail.style.display = "block";
}


// Validate password
  if(fPassword.value === '' || fPassword.length < 3){
		error++;
    errorPassword.style.display = "block";
		document.getElementById("fPassword").style.borderColor = "#F66060";
	} else if (!/^(?=.[a-zA-Z])(?=.[0-9])/.test(fPassword)) {
		error++;
		document.getElementById("fPassword").style.borderColor = "#5db435";
		errorPassword.style.display = "block";
	}

  
  // Validate phone

	if(fPhone.value === ''  || fPhone.length < 3){
		error++;
		errorPhone.style.display = "block";
		document.getElementById("fPhone").style.borderColor = "#F66060";
	} else if (!/^[0-9]+$/.test(fPhone)) {
		error++;
		document.getElementById("fPhone").style.borderColor = "#5db435";
		errorPhone.style.display = "block";
	}
*/
	if (error > 0) {
    return false;
    } else {
    return true;
  }
}

