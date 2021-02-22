
function openNav() {
	let myNav = document.getElementById("myNav");
	myNav.style.width = '90%';
	myNav.style.height = '100%';
	myNav.classList.toggle('shadow');
}

function closeNav() {
	let myNav = document.getElementById("myNav");
	myNav.style.width = "0px";
	myNav.classList.toggle('shadow') = null;
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}



