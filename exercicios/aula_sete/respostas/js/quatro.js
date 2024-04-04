function exer4() {
  entrada = document.querySelector("#entrada").value;
  p = document.createElement("p");
  node = document.createTextNode(entrada, saida);
  p.appendChild(node);
  document.querySelector("#saida").append(p);
}
