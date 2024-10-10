// Select the form and input fields
const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const msg = document.querySelector('.message-container');
const submitBtn = document.querySelector(".submit");
const messageDisplay = document.getElementById("message");

// Event Listener for form validation on button click
submitBtn.addEventListener('click', processFormData);

function processFormData(e) {
    // Prevent default form submission
    e.preventDefault();

    // Clear any previous messages
    messageDisplay.textContent = "";

    // Basic validation
    if (!validateForm()) {
        return;
    }

    // Check if passwords match
    if (password1.value !== password2.value) {
        messageDisplay.textContent = "Passwords do not match!";
        messageDisplay.style.color = "red";
    } else {
        messageDisplay.textContent = "Registration successful!";
        messageDisplay.style.color = "green";
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;

    // Simple checks for empty fields
    if (!name || !phone || !email || !website || !password1.value || !password2.value) {
        messageDisplay.textContent = "Please fill out all fields.";
        messageDisplay.style.color = "red";
        return false;
    }
    return true;
}


