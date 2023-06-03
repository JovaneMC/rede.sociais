function togglemode() {
const html = document.documentElement
html.classList.toggle("light") 
//posso usar essa forma debaixo ou essa abaixo dela
//if (html.classList.contains('light')) {
//html.classList.remove('light')
//} else { (html.classList.add('light'))
//}

//pegar a tag img 
const img = document.querySelector('#profile img')

//substituir a imagem
if (html.classList.contains("light")) { img.setAttribute('src', './assets/avatar-dark.png')
} 
//se tiver light mode manter a imagem normal
else  { img.setAttribute("src", "./assets/avatar-light.png")} 

const alt = document.querySelector("#profile img")

//substituir a imagem
if (html.classList.contains("light")) {
  img.setAttribute(
    "alt",
    "foto de Jovane Costa, usando calça marrom, camisa branca, com um fundo preto na imagem."
  )
}

//se tiver light mode manter a imagem normal
else {
  img.setAttribute(
    "alt",
    "foto de Jovane Costa, usando calça verde, camisa roxa, com um fundo roxo na imagem."
  )
} 

}