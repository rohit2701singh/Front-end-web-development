let themeDots = document.getElementsByClassName("theme-dot");

// store selected theme in local storage: chrome>inspect>application>storage>local storage
let theme = localStorage.getItem("theme");

if (theme == null) {
	setTheme("light");
} else {
	setTheme(theme);
}

for (var i = 0; themeDots.length > i; i++)
	themeDots[i].addEventListener("click", function () {
		let mode = this.dataset.mode;
		// console.log("option clicked:", mode);
		setTheme(mode);
	});

function setTheme(mode) {
	if (mode == "light") {
		document.getElementById("theme-style").href = "../css/default.css";
	}

	if (mode == "blue") {
		document.getElementById("theme-style").href = "../css/blue.css";
	}

	if (mode == "green") {
		document.getElementById("theme-style").href = "../css/green.css";
	}

	if (mode == "purple") {
		document.getElementById("theme-style").href = "../css/purple.css";
	}

	localStorage.setItem("theme", mode); // set theme in local storage for future visit
}
