console.log("Start!");

document
  .getElementById("generator")
  .addEventListener("click", function () {
    // Jeśli wcześniej istnieje canvas, usuwamy go
    if (document.getElementsByTagName("canvas").length != 0) {
      document.getElementById("obrazek").remove();
    }

    // Sprawdzamy, czy karty są już w DOM
    let cardsContainer = document.getElementById("cardsContainer");
    if (cardsContainer) {
      let cards = document.querySelectorAll("#cardsContainer .card");

      // Tworzymy nowy element canvas, generujemy zrzut ekranów dla wszystkich kart
      html2canvas(cardsContainer, {
        scrollX: 0,
        scrollY: 0,
        logging: true, // Włączenie logów w konsoli do debugowania
      }).then(function (canvas) {
        document.body.appendChild(canvas);
        canvas.id = "obrazek"; // Przypisanie id dla canvas
      }).catch(function (error) {
        console.error("Błąd podczas generowania obrazka:", error);
      });
    } else {
      console.error("Karty nie zostały jeszcze dodane do kontenera!");
    }
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

document.getElementById("addCardButton").addEventListener("click", function () {
  let newCard = document.createElement("div");
  newCard.classList.add("card");

  // Tworzymy numer nowej karty
  let cardCount = document.querySelectorAll("#cardsContainer .card").length + 1;

  let newStatBox = document.createElement("div");
  newStatBox.classList.add("stat_box");

  let newH3 = document.createElement("h3");
  newH3.innerText = "Properties";

  let newP = document.createElement("p");
  newP.classList.add("stat_box_p");
  newP.innerText = "New card stats";

  newStatBox.appendChild(newH3);
  newStatBox.appendChild(newP);
  newCard.appendChild(newStatBox);

  // Przesuwamy elementy stat_box o 20px w prawo
  newStatBox.style.transform = "translateX(20px)"; // Przesunięcie stat_box w prawo o 20px

  // Tworzymy przycisk "Staty [nr karty]" dla nowej karty
  let statButton = document.createElement("div");
  statButton.classList.add("button");
  statButton.innerText = `Staty ${cardCount}`;

  // Dodajemy obsługę przycisku, aby edytował statystyki tej karty
  statButton.addEventListener("click", function () {
    let targetP = newStatBox.querySelector("p");
    let newText = prompt(
      `Staty karty ${cardCount}:`,
      targetP ? targetP.innerText : ""
    );
    if (newText !== null) {
      targetP.innerText = newText;

      // Ustawiamy odpowiednie style, aby tekst łamał się i był ukrywany
      targetP.style.whiteSpace = "normal"; // Zmiana białej przestrzeni na normalną
      targetP.style.wordWrap = "break-word"; // Łamanie słów
      targetP.style.overflow = "hidden"; // Ukrycie nadmiarowego tekstu
      targetP.style.display = "-webkit-box"; // Użycie boxa dla kontenerów
      targetP.style.webkitBoxOrient = "vertical"; // Wymuszenie orientacji w pionie
      targetP.style.webkitLineClamp = 20; // Ograniczenie liczby linii
      targetP.style.maxWidth = "295px"
    }
  });

  // Tworzymy kontener dla karty i przycisku "Staty"
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  cardContainer.appendChild(newCard);
  cardContainer.appendChild(statButton); // Dodajemy przycisk "Staty" pod kartą

  // Dodajemy nową kartę do kontenera
  document.getElementById("cardsContainer").appendChild(cardContainer);
});

document.getElementById("removeCardButton").addEventListener("click", function () {
  let cards = document.querySelectorAll("#cardsContainer .card");
  if (cards.length > 1) {
    cards[cards.length - 1].remove();
  } else {
    alert("Nie możesz usunąć pierwszej karty!");
  }
});
