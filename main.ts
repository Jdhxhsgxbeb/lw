input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Yes)
    }
    while (false) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Reading ")
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    Level = input.lightLevel()
    basic.showNumber(Level)
})
input.onPinPressed(TouchPin.P1, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1)
    Reading = pins.analogReadPin(AnalogPin.P1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    led.plotBarGraph(
    Reading,
    1023
    )
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showNumber(Reading)
    }
    basic.pause(100)
    music.play(music.stringPlayable("C5 B F A G B F A ", 120), music.PlaybackMode.UntilDone)
})
let Reading = 0
let Level = 0
basic.showString("J+D")
