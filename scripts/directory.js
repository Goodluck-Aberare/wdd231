async function loadMembers() {
  const response = await fetch('members.json');
  const data = await response.json();
  const container = document.querySelector('#members');

  container.innerHTML = ""; // clear before injecting

  data.members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership: ${member.membership}</p>
    `;
    container.appendChild(card);
  });
}

loadMembers();

// ✅ Grid/List toggle
document.getElementById('gridView').addEventListener('click', () => {
  const container = document.getElementById('members');
  container.classList.add('grid');
  container.classList.remove('list');
});

document.getElementById('listView').addEventListener('click', () => {
  const container = document.getElementById('members');
  container.classList.add('list');
  container.classList.remove('grid');
});