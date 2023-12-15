// script.js

document.querySelectorAll('.nav-link').forEach(navLink => {
    navLink.addEventListener('mousemove', (e) => {
        const { offsetX } = e;
        const percent = offsetX / navLink.clientWidth;
        const color = `hsl(${percent * 360}, 100%, 50%)`;
        navLink.style.setProperty('--line-color', color);
    });

    navLink.addEventListener('mouseleave', () => {
        navLink.style.removeProperty('--line-color');
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL path
    var pathName = window.location.pathname;

    // Select all navigation links
    var navLinks = document.querySelectorAll(".navbar-nav a");

    // Loop through each link and add the 'active' class if the href matches the current path
    navLinks.forEach(function (link) {
        var linkPath = link.getAttribute("href");
        if (pathName.endsWith(linkPath) && linkPath !== '/') {
            link.classList.add("active");
        }
    });
});

   