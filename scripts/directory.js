fetch('members.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('#members');
    data.members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Membership: ${member.membership}</p>
      `;
      container.appendChild(card);
    });
  });