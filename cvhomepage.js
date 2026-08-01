const title = document.getElementById("aboutt");

let change = false;

setInterval(function () {

    if (change) {

        title.textContent = "About";

    } else {

        title.textContent = "George Gbadamosi";

    }

    change = !change;

}, 3000);


