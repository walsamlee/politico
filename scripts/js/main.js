const miniMenu = () => {
    const x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }

const logout = () => {
  localStorage.removeItem('who');
  localStorage.removeItem('token');
  localStorage.removeItem('what');
  window.location = `http://${document.location.host}/index.html`;
}

try {
  if(localStorage.getItem('token')) {
    document.getElementById('logout').style.display = 'block';
    document.getElementById('login').style.display = 'none';
  } else {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  }
}
catch(err) {
  console.log(err);
}