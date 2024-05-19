//console.log('Synced3');
//
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const submitBtn = document.querySelector('#submit');

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
//function validateForm() {
//    var username = document.getElementById('username').value;
//    var title = document.getElementById('title').value;
 //   var content = document.getElementById('content').value;

//    if (username === "" || title === "" || content === "") {
 //       alert("Missing required fields!!");
 //       return false;
 //   }
//}
const formData = {
    username: '',
    title: '',
    content: '',
}

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
   var title = document.getElementById('title').value;
   var content = document.getElementById('content').value;
    
    if (username === '' || title === '' || content === '') {
        alert('Please fill out all fields in the form.');
    } else {
        // If the form is not blank, proceed with storing the data and redirecting
        localStorage.setItem('formData', JSON.stringify(formData));
        window.location.href = 'blog.html';
    }

 });