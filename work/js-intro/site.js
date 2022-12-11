"use strict";
(function() { 

    const buttonEl = document.querySelector(".menu_button");
    const menuitemEl = document.querySelector(".menu_item");

    
    buttonEl.addEventListener("click", function() {
        menuitemEl.classList.toggle("open");
    });

})();