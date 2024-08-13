document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggleButton.textContent = savedTheme === 'dark-mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            themeToggleButton.textContent = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            themeToggleButton.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Blog post loading for blog.html
    const blogList = document.getElementById('blog-list');
    if (blogList) {
        fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><em>${post.date}</em></p>
                    <p>${post.content}</p>
                `;
                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
    }
});
