function myFunction() {
    var x = document.getElementById("meuTitulo");
    if (x.className === "titulo") {
      x.className += " responsive";
    } else {
      x.className = "titulo";
    }
  }