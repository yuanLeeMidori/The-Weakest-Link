let resumeBut = document.querySelector("#resumeBut");

window.addEventListener("load", function() {
	if (localStorage) {
		let filename = localStorage.getItem("filenameSaved");
		resumeBut.href = filename;
	}
	if (sessionStorage) {
		let isResumed = true;
		sessionStorage.setItem("isResumed", true);
	}
});
