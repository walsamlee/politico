const createOfficeToken = localStorage.getItem('token');
const url = 'https://sam-politico.herokuapp.com/api/v1/offices';

const createOffice = (form) => {
  const officeId = form.officeid.value;
  const officeType = form.officetype.value;
  const officeName = form.officename.value;

  if((officeId === '') || (officeType === '') || (officeName === '')) {
    const dispNode = document.getElementById('edit-op-message-box');

    dispNode.className = 'error';

    const messageNode = document.createElement('p');
    
    const messageText = document.createTextNode(`All Fields are required!`);

    messageNode.appendChild(messageText);

    dispNode.removeChild(dispNode.childNodes[0]);
    dispNode.appendChild(messageNode);

    dispNode.style.display = 'block';
    setTimeout(() => {
        dispNode.style.display = 'none';
        }, 4000);
  } else {
    const officeData = {
      id: officeId,
      type: officeType,
      name: officeName,
    };
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(officeData),
      headers: {
        'Content-Type': 'application/json',
        token: createOfficeToken,
      },
    })
      .then(res => res.json())
      .then((response) => {
        if (response.status === 201) {
          const dispNode = document.getElementById('edit-op-message-box');
    
          dispNode.className = 'success';

          const messageNode = document.createElement('p');
          const messageText = document.createTextNode('Name of Party Updated Successfully!');

          messageNode.appendChild(messageText);

          dispNode.removeChild(dispNode.childNodes[0]);
          dispNode.appendChild(messageNode);

          dispNode.style.display = 'block';
          setTimeout(() => {
              dispNode.style.display = 'none';
              
              form.officeid.value = '';
              form.officetype.value = '';
              form.officename.value = '';
              }, 4000);
          
        } else {
          const dispNode = document.getElementById('edit-op-message-box');

          dispNode.className = 'error';

          const messageNode = document.createElement('p');
          
          const messageText = document.createTextNode(`Party with ID ${officeId} already exist!`);

          messageNode.appendChild(messageText);

          dispNode.removeChild(dispNode.childNodes[0]);
          dispNode.appendChild(messageNode);

          dispNode.style.display = 'block';
          setTimeout(() => {
              dispNode.style.display = 'none';
              }, 8000);
        }
      })
      .catch(error => console.error('Error:', error));
  }

  
};
