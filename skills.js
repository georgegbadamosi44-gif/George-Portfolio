
const title = document.getElementById("contactme");

let changing = false;

setInterval(function () {

    if (changing) {

        title.textContent = "Contact";

    } else {

        title.textContent = "'me Here!'";

    }

    changing = !changing;

}, 3000);




