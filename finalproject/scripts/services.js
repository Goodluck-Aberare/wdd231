const dataUrl = './data/services.json';
const display = document.querySelector('#service-cards');

async function getServices() {
    try {
        const response = await fetch(dataUrl);
        if (response.ok) {
            const data = await response.json();
            displayCards(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayCards(items) {
    items.forEach(item => {
        let card = document.createElement('section');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <button onclick="showDetails('${item.name}', '${item.description}')">View Details</button>
        `;
        display.appendChild(card);
    });
}

// Modal Logic
function showDetails(name, desc) {
    const modal = document.querySelector('#detail-modal');
    document.querySelector('#modal-title').textContent = name;
    document.querySelector('#modal-body').textContent = desc;
    modal.showModal();
}

getServices();