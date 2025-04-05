document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (!storedUser) {
            alert('No user found! Please sign up first.');
            return;
        }

        if (email !== storedUser.email || password !== storedUser.password) {
            alert('Invalid email or password. Please try again.');
            return;
        }

        alert('Login successful! Redirecting to your profile...');

        localStorage.setItem('isLoggedIn', 'true');

        window.location.href = 'profile.html';
    });
});
