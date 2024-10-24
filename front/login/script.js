const buttons = document.querySelectorAll('.key-button');
const form = document.querySelector('#password-form');
const clearButton = document.querySelector('#clear');
const submitButton = document.querySelector('#submit');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerHTML;
        if (value !== 'C' && value !== '↵') {
            form.password.value += value;
        }
    });
});

clearButton.addEventListener('click', () => {
    form.password.value = '';
});

submitButton.addEventListener('click', () => {
    const password = form.password.value;
    fetch('http://localhost:3000/usuario')
        .then(response => response.json())
        .then(data => {
            const user = data.find((user) => user.senha === password);
            if (user) {
                window.localStorage.setItem('user', JSON.stringify(user));
                window.location.href = '../home/index.html';
            } else {
                alert('Senha Incorreta');
            }
        });
});