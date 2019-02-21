const searchParts = window.location.search.split('=');
const searchId = parseInt(searchParts[1], 10);

const url = `https://sam-politico.herokuapp.com/api/v1/parties/${searchId}`;

const token = localStorage.getItem('token');

if(!localStorage.getItem('token') || (localStorage.getItem('what') !== 'true')) {
    document.getElementById('pry-menu-items').style.display = 'none';
    document.getElementById('delete-party').style.display = 'none';
} else {
    fetch(url)
    .then(res => res.json())
    .then(response => {
        if(response.status === 200) {
            const dispNode = document.getElementById('delete-party-details');
            const partyLogo = document.getElementById('cur-party-logo');

            const partyImg = document.createElement('img');
            const nameP = document.createElement('p');

            const nameText = document.createTextNode(response.data[0].name);

            partyLogo.className = 'cur-party-logo';

            partyImg.setAttribute('src', response.data[0].logoUrl);
            partyImg.setAttribute('alt', 'party logo');

            partyLogo.appendChild(partyImg);

            nameP.appendChild(nameText);

            dispNode.appendChild(nameP);
        } else {
            const dispNode = document.getElementById('edit-op-message-box');

            dispNode.className = 'error';

            const messageNode = document.createElement('p');
            
            const messageText = document.createTextNode(`${response.error}`);

            messageNode.appendChild(messageText);

            dispNode.removeChild(dispNode.childNodes[0]);
            dispNode.appendChild(messageNode);

            dispNode.style.display = 'block';
            setTimeout(() => {
                dispNode.style.display = 'none';
                }, 8000);
        }
    })
    .catch(error => console.error(`Error: ${error}`));
}

const deleteParty = () => {
    fetch(url, {
        method: 'DELETE',
        headers: {
            token,
        }
    })
    .then(res => res.json())
    .then(response => {
        if(response.status === 200) {
            const dispNode = document.getElementById('edit-op-message-box');
    
            dispNode.className = 'success';

            const messageNode = document.createElement('p');
            const messageText = document.createTextNode(response.data[0].message);

            messageNode.appendChild(messageText);

            dispNode.removeChild(dispNode.childNodes[0]);
            dispNode.appendChild(messageNode);

            dispNode.style.display = 'block';
            setTimeout(() => {
                dispNode.style.display = 'none';
                }, 4000);
            
            window.location = `${document.location.href.replace(/[^/]*$/, '')}viewparties.html`;
        } else {
            const dispNode = document.getElementById('edit-op-message-box');

            dispNode.className = 'error';

            const messageNode = document.createElement('p');
            
            const messageText = document.createTextNode(`${response.error}`);

            messageNode.appendChild(messageText);

            dispNode.removeChild(dispNode.childNodes[0]);
            dispNode.appendChild(messageNode);

            dispNode.style.display = 'block';
            setTimeout(() => {
                dispNode.style.display = 'none';
                }, 8000);
        }
    })
    .catch(error => console.error(`Error: ${error}`));
}