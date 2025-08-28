const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    let valid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email address';
        valid = false;
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        valid = false;
    } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        valid = false;
    }

    if (valid) {
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim(),
            time: new Date().toLocaleString()
        };

        // Store all messages as an array in localStorage
        let storedData = JSON.parse(localStorage.getItem("contactMessages")) || [];
        storedData.push(formData);
        localStorage.setItem("contactMessages", JSON.stringify(storedData));

        successMessage.textContent = 'Message sent successfully!';
        form.reset();
    }
});
