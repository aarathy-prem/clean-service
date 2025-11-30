

function loadHTML(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (typeof callback === "function") callback(); // Run callback after load
        });
}

function attachRoutingToLogo(pageName) {
    // Select all divs with the class "routeDiv"
    const divs = document.querySelectorAll(".routeLogo");

    divs.forEach(div => {
        // div.style.cursor = "pointer"; // makes it look clickable
        div.addEventListener("click", () => {
            if (pageName !== "home") window.location.href = "../home"; // same route for all
        });
    });
}

loadHTML("custom-header", "../shared/header.html", () => {
    const pageName = document.body.getAttribute("data-page");
    attachRoutingToLogo(pageName);
    document.querySelectorAll(".nav-link").forEach(link => {
        const linkPath = link.getAttribute("href").split("/").pop();
        if (linkPath === pageName) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
});

loadHTML("custom-footer", "../shared/footer.html");

