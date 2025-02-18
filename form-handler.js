
<script>
  document.addEventListener("DOMContentLoaded", function () 
  
  {  // Initialize EmailJS with your EmailJS User ID
    emailjs.init("mGLDYfY5h5KZnJ-Y4"); // Replace with your actual User ID

    // Form submission handler
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Send email using EmailJS
      emailjs.sendForm("service_l8d5xsp", "template_1kwpzhc", this)
        .then(function (response) {
          alert("✅ Message sent successfully!"); // Success message
          console.log("Success:", response);
          document.getElementById("contact-form").reset(); // Reset form fields
        })
        .catch(function (error) {
          alert("❌ Failed to send message. Check the console for errors.");
          console.error("Error:", error);
        });
    });
  });
</script>
