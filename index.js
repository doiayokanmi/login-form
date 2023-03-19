var signin = document.getElementById('signin');
var signup = document.getElementById('signup');
var asidein = document.getElementById('asidein');
var asideup = document.getElementById('asideup');

function chngeSec() {
    asideup.style.display = 'none';
    asidein.style.display = 'flex';
    signin.style.display = 'flex';
    signup.style.display = 'none';
}

function chngeCreate() {
    asideup.style.display = 'flex';
    asidein.style.display = 'none';
    signin.style.display = 'none';
    signup.style.display = 'flex';
}