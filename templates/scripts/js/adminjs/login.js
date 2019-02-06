const thisLogin = (form) => {
  const data = {
    email: form.email.value,
    password: form.password.value,
  };

  const url = 'https://sam-politico.herokuapp.com/api/v1/auth/login';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((response) => {
      if (response.error) {
        document.getElementById('failure').style.display = 'block';
        setTimeout(() => { document.getElementById('failure').style.display = 'none'; }, 3000);
      } else {
        sessionStorage.setItem('token', response.data[0].token);
        window.location = `http://${document.location.host}/index.html`;
      }
    })
    .catch(error => console.error('Error:', error));
};
