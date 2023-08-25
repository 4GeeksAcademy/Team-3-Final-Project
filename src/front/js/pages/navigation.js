(function () {
    "use strict";

    // Navigation
    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
            else element.classList.add(stringClass);
        };
        init();
    }();

    // Dropdown menu functionality
    var menuDropdown = document.querySelector('.menu-icon');
    var dropdownMenu = document.querySelector('.nav__list-dropdown');
    menuDropdown.addEventListener('click', function () {
        toggleClass(dropdownMenu, 'dropdown-active');
    });

    function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
        else element.classList.add(stringClass);
    }

    

})();
