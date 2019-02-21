fetch('https://sam-politico.herokuapp.com/api/v1/parties')
.then(res => res.json())
.then(response => {
    response.data.forEach(party => {
        const display = document.getElementById('display');
        
        const partyNode = document.createElement('div');
        const logoNode = document.createElement('div');
        const columnNode = document.createElement('div');
        const nameNode = document.createElement('h3');
        const editNode = document.createElement('a');
        const deleteNode = document.createElement('a');
        const logoImg = document.createElement('img');
        
        columnNode.className = 'col-3';
        partyNode.className = 'party';
        logoNode.className = 'party-logo';
        editNode.className = 'btn btn-cart';
        deleteNode.className = 'btn btn-cart';

        if(!localStorage.getItem('token') || (localStorage.getItem('what') !== 'true')){
            document.getElementById('pry-menu-items').style.display = 'none';

            const nameText = document.createTextNode(party.name);
            const editText = document.createTextNode('View');

            logoImg.setAttribute('src', party.logoUrl);

            nameNode.appendChild(nameText);
            logoNode.appendChild(logoImg);
            editNode.appendChild(editText);
            editNode.href = `http://${document.location.host}/users/viewparty.html?=${party.id}`;
            
            partyNode.appendChild(logoNode);
            partyNode.appendChild(nameNode);
            partyNode.appendChild(editNode);
            columnNode.appendChild(partyNode);

            display.appendChild(columnNode);
        } else {
            const nameText = document.createTextNode(party.name);
            const editText = document.createTextNode('Edit');
            const deleteText = document.createTextNode('Delete');
            
            logoImg.setAttribute('src', party.logoUrl);

            nameNode.appendChild(nameText);
            logoNode.appendChild(logoImg);
            editNode.appendChild(editText);
            deleteNode.appendChild(deleteText);
            editNode.href = document.location.href.replace(/[^/]*$/, '') + 'editparty.html?=' + party.id;
            deleteNode.href = document.location.href.replace(/[^/]*$/, '') + 'deleteparty.html?=' + party.id;
            
            partyNode.appendChild(logoNode);
            partyNode.appendChild(nameNode);
            partyNode.appendChild(editNode);
            partyNode.appendChild(deleteNode);
            columnNode.appendChild(partyNode);

            display.appendChild(columnNode);
        }
    });     
})
.catch(error => console.error('Error', error));
