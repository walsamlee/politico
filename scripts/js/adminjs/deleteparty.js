const searchParts = window.location.search.split('=');
const searchId = parseInt(searchParts[1], 10);

const url = `https://sam-politico.herokuapp.com/api/v1/parties/${searchId}`;

const token = localStorage.getItem('token');

fetch(url)
    .then(res => res.json())
    .then(response => {
        console.log(response.status)
        if(response.status === 404) {
            const dispNode = document.getElementById('edit-op-message-box');

            dispNode.className = 'error';

            const messageNode = document.createElement('p');
            
            const messageText = document.createTextNode(`${response.message}`);

            messageNode.appendChild(messageText);

            dispNode.removeChild(dispNode.childNodes[0]);
            dispNode.appendChild(messageNode);

            dispNode.style.display = 'block';
            setTimeout(() => {
                dispNode.style.display = 'none';
                }, 8000);
                
        } else {
            const dispNode = document.getElementById('edit-party-details');

            const nameP = document.createElement('p');

            const nameText = document.createTextNode(response.data[0].name);

            nameP.appendChild(nameText);
            dispNode.appendChild(nameP);
        }
    })
    .catch(error => console.error(`Error: ${error}`));

const deleteParty = () => {
    fetch(url, {
        method: 'DELETE',
        headers: {
            token,
        }
    })
    .then(res => res.json())
    .then(response => {
        console.log(response.status)
    })
    .catch(error => console.error(`Error: ${error}`));
}