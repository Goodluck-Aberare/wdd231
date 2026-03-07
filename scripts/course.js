// Course data
const courses = [
  { code: "WDD130", subject: "WDD", credits: 3, completed: true },
  { code: "WDD131", subject: "WDD", credits: 3, completed: true },
  { code: "WDD231", subject: "WDD", credits: 3, completed: false },
  { code: "CSE110", subject: "CSE", credits: 3, completed: true },
  { code: "CSE111", subject: "CSE", credits: 3, completed: true }
];

const container = document.querySelector("#courses");

// Function to display courses
function displayCourses(list) {
  // Clear previous content
  container.innerHTML = "";

  // Create course cards
  list.forEach(course => {
    const card = document.createElement("div");
    card.textContent = course.code;
    card.classList.add("course");

    if (course.completed) {
      card.classList.add("completed");
    }

    container.appendChild(card);
  });

  // Calculate total credits
  const total = list.reduce((sum, course) => sum + course.credits, 0);
  document.querySelector("#totalCredits").textContent =
    "The total credits for the courses listed above is " + total;
}

// Initial display
displayCourses(courses);

// Filter buttons
document.querySelector("#all").onclick = () => displayCourses(courses);

document.querySelector("#wdd").onclick = () => {
  displayCourses(courses.filter(course => course.subject === "WDD"));
};

document.querySelector("#cse").onclick = () => {
  displayCourses(courses.filter(course => course.subject === "CSE"));
};