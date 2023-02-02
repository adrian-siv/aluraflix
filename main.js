var listaFilmes = ["https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/91/90/98/20169244.jpg", "https://br.web.img3.acsta.net/pictures/16/10/06/23/05/054278.jpg", "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg", "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg"];

for (i=0; i < listaFilmes.length; i++){
  if (listaFilmes[i].endsWith(".jpg") == false){
    alert(`Você colocou o formato errado de link no seu filme ${i+1}.`);
  }  
}

// "Por favor, insira uma url no formato válido de imagem (.jpg)"

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<img src =" + listaFilmes[i] + ">");
}

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