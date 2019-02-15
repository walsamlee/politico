fetch('https://sam-politico.herokuapp.com/api/v1/parties')
.then(res => res.json())
.then(response => {
    console.log(response.data);

    response.data.forEach(party => {
        console.log(party);
        const display = document.getElementById('display');
        
        const partyNode = document.createElement('div');
        const logoNode = document.createElement('div');
        const columnNode = document.createElement('div');
        const nameNode = document.createElement('h3');
        const editNode = document.createElement('a');
        const deleteNode = document.createElement('a');
        
        columnNode.className = 'col-3';
        partyNode.className = 'party';
        logoNode.className = 'party-logo';
        editNode.className = 'btn btn-cart';
        deleteNode.className = 'btn btn-cart';

        const nameText = document.createTextNode(party.name);
        const editText = document.createTextNode('Edit');
        const deleteText = document.createTextNode('Delete');
        
        nameNode.appendChild(nameText);
        editNode.appendChild(editText);
        deleteNode.appendChild(deleteText);
        editNode.href = document.location.href.replace(/[^/]*$/, '') + 'editparty.html?=' + party.id;
        deleteNode.href = document.location.href.replace(/[^/]*$/, '') + 'deleteparty.html?=' + party.id;
        
        partyNode.appendChild(nameNode);
        partyNode.appendChild(editNode);
        partyNode.appendChild(deleteNode);
        columnNode.appendChild(partyNode);

        display.appendChild(columnNode);
    });     
})
.catch(error => console.error('Error', error));
