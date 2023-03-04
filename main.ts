input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
GAME_ZIP64.setBuzzerPin()
basic.forever(function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Up)) {
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    }
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire2)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    }
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Down)) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Right)) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    }
})
