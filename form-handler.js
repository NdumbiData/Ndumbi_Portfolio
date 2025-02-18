(function() {
    emailjs.init("service_l8d5xsp"); // Replace with your EmailJS user ID
  })();
  
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    emailjs.sendForm('your-service-id', 'template_1kwpzhc', this)
      .then(function(response) {
        alert("Message sent successfully!");
      }, function(error) {
        alert("Failed to send message. Please try again.");
      });
  });
  