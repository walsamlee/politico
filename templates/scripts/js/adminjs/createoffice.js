const createOfficeToken = localStorage.getItem('token');

const createOffice = (form) => {
  const url = 'https://sam-politico.herokuapp.com/api/v1/offices';
  const officeId = form.officeid.value;
  const officeType = form.officetype.value;
  const officeName = form.officename.value;

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
        document.getElementById('success').style.display = 'block';
        setTimeout(() => { document.getElementById('success').style.display = 'none'; }, 3000);
      }
    })
    .catch(error => console.error('Error:', error));
};
