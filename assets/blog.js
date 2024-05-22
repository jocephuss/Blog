//console.log('Synced2');

const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

let mode = 'dark';
let form = 'form';

themeSwitcher.addEventListener('click', function () {
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light'); //theme switcher carried over
    }
    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
});


// document.addEventListener('DOMContentLoaded', function() {
//     var blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

//     if (blogPosts) {
//         blogPosts.forEach(function(post) {
//             var blogPostDiv = document.createElement('div');
//             blogPostDiv.classList.add('blog-post');

//             var usernamePara = document.createElement('p');
//             usernamePara.textContent = 'Author: ' + post.username;

//             var titlePara = document.createElement('h2');
//             titlePara.textContent = 'Title: ' + post.title;

//             var contentPara = document.createElement('p');
//             contentPara.textContent = post.content;

//             blogPostDiv.appendChild(usernamePara);
//             blogPostDiv.appendChild(titlePara);
//             blogPostDiv.appendChild(contentPara);

//             // Append the div to the main element
//             const mainElement = document.querySelector('main');
//             mainElement.appendChild(blogPostDiv);
//         });
//     } else {
//         console.log('No blog post data found.');
//     }
// }); updated code below seems to work better



document.addEventListener('DOMContentLoaded', function() {
    var blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

    if (blogPosts) {
        blogPosts.forEach(function(post) {
            var blogPostDiv = document.createElement('div');
            blogPostDiv.classList.add('blog-post');

            var usernamePara = document.createElement('p');
            usernamePara.textContent = 'Author: ' + post.username;

            var titlePara = document.createElement('h2');
            titlePara.textContent = 'Title: ' + post.title;

            var contentPara = document.createElement('p');
            contentPara.textContent = post.content;

            blogPostDiv.appendChild(usernamePara);
            blogPostDiv.appendChild(titlePara);
            blogPostDiv.appendChild(contentPara);

            // Append each div to the main element
            const mainElement = document.querySelector('main');
            mainElement.appendChild(blogPostDiv);
        });
    } else {
        console.log('No blog post data found.');
    }
});