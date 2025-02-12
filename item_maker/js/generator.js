box = document.createElement('div')
box.id = 'generator'
box.style.height = '20px'
box.style.width = '50px'
box.style.border = '2px solid black'
box.style.marginTop = '20px'
box.style.padding = '5px'
box.innerText = 'Generuj'
box.addEventListener("click", function () {
    if (document.getElementsByTagName('canvas').length != 0) {
        document.getElementById('obrazek').remove()     //usunięcie starego obrazka
    }
    html2canvas(card).then(function (canvas) {
        document.body.appendChild(canvas)
        canvas.id = 'obrazek'
    })
});
document.body.appendChild(box)

box = document.createElement('div')
box.id = 'generator'
box.style.height = '20px'
box.style.width = '50px'
box.style.border = '2px solid black'
box.style.padding = '5px'
box.innerText = 'tekst'
box.addEventListener("click", function () {
    alert(
        'Tytuł: ' + document.getElementById('tytul').innerText +
        ' Fluff: ' + document.getElementById('fluff_box_i').innerText +
        ' Statystyki: ' + document.getElementById('stat_box_p').innerText
    )
});
document.body.appendChild(box)
