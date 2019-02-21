const searchParts = window.location.search.split('=');
const searchId = parseInt(searchParts[1], 10);

const url = `https://sam-politico.herokuapp.com/api/v1/parties/${searchId}`;

fetch(url)
    .then(res => res.json())
    .then(response => {
        console.log(response);

        if(response.status === 200) {
            const partyLogo = document.getElementById('party-logo');
            const partyName = document.getElementById('party-details');

            const nameNode = document.createElement('p');
            const partyImg = document.createElement('img');

            const nameText = document.createTextNode(response.data[0].name);

            partyImg.setAttribute('src', response.data[0].logoUrl);
            partyImg.setAttribute('alt', 'Party Logo');

            nameNode.appendChild(nameText);

            partyLogo.appendChild(partyImg);
            partyName.appendChild(nameNode);
            
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
    .catch(error => console.log(`Error: ${error}`));