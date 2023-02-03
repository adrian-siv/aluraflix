var listaFilmes = ["https://img.elo7.com.br/product/zoom/1E0EB9C/poster-cartaz-o-poderoso-chefao-chefao.jpg", "https://br.web.img3.acsta.net/pictures/16/10/06/23/05/054278.jpg", "https://waltermattos.com/site2/wp-content/uploads/2014/11/tut_Analise_Grafica_Cartaz_Interstellar_05_011.png", "https://br.web.img3.acsta.net/medias/nmedia/18/87/02/76/19871246.jpg", "https://i.pinimg.com/474x/b4/25/97/b4259768165c3d8d8365d9c495b507e2.jpg"];

var listaNomeFilmes = ["O Poderoso Chefão", "A Chegada", "Interestelar", "Cidade de Deus", "Sussurros do Coração"]

function verificaLink() {
    for (i = 0; i < listaFilmes.length; i++) {
        if (listaFilmes[i].endsWith(".jpg") == false) {
            alert(`Você colocou o formato errado de link no seu ${i + 1}° filme.\nPor favor, insira a url correta no formato válido de imagem (.jpg).`);
        }
    }
}

document.write('<div class="container-todos-filmes">')

for (i = 0; i < listaFilmes.length; i++) {
    document.write("<div class='container-filme'>")
    document.write("<img src =" + listaFilmes[i] + ">");
    document.write("<p>" + listaNomeFilmes[i] + "</p>");
    document.write("</div>");
}
document.write("</div>")

/* Populando a lista utilizando PUSH 
var listaFilmes = [];

listaFilmes.push("https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/91/90/98/20169244.jpg", "https://br.web.img3.acsta.net/pictures/16/10/06/23/05/054278.jpg", "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg", "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg");
*/

/* Exibir filme usando forEach
function exibirFilme(imgFilme){
  document.write("<img src=" + imgFilme + ">");
}

listaFilmes.forEach(exibirFilme);
*/


/* Exibir filme usando WHILE 
var i = 0;
while (i < listaFilmes.length){
  document.write("<img src =" + listaFilmes[i] + ">");
  i++;
} 
*/