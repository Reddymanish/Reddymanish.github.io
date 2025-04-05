document.addEventListener('DOMContentLoaded', () => {
    const userProfile = document.getElementById('user-name'); 
    const userEmail = document.getElementById('user-email'); 
    const logoutButton = document.getElementById('logout-button'); 

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!isLoggedIn || !user) {
        alert('You are not logged in! Redirecting to login...');
        window.location.href = 'login.html'; 
        return;
    }

    userProfile.textContent = user.name; 
    userEmail.textContent = user.email; 

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn'); 
        alert('You have been logged out.');
        window.location.href = 'login.html'; 
    });
});