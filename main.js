var listaNomeJogadores = ["Lebron James", "Kobe Bryant", "Michael Jordan", "Ja Morant", "Giannis Antetokounmpo"]

var listaImagemJogadores = ["https://i.ebayimg.com/images/g/bgwAAOSwTJJeRuHs/s-l1600.jpg", "https://api.time.com/wp-content/uploads/2016/04/wally-skalij.jpg", "https://ae01.alicdn.com/kf/HTB1WvhVKFXXXXb5XVXXq6xXFXXXe/P1031-16x20-Michael-Jordan-Chicago-Flying-Dunk-Free-throw-Line-Posters-Canvas-College-Dorm-Decor.jpg", "https://static01.nyt.com/images/2022/04/15/sports/15nba-playoffs-morant2/15nba-playoffs-morant2-mobileMasterAt3x.jpg", "https://cdn.britannica.com/53/232053-050-024C0309/Giannis-Antetokounmpo-Milwaukee-Bucks-2021-NBA.jpg"];

var listaHighlightsJogadores = ["https://www.youtube.com/watch?v=QwGf3ZH1ZUQ", "https://www.youtube.com/watch?v=0vpzl4MFPg0", "https://www.youtube.com/watch?v=ngGaY0uxDyk", "https://www.youtube.com/watch?v=lJELCNn5aUc", "https://www.youtube.com/watch?v=z9l6_7wc8jo"]

document.write("<div id='container-todos-jogadores'>")

for (i = 0; i < listaImagemJogadores.length; i++) {
    document.write(`<div id='container-jogador-${i + 1}' class='container-jogador'>`)
    document.write(`<img src =${listaImagemJogadores[i]} alt="foto de ${listaNomeJogadores[i]}">`);
    document.write(`<p class='nomes-jogadores'>${listaNomeJogadores[i]}</p>`);
    document.write(`<p class='ver-highlights'><a href="${listaHighlightsJogadores[i]}" target="_blank">Ver Highlights</a></p>`)
    document.write(`<button title='Clique para remover' id='botao-remover-${i + 1}' class='botao-remover'>x</button>`)
    document.write("</div>");
}
document.write("</div>")

function verificaLink() {
    if (document.getElementById("imagem-jogador").value.endsWith(".jpg") == false && document.getElementById("imagem-jogador").value.endsWith(".png") == false && document.getElementById("imagem-jogador").value != "") {
        alert(`Você inseriu um formato errado de link de imagem.\nPor favor, insira a url correta no formato válido de imagem (.jpg ou .png).`);
        return false;
    } else {
        return true
    }
}

function inserirJogador() {
    var nomeJogador = document.getElementById("nome-jogador").value;
    var imagemJogador = document.getElementById("imagem-jogador").value;
    var highlightsJogador = document.getElementById("highlights-jogador").value;
    var jogadorRepetido = false;
    var camposPreenchidos = false;

    for (let i = 0; i < listaNomeJogadores.length; i++) {
        if (nomeJogador == "") {
            alert("Por favor, insira o nome do jogador.")
            break;
        } else if (imagemJogador == "") {
            alert("Por favor, insira o link da imagem do jogador.")
            break;
        } else if (highlightsJogador == "") {
            alert("Por favor, insira o link dos highlights do jogador.")
            break;
        } else {
            camposPreenchidos = true;
        }
    }

    for (let i = 0; i < listaNomeJogadores.length; i++) {
        if (nomeJogador.toLowerCase() == listaNomeJogadores[i].toLowerCase()) {
            alert("Os highlights deste jogador já estão em nosso catálogo ;)")
            jogadorRepetido = true;
            break;
        }
    }

    if (camposPreenchidos == true && jogadorRepetido == false && verificaLink()) {
        listaNomeJogadores.push(nomeJogador);
        listaImagemJogadores.push(imagemJogador);
        listaHighlightsJogadores.push(highlightsJogador);

        var containerTodosJogadores = document.getElementById("container-todos-jogadores");

        containerTodosJogadores.innerHTML = containerTodosJogadores.innerHTML + `<div id='container-jogador-${i + 1}' class='container-jogador'></div>`;

        var containerJogador = document.getElementById(`container-jogador-${i + 1}`);

        containerJogador.innerHTML = `<img src=${imagemJogador}>` + `<p class="nomes-jogadores">${nomeJogador}</p>` + `<p class='ver-highlights'><a href="${listaHighlightsJogadores[i]}" target="_blank">Ver Highlights</a></p>` + `<button title='Clique para remover' id='botao-remover-${i + 1}' class='botao-remover'>x</button>`;

        i++;

        document.getElementById("nome-jogador").value = "";
        document.getElementById("imagem-jogador").value = "";
        document.getElementById("highlights-jogador").value = "";
    }
    removerJogador();
}

function removerJogador() {
    for (let j = 1; j <= listaNomeJogadores.length; j++) {
        document.getElementById(`botao-remover-${j}`).addEventListener("click", function () {
            if (confirm("Você realmente deseja remover este jogador?")) {
                document.getElementById(`container-jogador-${j}`).remove();
                listaNomeJogadores[j - 1] = "";
                console.log(listaNomeJogadores)
            }
        });
    }
}
removerJogador();
