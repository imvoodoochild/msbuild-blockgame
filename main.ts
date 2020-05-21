sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.ashes, 100)
    music.pewPew.play()
})
let projectile: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . e e e . . . . . .
    . . . . . e e e e e e e . . . .
    . . . . e e d d d d d e e . . .
    . . . . e e f f d f f e e . . .
    . . . . e e d d d d d e e . . .
    . . . . e . d f f f d . e . . .
    . . . . . . d d d d d . . . . .
    . . . . . . . c c c . . . . . .
    . . . . . . d c c c d . . . . .
    . . . . . . . b b b . . . . . .
    . . . . . . . 7 7 7 . . . . . .
    . . . . . . . d . d . . . . . .
    . . . . . . . d . d . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 7 7 7 7 7 7 . . . . . .
        . . . 7 7 f 7 7 7 7 7 . . . . .
        . . . 7 7 7 7 7 7 7 7 7 . . . .
        . . . 7 7 7 7 7 7 7 7 7 . . . .
        . . . 7 7 7 7 7 7 7 7 7 . . . .
        . . . 7 7 7 7 7 7 7 7 7 . . . .
        . . . 7 7 7 7 7 7 7 7 7 . . . .
        . . . . 7 7 f f 7 7 7 7 . . . .
        . . . . . 7 7 f f f 7 7 . . . .
        . . . . . . . 7 7 7 7 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, 50, 0)
    projectile.setPosition(0, Math.randomRange(0, 120))
})
