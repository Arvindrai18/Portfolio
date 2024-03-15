document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch(contactForm.getAttribute("action"), {
            method: "POST",
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                // If the form submission is successful, you can display a success message or redirect the user
                console.log("Form submission successful!");
                console.log(data);
                // Replace this with your desired action (e.g., display success message, redirect)
            })
            .catch(error => {
                console.error("There was a problem with your form submission:", error);
                // Handle errors here (e.g., display error message to user)
            });
    });
});

// Add any additional JavaScript functionality you need for your website here
// For example: form validation, animations, etc.
