console.log('Start!')

// główny div karty 4:3
var card = document.getElementById('card')
card.style.height = 512 - 50 + 'px'
card.style.width = 384 - 50 + 'px'
card.style.border = '2px solid black'
card.style.margin = '0'
card.style.marginBottom = '10px'
card.style.padding = '0'
card.style.paddingLeft = '50px'
card.style.paddingTop = '50px'
card.style.backgroundImage = "url('./grafika/ramka.png')"
card.style.backgroundSize = '384px 512px'

// tytul
var box = document.createElement('h2')
box.id = 'tytul'
var title = 'Tiny Sword'
box.innerText = title
box.style.width = '250px'               //pokazuje szerokosc boxa,
// box.style.border = '2px solid black'    //mozna ukryc [te linijke]
box.style.margin = '0px'
card.appendChild(box)

// pudło_1 FLUFF
box = document.createElement('div')
box.id = 'fluff_box'
box.style.width = '280px'               //pokazuje szerokosc boxa, 
// box.style.border = '2px solid black'    //mozna ukryc [te linijke]
box.style.position = 'absolute'
box.style.marginTop = '50px'
card.appendChild(box)

var box1 = document.getElementById('fluff_box')
box = document.createElement('i')   // pudło_statystyki
box.id = 'fluff_box_i'
var box1_text1 = 'Tiny Sword: does shit'
box.innerText = box1_text1
box1.appendChild(box)

// pudło_2 STATYSTYKI
box = document.createElement('div')
box.id = 'stat_box'
box.style.width = '280px'               //pokazuje szerokosc boxa, 
// box.style.border = '2px solid black'    //mozna ukryc [te linijke]
box.style.position = 'absolute'
box.style.marginTop = '200px'
card.appendChild(box)

var box2 = document.getElementById('stat_box')
box = document.createElement('h3')  // pudło_tytuł
box.innerText = 'Properties'
box.style.margin = 0
// box.style.marginBottom = '10px'
box2.appendChild(box)

box = document.createElement('p')   // pudło_statystyki
box.id = 'stat_box_p'
box.style.margin = 0
var box2_text1 = 'Tiny Sword: does shit'
box.innerText = box2_text1
box2.appendChild(box)
