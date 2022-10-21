input.onButtonPressed(Button.A, function () {
	
})
let x = 0
let y = x
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(x, 0)
        basic.pause(500)
        basic.clearScreen()
        x += 1
    }
    if (x > 4) {
        x = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.plot(0, y)
        basic.pause(500)
        basic.clearScreen()
        y += 1
        basic.clearScreen()
    }
    if (y > 4) {
        y = 0
    }
})
