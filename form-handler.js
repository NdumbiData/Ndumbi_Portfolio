document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your User ID
    emailjs.init('DZ1FugUiBAROGl6Zd');

    // Get the form element
    const form = document.getElementById('contact-form');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Send the form data using EmailJS
        emailjs.sendForm('ervice_l8d5xsp', 'template_1kwpzhc', form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
                form.reset(); // Reset the form after successful submission
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message, please try again.');
            });
    });
});