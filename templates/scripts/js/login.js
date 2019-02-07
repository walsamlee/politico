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
        localStorage.setItem('token', response.data[0].token);
        localStorage.setItem('user', response.data[0].user.id);
        if (response.data[0].user.isAdmin === 0) {
          window.location = `http://${document.location.host}/users/viewparties.html`;
        } else {
          window.location = `http://${document.location.host}/admin/editparty.html`;
        }
      }
    })
    .catch(error => console.error('Error:', error));
};
