document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("joinForm");
    const timestampField = document.getElementById("timestamp");

    // Set the hidden timestamp field to current date/time
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    form.addEventListener("submit", (event) => {
        // Only prevent default if you want to stop the form from going to thankyou.html
        // For your assignment, you usually want it to proceed, so consider removing event.preventDefault()
        
        const formData = new FormData(form);
        const member = {
            fname: formData.get("fname"),
            lname: formData.get("lname"),
            orgname: formData.get("orgname"),
            email: formData.get("email"),
            level: formData.get("level"),
            timestamp: formData.get("timestamp")
        };

        console.log("New Member Application:", member);
        // The form will now proceed to thankyou.html because method="get" and action="thankyou.html" are set
    });
});