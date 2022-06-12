input.onButtonPressed(Button.A, function () {
    Anzahl_1 = 0
    for (let Index = 0; Index <= Anz_würfeln - 1; Index++) {
        Ergebnis = randint(1, 2)
        if (Ergebnis == 1) {
            Anzahl_1 += 1
        }
    }
    basic.showNumber(Anzahl_1 / Anz_würfeln * 100)
})
let Ergebnis = 0
let Anzahl_1 = 0
let Anz_würfeln = 0
Anz_würfeln = 100000
basic.forever(function () {
	
})
