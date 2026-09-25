// ==========================================
// TEMPLATES
// ==========================================

import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";



// ==========================================
// NAVEGAÇÃO
// ==========================================

function carregarPagina(pagina) {

    const conteudo =
        document.getElementById("conteudo");


    switch (pagina) {

        case "projetos":

            conteudo.innerHTML =
                templateProjetos();

            break;


        case "cadastro":

            conteudo.innerHTML =
                templateCadastro();

            configurarFormulario();

            break;


        default:

            conteudo.innerHTML =
                templateInicio();

            break;

    }

}

// ==========================================
// FORMULÁRIO
// ==========================================

function configurarFormulario() {

    const dadosSalvos =
        localStorage.getItem("cadastroTIVerde");

    if (dadosSalvos) {

        const dados =
            JSON.parse(dadosSalvos);

        document.getElementById("nome").value = dados.nome;
        document.getElementById("email").value = dados.email;
        document.getElementById("telefone").value = dados.telefone;
        document.getElementById("cpf").value = dados.cpf;
        document.getElementById("endereco").value = dados.endereco;
        document.getElementById("estado").value = dados.estado;
        document.getElementById("cidade").value = dados.cidade;
        document.getElementById("CEP").value = dados.CEP;
        document.getElementById("mensagem").value = dados.mensagem;

        document.getElementById("voluntario").checked =
            dados.voluntario;

        document.getElementById("doacao").checked =
            dados.doacao;
    }


    const formulario =
        document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!formulario.checkValidity()) {

        formulario.reportValidity();

        return;
    }

    const dados = {

        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cpf: document.getElementById("cpf").value,
        endereco: document.getElementById("endereco").value,
        estado: document.getElementById("estado").value,
        cidade: document.getElementById("cidade").value,
        CEP: document.getElementById("CEP").value,
        mensagem: document.getElementById("mensagem").value,

        voluntario:
            document.getElementById("voluntario").checked,

        doacao:
            document.getElementById("doacao").checked
    };


    localStorage.setItem(
        "cadastroTIVerde",
        JSON.stringify(dados)
    );


    const toast =
        document.getElementById("toast");

    toast.style.display = "block";

    setTimeout(function() {

        toast.style.display = "none";

    }, 3000);

});

}


// ==========================================
// NAVEGAÇÃO PELO MENU
// ==========================================

document.addEventListener("click", function(event) {

    const link =
        event.target.closest("[data-page]");


    if (!link) {
        return;
    }


    event.preventDefault();


    const pagina =
        link.dataset.page;


    carregarPagina(pagina);

});

// ==========================================
// MENU HAMBÚRGUER
// ==========================================

const menuBtn = document.getElementById("menu-btn");
const menuLinks = document.querySelector(".menu-links");

if (menuBtn && menuLinks) {

    menuBtn.addEventListener("click", function() {

        menuLinks.classList.toggle("ativo");

    });

}

// ==========================================
// PÁGINA INICIAL
// ==========================================

carregarPagina("inicio");