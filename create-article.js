document.getElementById('create-article-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    const response = await fetch('http://localhost:5000/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content, author: 'John Doe' })
    });
    
    const data = await response.json();
    alert(data.message || 'An error occurred.');
    if (response.ok) {
        // Redirect to home or article list page
        window.location.href = 'index.html';
    }
});
