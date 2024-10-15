const urlLogin = 'http://localhost:3000/login'; 
const senha = document.getElementById("senha");

function login() {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senha: senha.value }) // Ajusta o formato do body para JSON
    };

    fetch(urlLogin, options)
        .then(resp => {
            if (!resp.ok) {
                alert("Senha incorreta");
                throw new Error('Login falhou');
            }
            return resp.json();
        })
        .then(resp => {
            // Redireciona para a página home com o perfil do usuário
            window.location.href = "../home/index.html?perfil=" + resp.perfil;
        })
        .catch(err => console.log(err));
}
