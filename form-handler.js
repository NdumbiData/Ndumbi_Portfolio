// Initialize EmailJS with your public key
emailjs.init('mGLDYfY5h5KZnJ-Y4'); // Replace with your public key

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission (page reload)

    // Send the form data using EmailJS
    emailjs.sendForm('service_l8d5xsp', 'template_1kwpzhc', this) // Use your service and template IDs
        .then(function(response) {
            console.log('Success!', response);
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset(); // Optionally reset the form after submission
        }, function(error) {
            console.log('Failed...', error);
            alert('There was an error sending your message. Please try again later.');
        });
});
