let button = document.querySelector(".menu-btn");

let nav = document.querySelector("nav");

button.onclick = function() {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "70px";

        nav.style.right = "0";

        nav.style.background = "#07090b";

        nav.style.padding = "20px";

        nav.style.width = "200px";
    }
};


let links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.onclick = function() {

        nav.style.display = "none";

    };

});