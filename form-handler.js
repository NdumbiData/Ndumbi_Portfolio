// Ensure the script runs after the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your public key
    emailjs.init("mGLDYfY5h5KZnJ-Y4"); // Replace with your actual public key
  
    // Attach the form submit event handler
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Send the form data using EmailJS
      emailjs.sendForm("service_l8d5xsp", "template_1kwpzhc", this)
        .then(function (response) {
          alert("✅ Message sent successfully!"); // Success message
          console.log("Success:", response);
          document.getElementById("contact-form").reset(); // Reset form fields after submission
        })
        .catch(function (error) {
          alert("❌ Failed to send message. Check the console for errors.");
          console.error("Error:", error);
        });
    });
  });
  