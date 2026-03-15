const url = "data/members.json";
const cards = document.querySelector("#directory-cards");

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    cards.appendChild(card);
  });
};

// Toggle Buttons
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => cards.classList.add("grid"));
listBtn.addEventListener("click", () => cards.classList.remove("grid"));

getMemberData();