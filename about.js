
const title = document.getElementById("AboutGeorge");

let changing = false;

setInterval(function () {

    if (changing) {

        title.textContent = "About";

    } else {

        title.textContent = "'George G. !!'";

    }

    changing = !changing;

}, 6000);