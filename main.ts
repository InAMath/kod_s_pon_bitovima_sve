radio.onReceivedNumber(function (receivedNumber) {
    if (primljen.length == 8) {
        primljen = []
    }
    primljen.push(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    temp += 1
    or_por = alfabet[temp]
    basic.showNumber(or_por)
    if (temp == alfabet.length - 1) {
        temp = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    nule = 0
    jedinice = 0
    for (let index = 0; index < 8; index++) {
        temp2 += 1
        basic.showNumber(primljen[temp2])
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (primljen[temp2] == 0) {
            nule += 1
        } else {
            jedinice += 1
        }
    }
    if (temp2 == 7) {
        temp2 = -1
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (nule < jedinice) {
        basic.showString("P: 1")
    }
    if (nule > jedinice) {
        basic.showString("P: 0")
    }
    if (nule == jedinice) {
        basic.showString("P: ?")
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 7; index++) {
        vj = randint(1, 100)
        greska = or_por
        if (vj <= k) {
            greska = 1 - or_por
        }
        radio.sendNumber(greska)
    }
})
let greska = 0
let vj = 0
let jedinice = 0
let nule = 0
let or_por = 0
let primljen: number[] = []
let temp2 = 0
let temp = 0
let k = 0
let alfabet: number[] = []
radio.setGroup(202)
alfabet = [0, 1]
k = 10
temp = -1
temp2 = -1
primljen = []
