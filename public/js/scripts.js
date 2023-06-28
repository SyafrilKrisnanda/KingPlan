/*!
 * Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });
});

var map = L.map("map").setView([-5.233426753579837, 113.47891552244609], 6);

// Tambahkan layer peta (misalnya, OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Tambahkan marker
L.marker([-7.848680736699468, 113.70641771688697])
    .addTo(map)
    .bindPopup("Kingplan")
    .openPopup();
L.marker([-7.962999129066972, 113.56667064786502])
    .addTo(map)
    .bindPopup("Argopuro");
L.marker([-8.123698828225539, 114.04540633823972])
    .addTo(map)
    .bindPopup("Raung");
L.marker([-8.10595866363224, 112.92182736250342])
    .addTo(map)
    .bindPopup("Semeru");
