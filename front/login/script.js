const urlLogin = 'http://localhost:3000/usuario'; 
const senha = document.getElementById("senha");

function login() {
    const senhaValor = senha.value; // Obtém o valor do campo 'senha'

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senha: senhaValor }) // Envia a senha no formato JSON
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

