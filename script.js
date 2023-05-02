function myFunction() {
  var x = document.getElementById("meuTitulo");
  if (x.className === "titulo") {
    x.className += " responsive";
  } else {
    x.className = "titulo";
  }
}

function abrirGaleria(evt, nomeDaCidade) {
  let i, tabcontent, tablinks

  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }

  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("ativo", "")
  }

  document.getElementById(nomeDaCidade).style.display = "block"
  evt.currentTarget.className += " ativo"
}