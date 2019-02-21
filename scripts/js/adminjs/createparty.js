const endpoint_url = 'https://sam-politico.herokuapp.com/api/v1/parties';
const token = localStorage.getItem('token');

const cloudinary_url = 'https://api.cloudinary.com/v1_1/walsam/image/upload';
const cloudinary_upload_preset = 'w4rdqtby';

const logoPreview = document.getElementById('logoPreview');
const fileUpoad = document.getElementById('party-logo');

if(!localStorage.getItem('token') || (localStorage.getItem('what') !== 'true')) {
  document.getElementById('pry-menu-items').style.display = 'none';
  document.getElementById('create-party').style.display = 'none';
  
}

fileUpoad.addEventListener('change', (event => {
    const file = event.target.files[0];

    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', cloudinary_upload_preset);

    axios({
        url: cloudinary_url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    })
        .then(response => {
            logoPreview.src = response.data.secure_url;
        })
        .catch(error => {
            console.log(error);
        });
}));

const createParty = (form) => {
    if(form.partyname.value === '' || form.parthqaddress.value === '' || form.logoPreview.getAttribute('src') === '../assets/images/icon.png') {
        const dispNode = document.getElementById('edit-op-message-box');

        dispNode.className = 'error';

        const messageNode = document.createElement('p');
        
        const messageText = document.createTextNode(`Party details cannot be empty`);

        messageNode.appendChild(messageText);

        dispNode.removeChild(dispNode.childNodes[0]);
        dispNode.appendChild(messageNode);

        dispNode.style.display = 'block';
        setTimeout(() => {
            dispNode.style.display = 'none';
            }, 4000);
    } else {
        const partyData = {
            name: form.partyname.value,
            hqAddress: form.parthqaddress.value,
            logoUrl: form.logoPreview.getAttribute('src'),
        }
    
        fetch(endpoint_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token,
            },
            body: JSON.stringify(partyData),
        })
            .then(res => res.json())
            .then(response => {
                if(response.status === 201) {
                    const dispNode = document.getElementById('edit-op-message-box');
    
                    dispNode.className = 'success';
    
                    const messageNode = document.createElement('p');
                    const messageText = document.createTextNode('Party Created Successfully!');
    
                    messageNode.appendChild(messageText);

                    dispNode.removeChild(dispNode.childNodes[0]);
                    dispNode.appendChild(messageNode);
    
                    dispNode.style.display = 'block';
                    setTimeout(() => {
                        dispNode.style.display = 'none';
                        }, 4000);
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

                        window.location = `${document.location.href.replace(/[^/]*$/, '')}viewparties.html`;
                        }, 4000);
                }
            })
            .catch(error => {
                console.error(`Error: ${error}`);
            });
    }
}
