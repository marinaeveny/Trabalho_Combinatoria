var estados = {
  "São Paulo (SP)": { inicio: "BFA", fim: "GKI" },
  "Rio de Janeiro (RJ)": { inicio: "KMF", fim: "LVE" },
  "Espírito Santo (ES)": { inicio: "MOX", fim: "MTZ" },
};

function verificarPlacas() {
  var placa = document.getElementById("placaInput").value;
  var placaUpper = placa.toUpperCase();
  var estado = "Esse Estado não pertence ao nosso trabalho.";

  if (/^[A-Z]{3}\d[A-Z]\d{2}$/.test(placaUpper)) {
    // formato LLLN°LN°N°
    var codigoEstado = placaUpper.slice(0, 3);

    for (var [nomeEstado, intervalo] of Object.entries(estados)) {
      if (codigoEstado >= intervalo.inicio && codigoEstado <= intervalo.fim) {
        estado = nomeEstado;
        break;
      }
    }
  } else {
    estado = "Formato de placa inválido";
  }
  document.getElementById("resultado").innerText = estado;
}
document.getElementById("placaInput").addEventListener("input", () => {
  document.getElementById("resultado").innerText = "";
});

document
  .getElementById("verificarBtn")
  .addEventListener("click", verificarPlacas);
