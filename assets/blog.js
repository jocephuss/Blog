//console.log('Synced2');

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

const formData = JSON.parse(localStorage.getItem('formData'));
const formDiv = document.getElementById('formInfo');
