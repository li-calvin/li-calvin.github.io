function submitForm() {
    // Get values from the form
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    // Display a personalized message
    alert('Thank you, ' + firstName + ' ' + lastName + '!');

    // Prevent the form from submitting (for demonstration purposes)
    return false;
}