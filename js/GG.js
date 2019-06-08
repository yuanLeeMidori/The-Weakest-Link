let name = document.querySelector("#fName");

const xhr = new XMLHttpRequest();


function displayQuote() {
  if (xhr.readyState == 4) {
    const jsonResponse = JSON.parse(xhr.responseText);
    const div = document.querySelector("#quote");
    div.innerHTML = `${jsonResponse.quote.body} <br> <br> - ${jsonResponse.quote.author}`;
  }
}


window.addEventListener("load", contentInsert);

function contentInsert() {
	if (sessionStorage) {
    	name.innerHTML = sessionStorage.getItem("firstName");
 	}
	  let endPoint = `https://favqs.com/api/qotd`;
	xhr.open("GET", endPoint);
	xhr.send();
	xhr.addEventListener("load", displayQuote);
 	displayQuote();
}