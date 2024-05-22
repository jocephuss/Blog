//console.log('Synced3');
//
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const submitBtn = document.querySelector('#submit');
const posts = [''];

let mode = 'dark';
let form = 'form';

themeSwitcher.addEventListener('click', function () {
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light');
    } // event listener toggles between dark and light display
    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
});

// submitBtn.addEventListener('click', function (event) {
//     event.preventDefault();
    
//     var username = document.getElementById('username').value;
//     var title = document.getElementById('title').value;
//     var content = document.getElementById('content').value;

//     if (username === '' || title === '' || content === '') {
//         alert('Please fill out all fields in the form.');
//     } else {
//         var formData = {
//             username: username, // storing data into local storage 
//             title: title,       // prevents further action if fields are blank
//             content: content
//         };
        
//         localStorage.setItem('formData', JSON.stringify(formData));
//         window.location.href = 'blog.html';
//     }
// }); updated to slightly different variation



submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    if (username === '' || title === '' || content === '') {
        alert('Please fill out all fields in the form.');
    } else {
        var formData = {
        username: username,
        title: title,
        content: content
        };

        // Check if there are existing posts in localStorage
        var existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Add the new post to the existing posts array
        existingPosts.push(formData);

        // Save the updated array back to localStorage
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        window.location.href = 'blog.html';
    }
});
