document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
            return;
        }
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = "Please enter a valid email.";
            formMessage.style.color = "red";
            return;
        }
  
        formMessage.style.color = "green";
        formMessage.textContent = "Thanks for reaching out! I'll get back to you soon.";  
        form.reset();
    });
});