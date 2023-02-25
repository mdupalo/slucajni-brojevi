let x = 0
let y = 0
basic.forever(function () {
    x = randint(0, 4)
    y = randint(0, 4)
    led.plot(x, y)
    basic.pause(100)
    led.unplot(x, y)
    basic.pause(100)
})
