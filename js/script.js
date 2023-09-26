const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const label = document.querySelector('[for="password"]')
const btn = document.querySelector('button');
const message = document.createElement('p')

function checkPassword(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        password.value = '';
        confirmPassword.value = '';
        message.textContent = '* Passwords do not match'
        // message.style.color = 'Red'
        // message.style.fontSize = '1.2rem'
        label.appendChild(message)
        password.classList.add('error')
        confirmPassword.classList.add('error')
    } else {
        password.classList.remove('error')
        confirmPassword.classList.remove('error')
    }

}

btn.addEventListener('click', checkPassword)