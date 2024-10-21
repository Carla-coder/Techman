
const urlEquipamentos = "http://localhost:3000/equipamentos";
const urlComentarios = "http://localhost:3000/comentarios";
const containner = document.getElementById("containner");
const telaComentarios = document.getElementById("listComent");
const menu = document.getElementById("menu");

var equipamentos = [];
var comentarios = [];
var perfil = window.location.href.split("=")[1];

console.log(perfil);

function perfis(perfil) {
  if (perfil == "Comum") return 1;
  if (perfil == "Administrador") return 2;
  if (perfil == "Tecnico") return 3;
  if (perfil == "Gerente") return 4;
}

function listAll() {
  //listar equipamentos
  fetch(urlEquipamentos, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      equipamentos = response;
      renderEquipamentos();
    })
    .catch((err) => console.error(err));

  //listar comentarios
  fetch(urlComentarios, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      comentarios = response;
    })
    .catch((err) => console.error(err));
}

// Limpar o conteúdo anterior do menu (se necessário)
menu.innerHTML = "";

// Verifique o perfil do usuário e adicione itens de menu conforme necessário
if (perfil === "Administrador") {
  menu.innerHTML += `<nav><a href="#" id="abrirNovoEquipamento">Novo Equipamento</a></nav>`;
  //   } else if (perfil === "Funcionário") {
  //     menu.innerHTML += `<nav><a href="#" id="visualizarEquipamentos">Visualizar Equipamentos</a></nav>`;
  //     menu.innerHTML += `<nav><a href="#" id="registrarManutencao">Registrar Manutenção</a></nav>`;
  //   } else if (perfil === "Visitante") {
  //     menu.innerHTML += `<nav><a href="#" id="visualizarProdutos">Visualizar Produtos</a></nav>`;
} else {
  menu.innerHTML += `<nav><a href="#" id="login">Menu</a></nav>`;
}

console.log(menu.innerHTML); // Verifique no console se o menu está correto

// Adicione event listeners para abrir os modais
document
  .getElementById("abrirNovoEquipamento")
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    modalNewEquipamento();
  });

// Função para fechar o modal
function fecharModal() {
  document.getElementById("modalNewEquipamento").style.display = "none"; // Esconde o modal
}

function modalNewEquipamento() {
  document
    .getElementById("modalNewEquipamento")
    .setAttribute("style", "display: flex;");

  const campos = [
    document.getElementById("equipamento"),
    document.getElementById("inputDescricao"),
    document.getElementById("inputImagem"),
  ];

  const botaoCadastrar = document.getElementById("confirmaEquipamento");
  campos.forEach((campo) => {
    campo.addEventListener("input", function () {
      botaoCadastrar.disabled = campos.some((c) => c.value.trim() === ""); // Habilita o botão se todos os campos estiverem preenchidos
    });
  });

  botaoCadastrar.onclick = function () {
    addEquipamento();
  };
}

function renderEquipamentos() {
  equipamentos.forEach((e) => {
    if (e.ativo == 1) {
      let card = document.createElement("div");
      let img = document.createElement("img");
      let equips = document.createElement("div");
      let title = document.createElement("h3");
      let description = document.createElement("p");
      let buttons = document.createElement("div");
      let button1 = document.createElement("button");
      let button2 = document.createElement("button");

      equips.setAttribute("class", "equips");
      img.setAttribute("src", "../assets/" + e.imagem);
      button1.setAttribute("class", "btComentario");
      button1.setAttribute(
        "onclick",
        "modalComentario(" +
          e.id +
          ");this.setAttribute('disabled', 'disabled');"
      );
      button2.setAttribute("class", "btExcluir");
      button2.setAttribute("onclick", "modalExcluir(" + e.id + ")");
      card.setAttribute("id", "card" + e.id);
      card.setAttribute("class", "card");
      title.innerHTML = e.equipamento;
      description.innerHTML = e.descricao;
      equips.appendChild(title);
      equips.appendChild(description);
      buttons.appendChild(button1);
      if (perfil == "Administrador") {
        buttons.appendChild(button2);
      }
      equips.appendChild(buttons);
      card.appendChild(img);
      card.appendChild(equips);
      containner.appendChild(card);
    }
  });
}

function renderComentarios(id) {
  telaComentarios.innerHTML = ''; 

  comentarios.forEach((e) => {
      if (e.equipamentoId === id) {
          let card = document.createElement("div");
          let title = document.createElement("h3");
          let description = document.createElement("p");
          card.setAttribute("class", "cardComentario");
          title.innerHTML = e.perfil + " - " + formatDate(e.data);
          description.innerHTML = e.comentario;
          card.appendChild(title);
          card.appendChild(description);
          telaComentarios.appendChild(card);
      }
  });
}

function modalExcluir(id) {
  document
    .getElementById("modalExcluir")
    .setAttribute("style", "display: flex;");
  document
    .getElementById("confirmaExclusao")
    .setAttribute("onclick", "excluir(" + id + ")");
}

function modalComentario(id) {
  document
    .getElementById("modalComentarios")
    .setAttribute("style", "display: flex;");
  renderComentarios(id);
  document
    .getElementById("adicionarComentarios")
    .setAttribute(
      "onclick",
      "modalNewComentario(" +
        id +
        ");this.parentNode.setAttribute('style', 'display: none;');"
    );

  // Botão para fechar o modal e retornar à lista de equipamentos
  document.getElementById("fecharModalComentarios").onclick = function () {
    document.getElementById("modalComentarios").style.display = "none";
  };
}

function modalNewComentario(id) {
  document
    .getElementById("modalNewComentario")
    .setAttribute("style", "display: flex;");

  const campoComentario = document.getElementById("inputComent");
  const botaoCadastrar = document.getElementById("confirmaComentario");

  // Verifica se o campo de comentário tem texto para habilitar o botão
  campoComentario.addEventListener("input", function () {
    botaoCadastrar.disabled = campoComentario.value.trim().length === 0;
  });

  botaoCadastrar.onclick = function () {
    if (campoComentario.value.trim()) {
      addComentario(id);
    }
  };
}

// Excluir equipamento
function excluir(id) {
  fetch(urlEquipamentos + "/" + id, { method: "DELETE" })
    .then((response) => response.status)
    .then((response) => {
      if (response == 200) {
        window.location.reload();
      } else {
        alert("Erro ao excluir: + " + response);
      }
    })
    .catch((err) => console.error(err));
}

// Adicionar Comentário
// function addComentario(id) {
//   if (document.getElementById("inputComent").value.length > 0) {
//     const options = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body:
//         '{"comentario":"' +
//         document.getElementById("inputComent").value +
//         '","equipamento":' +
//         id +
//         ',"perfil":' +
//         perfis(perfil) +
//         "}",
//     };
//     fetch(urlComentarios, options)
//       .then((resp) => {
//         if (resp.status == 201) {
//           alert("Sucesso! Comentário cadastrado para o equipamento.");
//           window.location.reload();
//         } else {
//           alert("Erro ao adicionar comentário: " + resp.status);
//         }
//       })
//       .catch((err) => console.error(err));
//   } else {
//     alert("Preencha o campo comentário");
//   }
// }

function addComentario(id) {
  const comentario = document.getElementById("inputComent").value.trim();
  if (comentario) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comentario: comentario,
        equipamento: id,
        perfil: perfil // Gravar o perfil como string
      })
    };
    fetch(urlComentarios, options)
      .then((resp) => {
        if (resp.status == 201) {
          alert("Sucesso! Comentário cadastrado para o equipamento.");
          window.location.reload();
        } else {
          alert("Erro ao adicionar comentário: " + resp.status);
        }
      })
      .catch((err) => console.error(err));
  } else {
    alert("Preencha o campo comentário");
  }
}


// Adicionar Equipamento
function addEquipamento() {
  let ativo = document.getElementById("ativo").checked ? 1 : 0;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body:
      '{"equipamento":"' +
      document.getElementById("equipamento").value +
      '","descricao":"' +
      document.getElementById("descricao").value +
      '","imagem":"' +
      document.getElementById("imagem").value +
      '","ativo":' +
      ativo +
      "}",
  };
  fetch(urlEquipamentos, options)
    .then((resp) => {
      if (resp.status == 201) {
        alert("Sucesso! Equipamento cadastrado.");
        window.location.reload();
      } else {
        alert("Erro ao cadastrar: " + resp.status);
      }
    })
    .catch((err) => console.error(err));
}

//coverter data para formato brasileiro
function formatDate(date) {
  var date = new Date(date);
  var dia = date.getDate();
  var mes = date.getMonth() + 1;
  var ano = date.getFullYear();
  dia = dia < 10 ? "0" + dia : dia;
  mes = mes < 10 ? "0" + mes : mes;
  return dia + "/" + mes + "/" + ano;
}

// Chamar a função para listar equipamentos ao carregar a página
window.onload = listAll;


