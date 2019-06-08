
const submitBut= document.querySelector("#submitBut");


submitBut.addEventListener("click",  userInfo);

function userInfo() {
	if (sessionStorage) {
		let firstName = document.querySelector("#fName").value;
		let lastName = document.querySelector("#lName").value;
		let gender = document.querySelector("#gender").value;
		let age = document.querySelector("#age").value;

	    sessionStorage.setItem("firstName", firstName);
	    sessionStorage.setItem("lastName", lastName);
	    sessionStorage.setItem("gender", gender);
	    sessionStorage.setItem("age", age);			
	} else {
		alert("Sorry");
	}

}