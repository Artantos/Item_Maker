console.log("Start!");

document
  .getElementById("generator")
  .addEventListener("click", function () {
    if (document.getElementsByTagName("canvas").length != 0) {
      document.getElementById("obrazek").remove();
    }
    html2canvas(document.getElementById("card")).then(function (canvas) {
      document.body.appendChild(canvas);
      canvas.id = "obrazek";
    });
  });

document
  .getElementById("generator-text")
  .addEventListener("click", function () {
    alert(
      "Tytuł: " +
        document.getElementById("tytul")?.innerText +
        " Fluff: " +
        document.getElementById("fluff_box_i")?.innerText +
        " Statystyki: " +
        document.getElementById("stat_box_p")?.innerText
    );
  });

let menuButtons = [
  { id: "tytul_button", target: "tytul" },
  { id: "fluff_button", target: "fluff_box_i" },
  { id: "staty_button", target: "stat_box_p" },
];

menuButtons.forEach((button) => {
  document
    .getElementById(button.id)
    .addEventListener("click", function () {
      let newText = prompt(
        "Treść: (proponowana max liczba znaków to 320)",
        document.getElementById(button.target)?.innerText
      );
      if (newText != null) {
        // Ograniczamy tekst do 295px szerokości
        let targetElement = document.getElementById(button.target);
        targetElement.innerHTML = newText;
        targetElement.style.whiteSpace = "normal"; // Włączenie zawijania tekstu

        // Obliczamy maksymalną szerokość, która nie przekroczy 295px
        if (targetElement.offsetWidth > 295) {
          targetElement.style.wordWrap = "break-word";
        }
      }
    });
});
