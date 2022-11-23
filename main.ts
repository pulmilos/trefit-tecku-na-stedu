input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (game.score() <= 10) {
        rychlost = rychlost + 20
        basic.pause(1000)
    }
})
let rychlost = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
if (input.logoIsPressed()) {
    rychlost = 250
} else {
    rychlost = 500
}
basic.forever(function () {
    sprite.move(1)
    basic.pause(rychlost - game.score())
    sprite.ifOnEdgeBounce()
})
