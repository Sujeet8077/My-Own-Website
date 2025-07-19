document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simple validation check (HTML5 validation will also work)
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
            return;
        }

        // Basic email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = "Please enter a valid email.";
            formMessage.style.color = "red";
            return;
        }

        // Simulate form submission (you can replace this with actual backend integration)
        formMessage.style.color = "green";
        formMessage.textContent = "Thanks for reaching out! I'll get back to you soon.";

        // Clear form
        form.reset();
    });
});