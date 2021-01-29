let Y = 0
let X = 0
input.onButtonPressed(Button.A, function () {
    Y = 0
    X = 0
    led.plot(X, Y)
    basic.pause(300)
    Y += 1
    for (let index = 0; index < 2; index++) {
        led.plot(X, Y)
        X += 1
        basic.pause(300)
    }
    Y += 1
    X = 0
    for (let index = 0; index < 3; index++) {
        led.plot(X, Y)
        X += 1
        basic.pause(300)
    }
    Y += 1
    X = 0
    for (let index = 0; index < 4; index++) {
        led.plot(X, Y)
        X += 1
        basic.pause(300)
    }
    Y += 1
    X = 0
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        X += 1
        basic.pause(300)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})
