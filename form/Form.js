// Get form element
const form = document.getElementById('myForm');

// Add event listener to form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const genderInputs = document.getElementsByName('gender');
    const interestsInputs = document.getElementsByName('interests');
    const countrySelect = document.getElementById('country');

    // Validate name
    if (!nameInput.value.trim()) {
        showError(nameInput, 'Name is required');
        return;
    } else {
        showSuccess(nameInput);
    }

    // Validate email
    if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        return;
    } else {
        showSuccess(emailInput);
    }

    // Validate gender
    let selectedGender = '';
    for (const genderInput of genderInputs) {
        if (genderInput.checked) {
            selectedGender = genderInput.value;
            break;
        }
    }
    if (!selectedGender) {
        alert('Please select a gender');
        return;
    }

    // Validate interests
    let selectedInterests = [];
    for (const interestsInput of interestsInputs) {
        if (interestsInput.checked) {
            selectedInterests.push(interestsInput.value);
        }
    }
    if (selectedInterests.length === 0) {
        alert('Please select at least one interest');
        return;
    }

    // Get selected country
    const selectedCountry = countrySelect.value;

    // Form submission successful
    alert('Form submitted successfully!\n\nName: ' + nameInput.value + '\nEmail: ' + emailInput.value + '\nGender: ' + selectedGender + '\nInterests: ' + selectedInterests.join(', ') + '\nCountry: ' + selectedCountry);
    form.reset(); // Reset form fields
});

// Function to display error message
function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
}

// Function to clear error message
function showSuccess(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = '';
}

// Function to validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
