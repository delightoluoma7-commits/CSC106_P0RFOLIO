// CSC106 Portfolio - Delight Oluomachi Ekeanya
console.log("Welcome to Delight's cyber defence!");

// Show welcome message
alert("Welcome to my portfolio - Delight Oluomachi Ekeanya | CSC106 | Contact: 09074046324");

// Make contact form work
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been received. I will contact you at 09074046324 soon.");
            form.reset();
        });
    }

    // Highlight current page
    console.log("Portfolio loaded successfully - 5 pages ready");
});
