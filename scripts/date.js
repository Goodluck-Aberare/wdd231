// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Show the last modified date of the document
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;