//Responsividade da barra de menu

function menuBar() {
  let x = document.getElementById("meuTitulo");
  if (x.className === "titulo") {
    x.className += " responsive";
  } else {
    x.className = "titulo";
  }
}

//Animação do scroll

function revelacao(){
  const revelacoes = document.querySelectorAll(".revelacao")
  for (let i = 0; i < revelacoes.length; i++){
      let windowHeight = window.innerHeight
      let elementoDoTopo = revelacoes[i].getBoundingClientRect().top
      let elementoVisivel = 150
      if (elementoDoTopo < windowHeight - elementoVisivel){
          revelacoes[i].classList.add("ativo")
      }else {
          revelacoes[i].classList.remove("ativo")
      }
  }
}

window.addEventListener("scroll", revelacao)

revelacao()

//Tabs

function abrirImagem(evt, nomeDaImagem){

  let i, tabcontent, tablinks

  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none"
  }

  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }

  document.getElementById(nomeDaImagem).style.display = "block"
  evt.currentTarget.className += " active"
}

document.getElementById("defaultOpen").click()

//Galeria de imagem

let imagemCheiaBox = document.getElementById("imagemCheiaBox")
let imagemCheia = document.getElementById("imagemCheia")

function abrirImagemCheia(ima){
  imagemCheiaBox.style.display = "flex"
  imagemCheia.src = ima
}

function fecharImagemCheia(){
  imagemCheiaBox.style.display = "none"
}