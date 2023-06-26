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

//Slider Carrosel

const controls = document.querySelectorAll('.control')
let currentitem = 0
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach(control => {
  control.addEventListener('click', () => {
    const isLeft = control.classList.contains("arrow-left")

    if (isLeft) {
      currentitem -= 1
    } else {
      currentitem += 1
    }

    if (currentitem >= maxItems) {
      currentitem =0
    }

    if (currentitem < 0){
      currentitem = maxItems - 1 
    }

    items.forEach(item => item.classList.remove('current-item')) 

    items[currentitem].scrollIntoView({
      inline: "center",
      behavior:"smooth"
    })

    items[currentitem].classList.add("current-item")
  })
})

/*

let i = 0
function mover() {
  if (i == 0){
    i = 1
    let elemen = document.getElementById("minhaBarra")
    let width = 1
    let id = setInterval(frame, 10)
    function frame() {
      if (width >= 100){
        clearInterval(id)
        i = 0
      } else {
        width++
        elemen.style.width = width + "%"
      }
    }
  }
}
*/