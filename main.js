var listaImagemFilmes = ["https://img.elo7.com.br/product/zoom/1E0EB9C/poster-cartaz-o-poderoso-chefao-chefao.jpg", "https://br.web.img3.acsta.net/pictures/16/10/06/23/05/054278.jpg", "https://waltermattos.com/site2/wp-content/uploads/2014/11/tut_Analise_Grafica_Cartaz_Interstellar_05_011.png", "https://br.web.img3.acsta.net/medias/nmedia/18/87/02/76/19871246.jpg", "https://i.pinimg.com/474x/b4/25/97/b4259768165c3d8d8365d9c495b507e2.jpg"];
var listaNomeFilmes = ["O Poderoso Chefão", "A Chegada", "Interestelar", "Cidade de Deus", "Sussurros do Coração"]

document.write("<div id='container-todos-filmes'>")

for (i = 0; i < listaImagemFilmes.length; i++) {
    document.write(`<div id='container-filme-${i + 1}' class='container-filme'>`)
    document.write(`<img src =${listaImagemFilmes[i]}>`);
    document.write(`<p class='nomes-filmes'>${listaNomeFilmes[i]}</p>`);
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
    if (verificaLink()) {
        var nomeFilme = document.getElementById("nome-filme").value;
        var imagemFilme = document.getElementById("imagem-filme").value;
        var filmeRepetido = false;

        for (j = 0; j < listaNomeFilmes.length; j++) {
            if (nomeFilme.toLowerCase() == listaNomeFilmes[j].toLowerCase()) {
                alert("Este filme já está em nosso catálogo ;)")
                filmeRepetido = true;
                break;
            }
        }

        if (filmeRepetido == false) {
            listaNomeFilmes.push(nomeFilme);
            listaImagemFilmes.push(imagemFilme);

            var containerTodosFilmes = document.getElementById("container-todos-filmes");

            containerTodosFilmes.innerHTML = containerTodosFilmes.innerHTML + `<div id='container-filme-${i + 1}' class='container-filme'></div>`;

            var containerFilme = document.getElementById(`container-filme-${i + 1}`);

            containerFilme.innerHTML = `<img src=${imagemFilme}>`;
            containerFilme.innerHTML = containerFilme.innerHTML + `<p class="nomes-filmes">${nomeFilme}</p>`;

            i++;
        }

        document.getElementById("nome-filme").value = "";
        document.getElementById("imagem-filme").value = "";

        console.log(i);
    }
}