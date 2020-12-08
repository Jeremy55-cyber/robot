let direction = 1
let angle = 0
pins.servoWritePin(AnalogPin.P0, angle)
basic.forever(function () {
    angle += direction
    pins.servoWritePin(AnalogPin.P0, angle)
    if (angle >= 70 || angle <= 0) {
        direction = direction * -1
    }
})
