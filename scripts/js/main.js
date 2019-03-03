const miniMenu = () => {
    const x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }

const showProfile = () => {
  const userProfile = document.getElementById("user-info-main");
  if (userProfile.style.display === "none") {
    userProfile.style.display = "block";
  } else {
    userProfile.style.display = "none";
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
    
    document.getElementById("user-info-main").style.display = 'none';
    document.getElementById('logout').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';

    if(localStorage.getItem('what') === 'false') {
      document.getElementById('vote-link').style.display = 'inline';
      document.getElementById('user-view-parties-link').style.display = 'inline';
      document.getElementById('vote-history-link').style.display = 'inline';
      document.getElementById('create-party-link').style.display = 'none';
      document.getElementById('addmin-view-parties-link').style.display = 'none';
      document.getElementById('create-office-link').style.display = 'none';
    } else {
      document.getElementById('vote-link').style.display = 'none';
      document.getElementById('user-view-parties-link').style.display = 'none';
      document.getElementById('vote-history-link').style.display = 'none';
      document.getElementById('create-party-link').style.display = 'inline';
      document.getElementById('addmin-view-parties-link').style.display = 'inline';
      document.getElementById('create-office-link').style.display = 'inline';
    }
  } else {
    document.getElementById("user-icon").style.display = 'none';
    document.getElementById("user-info-main").style.display = 'none';
    document.getElementById('logout').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'block';

    document.getElementById('vote-link').style.display = 'none';
    document.getElementById('user-view-parties-link').style.display = 'none';
    document.getElementById('vote-history-link').style.display = 'none';
    document.getElementById('create-party-link').style.display = 'none';
    document.getElementById('addmin-view-parties-link').style.display = 'none';
    document.getElementById('create-office-link').style.display = 'none';
  }
}
catch(err) {
  console.log(err);
}