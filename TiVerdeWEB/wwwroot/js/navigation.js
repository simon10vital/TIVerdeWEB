import {
    templateInicio,
    templateProjetos,
    templateVoluntariado,
    templateDoacoes,
    templateCadastro
} from "./templates.js";


const conteudo = document.getElementById("conteudo");


export function carregarPagina(pagina) {

    switch (pagina) {

        case "projetos":
            conteudo.innerHTML = templateProjetos();
            break;

        case "voluntariado":
            conteudo.innerHTML = templateVoluntariado();
            break;

        case "doacoes":
            conteudo.innerHTML = templateDoacoes();
            break;

        case "cadastro":
            conteudo.innerHTML = templateCadastro();
            break;

        default:
            conteudo.innerHTML = templateInicio();
            break;
    }

}