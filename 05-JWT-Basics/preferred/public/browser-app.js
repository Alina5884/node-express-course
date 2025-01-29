const form = document.getElementById('login-form');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const welcomeSection = document.getElementById('welcome-section');
const tokenStatus = document.getElementById('token-status');
const fetchDataBtn = document.getElementById('fetch-data');
const messageDiv = document.getElementById('welcome-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const password = passwordInput.value;

    if (name && password) {
        console.log(`Logged in as ${name}!`);
        tokenStatus.textContent = (`Logged in as ${name}!`);

        form.style.display = 'none';
        welcomeSection.style.display = 'block'
    } else {
        console.log('Name or password missing!')
    }
});

fetchDataBtn.addEventListener('click', () => {
    const name = nameInput.value;
    messageDiv.innerHTML = (`Hello ${name}!`)
});