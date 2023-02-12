var listaImagemFilmes = ["https://img.elo7.com.br/product/zoom/1E0EB9C/poster-cartaz-o-poderoso-chefao-chefao.jpg", "https://br.web.img3.acsta.net/pictures/16/10/06/23/05/054278.jpg", "https://waltermattos.com/site2/wp-content/uploads/2014/11/tut_Analise_Grafica_Cartaz_Interstellar_05_011.png", "https://br.web.img3.acsta.net/medias/nmedia/18/87/02/76/19871246.jpg", "https://i.pinimg.com/474x/b4/25/97/b4259768165c3d8d8365d9c495b507e2.jpg"];
var listaNomeFilmes = ["O Poderoso Chefão", "A Chegada", "Interestelar", "Cidade de Deus", "Sussurros do Coração"]

var listaTrailerFilmes = ["https://www.youtube.com/watch?v=SaHZHU-44XA", "https://www.youtube.com/watch?v=rNciXGzYZms", "https://www.youtube.com/watch?v=BYUZhddDbdc", "https://www.youtube.com/watch?v=nBWtTrLxUjM", "https://www.youtube.com/watch?v=0pVkiod6V0U"]

document.write("<div id='container-todos-filmes'>")

for (i = 0; i < listaImagemFilmes.length; i++) {
    document.write(`<div id='container-filme-${i + 1}' class='container-filme'>`)
    document.write(`<img src =${listaImagemFilmes[i]}>`);
    document.write(`<p class='nomes-filmes'>${listaNomeFilmes[i]}</p>`);
    document.write(`<p class='ver-trailer'><a href="${listaTrailerFilmes[i]}" target="_blank">Ver Trailer</a></p>`)
    document.write("<p class='dica-remover'>Clique para remover o filme</p>")
    document.write(`<button id='botao-remover-${i + 1}' class='botao-remover'>x</button>`)
    document.write("</div>");
}
document.write("</div>")

function verificaLink() {
    if (document.getElementById("imagem-filme").value.endsWith(".jpg") == false && document.getElementById("imagem-filme").value.endsWith(".png") == false) {
        alert(`Você inseriu um formato errado de link.\nPor favor, insira a url correta no formato válido de imagem (.jpg ou .png).`);
        return false;
    } else {
        return true
    }
}

function inserirFilme() {
        var nomeFilme = document.getElementById("nome-filme").value;
        var imagemFilme = document.getElementById("imagem-filme").value;
        var trailerFilme = document.getElementById("trailer-filme").value;
        var filmeRepetido = false;

        for (let i = 0; i < listaNomeFilmes.length; i++) {
            if (nomeFilme.toLowerCase() == listaNomeFilmes[i].toLowerCase()) {
                alert("Este filme já está em nosso catálogo ;)")
                filmeRepetido = true;
                break;
            }
        }

        if (filmeRepetido == false && verificaLink()) {
            listaNomeFilmes.push(nomeFilme);
            listaImagemFilmes.push(imagemFilme);
            listaTrailerFilmes.push(trailerFilme);

            var containerTodosFilmes = document.getElementById("container-todos-filmes");

            containerTodosFilmes.innerHTML = containerTodosFilmes.innerHTML + `<div id='container-filme-${i + 1}' class='container-filme'></div>`;

            var containerFilme = document.getElementById(`container-filme-${i + 1}`);

            containerFilme.innerHTML = `<img src=${imagemFilme}>`;
            containerFilme.innerHTML = containerFilme.innerHTML + `<p class="nomes-filmes">${nomeFilme}</p>`;
            containerFilme.innerHTML = containerFilme.innerHTML + `<p class='ver-trailer'><a href="${listaTrailerFilmes[i]}" target="_blank">Ver Trailer</a></p>`;          

            i++;
        }

        document.getElementById("nome-filme").value = "";
        document.getElementById("imagem-filme").value = "";
        document.getElementById("trailer-filme").value = "";
}


for (let i = 1; i <= listaNomeFilmes.length; i++) {
    document.getElementById(`botao-remover-${i}`).addEventListener("click", function () {
        if (confirm("Você realmente deseja remover este filme?")) {
            document.getElementById(`container-filme-${i}`).remove();
        }
    });
}
  

// for (i = 0; i < listaNomeFilmes.length; i++) {
// document.getElementById(`botao-remover-${i + 1}`).addEventListener("click", function() {idFilme = `olá, ${i + 1}`; console.log(idFilme)});
// }

// function removerFilme() {
      
    
//     var filmeRemovido = document.getElementById("container-filme-2");

//     filmeRemovido.remove();
// }

