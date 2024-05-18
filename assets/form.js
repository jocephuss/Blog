//console.log('Synced3');
//
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

let mode = 'dark';
let form = 'form';

themeSwitcher.addEventListener('click', function () {
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
});
 function validateForm() {
    var username = document.getElementById('username').ariaValueMax;
    var title = document.getElementById('title').value;
    var thoughts = document.getElementById('thoughts').value;

    if (username === ""|| title === "" || thoughts == "") {
        alert("Missing required fields!!");
        return false;
    }
 }