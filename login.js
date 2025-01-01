document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('http://localhost:5000/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    if (response.ok) {
        alert('Login successful!');
        // Redirect to dashboard or home page
        window.location.href = 'index.html';
    } else {
        alert(data.error || 'An error occurred.');
    }
});
