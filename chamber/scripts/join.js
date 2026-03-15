document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    // Collect form data
    const formData = new FormData(form);
    const member = {
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      url: formData.get("url"),
      level: formData.get("level")
    };

    // Simple validation
    if (!member.name || !member.business || !member.email) {
      alert("Please fill out all required fields (Name, Business, Email).");
      return;
    }

    // Display confirmation message
    alert(`Thank you, ${member.name}! Your application for the ${member.level} membership has been submitted.`);

    // Optionally: log to console (could be sent to server later)
    console.log("New Member Application:", member);

    // Reset form
    form.reset();
  });
});