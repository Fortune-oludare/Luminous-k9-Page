let burgarBtn = document.querySelector(".burgar-menu-btn");
let burgarMenu = document.querySelector(".burgar-menu");

let isBurgarOpen = false;

burgarBtn.onclick = function() {
    if (!isBurgarOpen) {
        burgarMenu.style.display = "block";
        burgarBtn.style.backgroundPosition = "center left 50px, center";
        isBurgarOpen = true;
    }
    else if (isBurgarOpen) {
        burgarMenu.style.display = "none";
        burgarBtn.style.backgroundPosition ="center, center left 50px";
        isBurgarOpen = false;
    }
}