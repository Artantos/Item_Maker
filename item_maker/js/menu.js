box = document.createElement('div')
box.id = 'tytul_button'
box.style.height = '20px'
box.style.width = '50px'
box.style.border = '2px solid black'
box.style.marginTop = '20px'
box.style.padding = '5px'
box.innerText = 'tytul'
box.style.display = 'inline'
box.addEventListener("click", function () {
    let tytul = prompt("Tytuł:", document.getElementById('tytul').innerText);

    if (tytul != null) {
        document.getElementById("tytul").innerHTML = tytul
    }
});
document.body.appendChild(box)

box = document.createElement('div')
box.id = 'fluff_button'
box.style.height = '20px'
box.style.width = '50px'
box.style.border = '2px solid black'
box.style.marginTop = '20px'
box.style.padding = '5px'
box.innerText = 'fluff'
box.style.display = 'inline'
box.addEventListener("click", function () {
    let fluff_text = prompt("Treść: (proponowana max liczba znaków to 320)", document.getElementById('fluff_box_i').innerText); //320 znaków

    if (fluff_text != null) {
        document.getElementById("fluff_box_i").innerHTML = fluff_text
    }
});
document.body.appendChild(box)

box = document.createElement('div')
box.id = 'staty_button'
box.style.height = '20px'
box.style.width = '50px'
box.style.border = '2px solid black'
box.style.marginTop = '20px'
box.style.padding = '5px'
box.innerText = 'staty'
box.style.display = 'inline'
box.addEventListener("click", function () {
    let stat_text = prompt("Treść: (proponowana max liczba znaków to 320)", document.getElementById('stat_box_p').innerText);

    if (stat_text != null) {
        document.getElementById("stat_box_p").innerHTML = stat_text
    }
});
document.body.appendChild(box)