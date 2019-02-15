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
        const viewNode = document.createElement('a');
        
        columnNode.className = 'col-3';
        partyNode.className = 'party';
        logoNode.className = 'party-logo';
        viewNode.className = 'btn btn-cart';

        const nameText = document.createTextNode(party.name);
        const viewText = document.createTextNode('View');
        
        nameNode.appendChild(nameText);
        viewNode.appendChild(viewText);
        viewNode.href = document.location.href.replace(/[^/]*$/, '') + 'viewparty.html?=' + party.id;
        
        partyNode.appendChild(nameNode);
        partyNode.appendChild(viewNode);
        columnNode.appendChild(partyNode);

        display.appendChild(columnNode);
    });   
})
.catch(error => console.error('Error', error));
