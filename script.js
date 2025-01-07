document.addEventListener("DOMContentLoaded", function () {
    
    const aboutLink = document.querySelector("a[href='#About']");
    const servicesLink = document.querySelector("a[href='#Services']");
    const contactLink = document.querySelector("a[href='#Contact']");
    
    const aboutSection = document.getElementById("about");
    const servicesSection = document.getElementById("services");
    const contactSection = document.getElementById("contact");

    
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    servicesLink.addEventListener("click", function (event) {
        event.preventDefault();
        servicesSection.scrollIntoView({ behavior: "smooth" });
    });

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});
