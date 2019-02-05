const thisLogin = (form) => {
    console.log(form.email.value);
    console.log(form.password.value);
    const data = {
        email: form.email.value,
        password: form.password.value
    };

    const url = 'https://sam-politico.herokuapp.com/api/v1/auth/login';
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if(response.message) {
            alert('Invalid Username or password!');
        } else {
            console.log(response.data[0].token);
            sessionStorage.setItem("token", response.data[0].token);
            window.location = 'http://' + document.location.host + '/index.html';
        }
        
    })
    .catch(error => console.error('Error:', error));
};