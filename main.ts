namespace SpriteKind {
    export const black_bear = SpriteKind.create()
    export const birdy = SpriteKind.create()
    export const mare = SpriteKind.create()
    export const plush = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sleepy == 0) {
        if (room == 0) {
            room = 1
            room_type = 1
            animation.runImageAnimation(
            mySprite,
            [img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f c 2 c f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f c c f f c c c f f c c f 1 
                1 f c c c c c c c c c c c f 1 
                1 f c c f f c c c f f c c f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `,img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f c c f f c c c f f c c f 1 
                1 f c c c c c c c c c c c f 1 
                1 f c c f f c c c f f c c f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `],
            500,
            true
            )
            scene.setBackgroundImage(img`
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf999999999999999999999999999999999999999999999999999999999999999999999999999999fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccf9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `)
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.LT, statusbars.ComparisonType.Percentage, 100, function (status) {
    refill = true
})
browserEvents.H.onEvent(browserEvents.KeyEvent.Pressed, function () {
    statusbar.value = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sleepy == 0) {
        color.startFadeFromCurrent(color.Black, 100)
        off = true
    }
})
browserEvents.G.onEvent(browserEvents.KeyEvent.Pressed, function () {
    for (let index = 0; index < 999999; index++) {
        pause(1)
        info.changeScoreBy(1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sleepy == 0) {
        if (an2_move <= 3 && refill == false) {
            if (room_type == 3) {
                statusbar2.value = 0
                an2_move = 0
                color.startFade(color.White, color.GrayScale)
            }
        }
        if (room_type == 0) {
            mask = true
            animation.runImageAnimation(
            mySprite5,
            [img`
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeee.......eeeeee.......eeeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeeee.......eeeeee.......eeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeee....eeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeee......eeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeee......eeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeee....eeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                `,img`
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeee.......eeeeee.......eeeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeee.........eeee.........eeeeeeeee
                eeeeeeeeee.......eeeeee.......eeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeee....eeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeee......eeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeee......eeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeee....eeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                `],
            500,
            true
            )
        } else {
            mask = false
            animation.runImageAnimation(
            mySprite5,
            [img`
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                `],
            500,
            true
            )
        }
    }
})
browserEvents.Shift.onEvent(browserEvents.KeyEvent.Released, function () {
    if (room_type == 0) {
        poke = 0
        scaling.scaleToPercent(mySprite6, 250, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sleepy == 0) {
        if (room == 0) {
            room_type = 3
            room = 1
            animation.runImageAnimation(
            mySprite,
            [img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f c c f f c c c f f c c f 1 
                1 f c 2 c c c c c c c c c f 1 
                1 f c c f f c c c f f c c f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `,img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f c c f f c c c f f c c f 1 
                1 f c c c c c c c c c c c f 1 
                1 f c c f f c c c f f c c f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `],
            500,
            true
            )
            scene.setBackgroundImage(img`
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `)
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    an2_move += -9999999
    sleepy = 1
    animation.runImageAnimation(
    mySprite2,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite6,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite7,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite8,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite3,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite5,
    [img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeefffffffeeeeeefffffffeeeeeeeeee
        eeeeeeeeefffffffffeeeefffffffffeeeeeeeee
        eeeeeee11fffffffffeeeefffffffffeeeeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeeee1ffffffff1eeee1ffffffff11eeeeeee
        eeeeeeeeefffffffffeeeefffffffff1eeeeeeee
        eeeeeeeeefffffff1feeeef1fffffffeeeeeeeee
        eeeeeeeee8fffffff8eeee8fffffff8eeeeeeeee
        eeeeeeeeee8888888eeeeee8888888eeeeeeeeee
        eeeeeeeeee888888eef11fee888888eeeeeeeeee
        eeeeeeeeee888eeeeffffffeeee888eeeeeeeeee
        eeeeeeeeee88eeeeeffffffeeeee88eeeeeeeeee
        eeeeeeeeee88eeeee8ffff8eeeee88eeeeeeeeee
        eeeeeeeeee8eeeeeee8888eeeeeee8eeeeeeeeee
        eeeeeeeeee8eeeeeeee888eeeeeee8eeeeeeeeee
        eeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `,img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeefffffffeeeeeefffffffeeeeeeeeee
        eeeeeeeeefffffffffeeeefffffffffeeeeeeeee
        eeeeeee11ffffffff1eeee1ffffffffeeeeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeeee1fffffffffeeeefffffffff11eeeeeee
        eeeeeeeeefffffff1feeeef1fffffff1eeeeeeee
        eeeeeeeeeffffffff1eeee1ffffffffeeeeeeeee
        eeeeeeeee8fffffff8eeee8fffffff8eeeeeeeee
        eeeeeeeeee8888888eeeeee8888888eeeeeeeeee
        eeeeeeeeee888888eeffffee888888eeeeeeeeee
        eeeeeeeeee8888eeeffffffeee8888eeeeeeeeee
        eeeeeeeeee888eeeeffffffeeee888eeeeeeeeee
        eeeeeeeeee88eeeee8ffff8eeeee88eeeeeeeeee
        eeeeeeeeee8eeeeee88888eeeeeee8eeeeeeeeee
        eeeeeeeeee8eeeeeee8888eeeeeee8eeeeeeeeee
        eeeeeeeeee8eeeeeeeee88eeeeeee8eeeeeeeeee
        eeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `],
    500,
    true
    )
    statusbar2.setFlag(SpriteFlag.Invisible, true)
    statusbar.setFlag(SpriteFlag.Invisible, true)
    death = 1
    color.startFadeFromCurrent(color.Black, 6000)
})
browserEvents.Shift.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (room_type == 0) {
        poke = 1
        poke_time += 1
        scaling.scaleToPercent(mySprite6, 240, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    refill = true
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sleepy == 0) {
        if (room == 0) {
            room_type = 2
            room = 1
            animation.runImageAnimation(
            mySprite,
            [img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f c c f f c c c f f c c f 1 
                1 f c c c c c c c c c 2 c f 1 
                1 f c c f f c c c f f c c f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `,img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f c c f f c c c f f c c f 1 
                1 f c c c c c c c c c c c f 1 
                1 f c c f f c c c f f c c f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `],
            500,
            true
            )
            scene.setBackgroundImage(img`
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbffeeeeeeeeeeffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (mask == true) {
        if (room_type == 0) {
            mask = false
            animation.runImageAnimation(
            mySprite5,
            [img`
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                `],
            500,
            true
            )
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (room == 1) {
        room_type = 0
        room = 0
        animation.runImageAnimation(
        mySprite,
        [img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f c c c f f f f f 1 
            1 f f f f f c c c f f f f f 1 
            1 f f f f f f c f f f f f f 1 
            1 f f f f f f c f f f f f f 1 
            1 f c c f f c c c f f c c f 1 
            1 f c c c c c 2 c c c c c f 1 
            1 f c c f f c c c f f c c f 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `,img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f c c c f f f f f 1 
            1 f f f f f c c c f f f f f 1 
            1 f f f f f f c f f f f f f 1 
            1 f f f f f f c f f f f f f 1 
            1 f c c f f c c c f f c c f 1 
            1 f c c c c c c c c c c c f 1 
            1 f c c f f c c c f f c c f 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `],
        500,
        true
        )
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            `)
        poke = 0
        if (an2_move <= 3) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                `],
            500,
            true
            )
        }
        if (an2_move == 4) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                ...555555555...
                ..55555555555..
                ..55555555555..
                ..55ff555ff55..
                ..5ff9f5ffff5..
                ..55ff555ff55..
                ..55555555555..
                ..55555555555..
                ..55555555555..
                ...555555555...
                ...555555555...
                ...adcacacda...
                ..aadaaaaadaa..
                .aaadaaaaadaaa.
                aaaadacacadaaaa
                aaa.5555555.aaa
                aaa.a55555a.aaa
                .d..aaaaaaa..d.
                aaa.aaaaaaa.aaa
                aaa..aaaaa..aaa
                aaa...ddd...aaa
                .d..8888888..d.
                555888888888555
                5558888.8888555
                5558888.8888555
                555.dd...dd.555
                5558888.8888555
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                ....dd...dd....
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                `,img`
                ...555555555...
                ..55555555555..
                ..55555555555..
                ..55ff555ff55..
                ..5ffff5f9ff5..
                ..55ff555ff55..
                ..55555555555..
                ..55555555555..
                ..55555555555..
                ...555555555...
                ...555555555...
                ...adacacada...
                ..aadaaaaadaa..
                .aaadaaaaadaaa.
                aaaadcacacdaaaa
                aaa.5555555.aaa
                aaa.a55555a.aaa
                .d..aaaaaaa..d.
                aaa.aaaaaaa.aaa
                aaa..aaaaa..aaa
                aaa...ddd...aaa
                .d..8888888..d.
                555888888888555
                5558888.8888555
                5558888.8888555
                555.dd...dd.555
                5558888.8888555
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                ....dd...dd....
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                ...8888.8888...
                `],
            50,
            true
            )
        }
        if (an1_move == 4) {
            animation.runImageAnimation(
            mySprite3,
            [img`
                .fff.......fff.
                fffff.fff.fffff
                fffffffffffffff
                fffffffffffffff
                .fffffffffffff.
                ..fffffff2fff..
                ..fffffff2fff..
                ..fffffff2fff..
                ..fffff2fffff..
                ..f.c.cdc.c.f..
                ......ddd......
                .....cdcdc.....
                ..fffffffffff..
                .fffffffffffff.
                fffffffffffffff
                fff.fffffff.fff
                fff.fffffff.fff
                .d..fffffff..d.
                fff.fffffff.fff
                fff..fffff..fff
                fff...ddd...fff
                .d..fffffff..d.
                fffffffffffffff
                fffffff.fffffff
                fffffff.fffffff
                fff.dd...dd.fff
                fffffff.fffffff
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                ....dd...dd....
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                `,img`
                .fff.......fff.
                fffff.fff.fffff
                fffffffffffffff
                fffffffffffffff
                .fffffffffffff.
                ..fff2fffffff..
                ..fff2fffffff..
                ..fff2fffffff..
                ..fffff2fffff..
                ..fc.cdcdc.cf..
                ......ddd......
                ....c.cdc.c....
                ..fffffffffff..
                .fffffffffffff.
                fffffffffffffff
                fff.fffffff.fff
                fff.fffffff.fff
                .d..fffffff..d.
                fff.fffffff.fff
                fff..fffff..fff
                fff...ddd...fff
                .d..fffffff..d.
                fffffffffffffff
                fffffff.fffffff
                fffffff.fffffff
                fff.dd...dd.fff
                fffffff.fffffff
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                ....dd...dd....
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                ...ffff.ffff...
                `],
            50,
            true
            )
        }
        if (an1_move < 4) {
            animation.runImageAnimation(
            mySprite3,
            [img`
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                `],
            500,
            true
            )
        }
    }
})
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    an2_move += -9999999
    sleepy = 1
    animation.runImageAnimation(
    mySprite2,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite6,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite7,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite8,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite3,
    [img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        `],
    500,
    false
    )
    animation.runImageAnimation(
    mySprite5,
    [img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeefffffffeeeeeefffffffeeeeeeeeee
        eeeeeeeeefffffffffeeeefffffffffeeeeeeeee
        eeeeeee11fffffffffeeeefffffffffeeeeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeeee1ffffffff1eeee1ffffffff11eeeeeee
        eeeeeeeeefffffffffeeeefffffffff1eeeeeeee
        eeeeeeeeefffffff1feeeef1fffffffeeeeeeeee
        eeeeeeeee8fffffff8eeee8fffffff8eeeeeeeee
        eeeeeeeeee8888888eeeeee8888888eeeeeeeeee
        eeeeeeeeee888888eef11fee888888eeeeeeeeee
        eeeeeeeeee888eeeeffffffeeee888eeeeeeeeee
        eeeeeeeeee88eeeeeffffffeeeee88eeeeeeeeee
        eeeeeeeeee88eeeee8ffff8eeeee88eeeeeeeeee
        eeeeeeeeee8eeeeeee8888eeeeeee8eeeeeeeeee
        eeeeeeeeee8eeeeeeee888eeeeeee8eeeeeeeeee
        eeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `,img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeefffffffeeeeeefffffffeeeeeeeeee
        eeeeeeeeefffffffffeeeefffffffffeeeeeeeee
        eeeeeee11ffffffff1eeee1ffffffffeeeeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeee11ffffffff1eeee1ffffffff11eeeeeee
        eeeeeeee1fffffffffeeeefffffffff11eeeeeee
        eeeeeeeeefffffff1feeeef1fffffff1eeeeeeee
        eeeeeeeeeffffffff1eeee1ffffffffeeeeeeeee
        eeeeeeeee8fffffff8eeee8fffffff8eeeeeeeee
        eeeeeeeeee8888888eeeeee8888888eeeeeeeeee
        eeeeeeeeee888888eeffffee888888eeeeeeeeee
        eeeeeeeeee8888eeeffffffeee8888eeeeeeeeee
        eeeeeeeeee888eeeeffffffeeee888eeeeeeeeee
        eeeeeeeeee88eeeee8ffff8eeeee88eeeeeeeeee
        eeeeeeeeee8eeeeee88888eeeeeee8eeeeeeeeee
        eeeeeeeeee8eeeeeee8888eeeeeee8eeeeeeeeee
        eeeeeeeeee8eeeeeeeee88eeeeeee8eeeeeeeeee
        eeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `],
    500,
    true
    )
    statusbar2.setFlag(SpriteFlag.Invisible, true)
    statusbar.setFlag(SpriteFlag.Invisible, true)
    death = 1
    color.startFadeFromCurrent(color.Black, 6000)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    statusbar.value = 0
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (sleepy == 0) {
        color.startFadeFromCurrent(color.GrayScale, 100)
        off = false
    }
})
browserEvents.F.onEvent(browserEvents.KeyEvent.Pressed, function () {
    an1_move = 5
})
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    if (room_type == 0) {
        poke = 1
        poke_time += 1
        scaling.scaleToPercent(mySprite6, 240, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
})
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Released, function (x, y) {
    if (room_type == 0) {
        poke = 0
        scaling.scaleToPercent(mySprite6, 250, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    refill = false
})
let event = 0
let off = false
let refill = false
let room_type = 0
let sleepy = 0
let poke = 0
let death = 0
let mask = false
let an1_move = 0
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let an2_move = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite5: Sprite = null
let mySprite6: Sprite = null
let mySprite7: Sprite = null
let mySprite8: Sprite = null
let room = 0
room = 0
color.setPalette(
color.GrayScale
)
mySprite8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.plush)
mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.mare)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.black_bear)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.birdy)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
    cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
    cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
    cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
    cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
    cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
    cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
    cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
    cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
    `)
mySprite.setPosition(139, 25)
scaling.scaleToPercent(mySprite, 320, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let myMinimap = minimap.minimap()
minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.MinimapScale)
scaling.scaleToPercent(mySprite2, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite2.setPosition(80, 20)
mySprite3.setPosition(80, 20)
scaling.scaleToPercent(mySprite3, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
an2_move = 0
animation.runImageAnimation(
mySprite,
[img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f c c c f f f f f 1 
    1 f f f f f c c c f f f f f 1 
    1 f f f f f f c f f f f f f 1 
    1 f f f f f f c f f f f f f 1 
    1 f c c f f c c c f f c c f 1 
    1 f c c c c c 2 c c c c c f 1 
    1 f c c f f c c c f f c c f 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f c c c f f f f f 1 
    1 f f f f f c c c f f f f f 1 
    1 f f f f f f c f f f f f f 1 
    1 f f f f f f c f f f f f f 1 
    1 f c c f f c c c f f c c f 1 
    1 f c c c c c c c c c c c f 1 
    1 f c c f f c c c f f c c f 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `],
500,
true
)
animation.runImageAnimation(
mySprite2,
[img`
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    ...............
    `],
500,
true
)
statusbar = statusbars.create(60, 10, StatusBarKind.Health)
statusbar2 = statusbars.create(40, 4, StatusBarKind.Energy)
statusbar2.setColor(7, 2)
statusbar.max = 100
statusbar2.max = 50
statusbar.value = 100
statusbar2.value = 50
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setOffsetPadding(-50, 10)
statusbar2.positionDirection(CollisionDirection.Bottom)
statusbar2.setOffsetPadding(-55, 2)
let statusbar3 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar3.value = 1
statusbar3.max = 1
an1_move = 0
mask = false
mySprite5.setPosition(5, 27)
let time_flys = 0
scaling.scaleToPercent(mySprite5, 600, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scaling.scaleToPercent(mySprite6, 250, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scaling.scaleToPercent(mySprite7, 600, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scaling.scaleToPercent(mySprite8, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite6.setPosition(85, 100)
death = 0
let poke_time = 0
poke = 0
let time = 1
animation.runImageAnimation(
mySprite8,
[img`
    111111111111111111111111111111111111111
    1fffffffffffffffffffffffffffffffffffff1
    1fffffffffffffffffffffffffffffffffffff1
    1ff2222fff2222fffffff222ffffffffffffff1
    1f2ffff2ffffff2fffff2fff2fffffffffffff1
    1f2ffff2ffffff2ffff2fffff2fff222f222ff1
    1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
    1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
    1fffffffff2222fffff2222222ff2fff2fff2f1
    1f2ffff2f2fffffffff2fffff2ff2fff2fff2f1
    1f2ffff2f2fffffffff2fffff2ff2fff2fff2f1
    1f2ffff2f2fffffffff2fffff2ff2fff2fff2f1
    1f2ffff2f2fffffffff2fffff2ff2fff2fff2f1
    1ff2222fff2222fffff2fffff2ff2fff2fff2f1
    1fffffffffffffffffffffffffffffffffffff1
    1fffffffffffffffffffffffffffffffffffff1
    111111111111111111111111111111111111111
    `],
800,
true
)
mySprite8.setPosition(100, 105)
statusbar3.setFlag(SpriteFlag.Invisible, true)
game.onUpdateInterval(50, function () {
    if (mask == true && an1_move > 4) {
        an1_move = 0
    }
})
game.onUpdateInterval(50, function () {
    if (an1_move == 0 && room_type == 0) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            `],
        500,
        true
        )
    }
    if (an1_move == 4 && room_type == 0) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            .fff.......fff.
            fffff.fff.fffff
            fffffffffffffff
            fffffffffffffff
            .fffffffffffff.
            ..fffffff2fff..
            ..fffffff2fff..
            ..fffffff2fff..
            ..fffff2fffff..
            ..f.c.cdc.c.f..
            ......ddd......
            .....cdcdc.....
            ..fffffffffff..
            .fffffffffffff.
            fffffffffffffff
            fff.fffffff.fff
            fff.fffffff.fff
            .d..fffffff..d.
            fff.fffffff.fff
            fff..fffff..fff
            fff...ddd...fff
            .d..fffffff..d.
            fffffffffffffff
            fffffff.fffffff
            fffffff.fffffff
            fff.dd...dd.fff
            fffffff.fffffff
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ....dd...dd....
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            `,img`
            .fff.......fff.
            fffff.fff.fffff
            fffffffffffffff
            fffffffffffffff
            .fffffffffffff.
            ..fff2fffffff..
            ..fff2fffffff..
            ..fff2fffffff..
            ..fffff2fffff..
            ..fc.cdcdc.cf..
            ......ddd......
            ....c.cdc.c....
            ..fffffffffff..
            .fffffffffffff.
            fffffffffffffff
            fff.fffffff.fff
            fff.fffffff.fff
            .d..fffffff..d.
            fff.fffffff.fff
            fff..fffff..fff
            fff...ddd...fff
            .d..fffffff..d.
            fffffffffffffff
            fffffff.fffffff
            fffffff.fffffff
            fff.dd...dd.fff
            fffffff.fffffff
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ....dd...dd....
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            `],
        50,
        true
        )
    }
})
game.onUpdateInterval(50, function () {
    if (an2_move == 0 && room_type == 0) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            `],
        500,
        true
        )
    }
    if (an2_move == 4 && room_type == 0) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ...555555555...
            ..55555555555..
            ..55555555555..
            ..55ff555ff55..
            ..5ff9f5ffff5..
            ..55ff555ff55..
            ..55555555555..
            ..55555555555..
            ..55555555555..
            ...555555555...
            ...555555555...
            ...adcacacda...
            ..aadaaaaadaa..
            .aaadaaaaadaaa.
            aaaadacacadaaaa
            aaa.5555555.aaa
            aaa.a55555a.aaa
            .d..aaaaaaa..d.
            aaa.aaaaaaa.aaa
            aaa..aaaaa..aaa
            aaa...ddd...aaa
            .d..8888888..d.
            555888888888555
            5558888.8888555
            5558888.8888555
            555.dd...dd.555
            5558888.8888555
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ....dd...dd....
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            `,img`
            ...555555555...
            ..55555555555..
            ..55555555555..
            ..55ff555ff55..
            ..5ffff5f9ff5..
            ..55ff555ff55..
            ..55555555555..
            ..55555555555..
            ..55555555555..
            ...555555555...
            ...555555555...
            ...adacacada...
            ..aadaaaaadaa..
            .aaadaaaaadaaa.
            aaaadcacacdaaaa
            aaa.5555555.aaa
            aaa.a55555a.aaa
            .d..aaaaaaa..d.
            aaa.aaaaaaa.aaa
            aaa..aaaaa..aaa
            aaa...ddd...aaa
            .d..8888888..d.
            555888888888555
            5558888.8888555
            5558888.8888555
            555.dd...dd.555
            5558888.8888555
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ....dd...dd....
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            `],
        50,
        true
        )
        mySprite2.setPosition(25, 40)
    }
})
game.onUpdateInterval(50, function () {
    if (an2_move == 0 && room_type == 3) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ...555555555...
            ..55555555555..
            ..55555555555..
            ..55ff555ff55..
            ..5ffff5ffff5..
            ..55ff555ff55..
            ..55555555555..
            ..55555555555..
            ..55555555555..
            ...555555555...
            ...555555555...
            ...a5555555a...
            ..aaa55555aaa..
            .aaaaaaaaaaaaa.
            aaaaaaaaaaaaaaa
            aaa.aaaaaaa.aaa
            aaa.aaaaaaa.aaa
            .d..aaaaaaa..d.
            aaa.aaaaaaa.aaa
            aaa..aaaaa..aaa
            aaa...ddd...aaa
            .d..8888888..d.
            555888888888555
            5558888.8888555
            5558888.8888555
            555.dd...dd.555
            5558888.8888555
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ....dd...dd....
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            `],
        500,
        true
        )
    }
    if (an2_move == 1 && room_type == 3) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ...555555555...
            ..55555555555..
            ..55555555555..
            ..55ff555ff55..
            ..5ff9f5f9ff5..
            ..55ff555ff55..
            ..55555555555..
            ..55555555555..
            ..55555555555..
            ...555555555...
            ...555555555...
            ...a5555555a...
            ..aaa55555aaa..
            .aaaaaaaaaaaaa.
            aaaaaaaaaaaaaaa
            aaa.aaaaaaa.aaa
            aaa.aaaaaaa.aaa
            .d..aaaaaaa..d.
            aaa.aaaaaaa.aaa
            aaa..aaaaa..aaa
            aaa...ddd...aaa
            .d..8888888..d.
            555888888888555
            5558888.8888555
            5558888.8888555
            555.dd...dd.555
            5558888.8888555
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ....dd...dd....
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            `],
        500,
        true
        )
    }
    if (an2_move == 2 && room_type == 3) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ...555555555...
            ..55555555555..
            ..55555555555..
            ..55ff555ff55..
            ..5ff9f5f9ff5..
            ..55ff555ff55..
            ..55555555555..
            ..55555555555..
            ..55555555555..
            ...555555555...
            ...555555555...
            ...adcccccda...
            ..aa5555555aa..
            .aaaa55555aaaa.
            aaaaaaaaaaaaaaa
            aaa.aaaaaaa.aaa
            aaa.aaaaaaa.aaa
            .d..aaaaaaa..d.
            aaa.aaaaaaa.aaa
            aaa..aaaaa..aaa
            aaa...ddd...aaa
            .d..8888888..d.
            555888888888555
            5558888.8888555
            5558888.8888555
            555.dd...dd.555
            5558888.8888555
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ....dd...dd....
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            `,img`
            ...555555555...
            ..55555555555..
            ..55555555555..
            ..55ff555ff55..
            ..5ff9f5ffff5..
            ..55ff555ff55..
            ..55555555555..
            ..55555555555..
            ..55555555555..
            ...555555555...
            ...555555555...
            ...adcccccda...
            ..aa5555555aa..
            .aaaa55555aaaa.
            aaaaaaaaaaaaaaa
            aaa.aaaaaaa.aaa
            aaa.aaaaaaa.aaa
            .d..aaaaaaa..d.
            aaa.aaaaaaa.aaa
            aaa..aaaaa..aaa
            aaa...ddd...aaa
            .d..8888888..d.
            555888888888555
            5558888.8888555
            5558888.8888555
            555.dd...dd.555
            5558888.8888555
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ....dd...dd....
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            `],
        50,
        true
        )
    }
    if (an2_move == 3 && room_type == 3) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ...555555555...
            ..55555555555..
            ..55555555555..
            ..55ff555ff55..
            ..5ff9f5ffff5..
            ..55ff555ff55..
            ..55555555555..
            ..55555555555..
            ..55555555555..
            ...555555555...
            ...555555555...
            ...abcacacba...
            ..aabacacabaa..
            .aaa5555555aaa.
            aaaaa55555aaaaa
            aaa.aaaaaaa.aaa
            aaa.aaaaaaa.aaa
            .b..aaaaaaa..b.
            aaa.aaaaaaa.aaa
            aaa..aaaaa..aaa
            aaa...bbb...aaa
            .b..8888888..b.
            555888888888555
            5558888.8888555
            5558888.8888555
            555.bb...bb.555
            5558888.8888555
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ....bb...bb....
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            `,img`
            ...555555555...
            ..55555555555..
            ..55555555555..
            ..55ff555ff55..
            ..5ffff5f9ff5..
            ..55ff555ff55..
            ..55555555555..
            ..55555555555..
            ..55555555555..
            ...555555555...
            ...555555555...
            ...abcacacba...
            ..aabacacabaa..
            .aaa5555555aaa.
            aaaaa55555aaaaa
            aaa.aaaaaaa.aaa
            aaa.aaaaaaa.aaa
            .b..aaaaaaa..b.
            aaa.aaaaaaa.aaa
            aaa..aaaaa..aaa
            aaa...bbb...aaa
            .b..8888888..b.
            555888888888555
            5558888.8888555
            5558888.8888555
            555.bb...bb.555
            5558888.8888555
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ....bb...bb....
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            ...8888.8888...
            `],
        50,
        true
        )
    }
    if (an2_move == 4 && room_type > 0) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            `],
        500,
        true
        )
    }
})
game.onUpdateInterval(50, function () {
    if (death == 0) {
        if (time == 3) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222fff2222fffffff222ffffffffffffff1
                1f2ffff2ffffff2fffff2fff2fffffffffffff1
                1f2ffff2ffffff2ffff2fffff2fff222f222ff1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ff2222fff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 4) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222ffffffffffffff222ffffffffffffff1
                1f2ffff2f2ffff2fffff2fff2fffffffffffff1
                1f2ffff2f2ffff2ffff2fffff2fff222f222ff1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ff2222fffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222ffffffffffffff222ffffffffffffff1
                1f2ffff2ffffffffffff2fff2fffffffffffff1
                1f2ffff2fffffffffff2fffff2fff222f222ff1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1ff2222ffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 5) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222fff2222fffffff222ffffffffffffff1
                1f2ffff2f2ffffffffff2fff2fffffffffffff1
                1f2ffff2f2fffffffff2fffff2fff222f222ff1
                1f2ffff2f2fffffffff2fffff2ff2fff2fff2f1
                1f2ffff2f2fffffffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ff2222fff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 6) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222fff2222fffffff222ffffffffffffff1
                1f2ffff2f2ffffffffff2fff2fffffffffffff1
                1f2ffff2f2fffffffff2fffff2fff222f222ff1
                1f2ffff2f2fffffffff2fffff2ff2fff2fff2f1
                1f2ffff2f2fffffffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1ff2222fff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 7) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222fff2222fffffff222ffffffffffffff1
                1f2ffff2ffffff2fffff2fff2fffffffffffff1
                1f2ffff2ffffff2ffff2fffff2fff222f222ff1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ff2222ffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 8) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222fff2222fffffff222ffffffffffffff1
                1f2ffff2f2ffff2fffff2fff2fffffffffffff1
                1f2ffff2f2ffff2ffff2fffff2fff222f222ff1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1ff2222fff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222ffffffffffffff222ffffffffffffff1
                1f2ffff2ffffffffffff2fff2fffffffffffff1
                1f2ffff2fffffffffff2fffff2fff222f222ff1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1f2ffff2fffffffffff2fffff2ff2fff2fff2f1
                1ff2222ffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 9) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222fff2222fffffff222ffffffffffffff1
                1f2ffff2f2ffff2fffff2fff2fffffffffffff1
                1f2ffff2f2ffff2ffff2fffff2fff222f222ff1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1f2ffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ff2222ffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 10) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffff2222fffffff222ffffffffffffff1
                1ffffff2f2ffff2fffff2fff2fffffffffffff1
                1ffffff2f2ffff2ffff2fffff2fff222f222ff1
                1ffffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffff2f2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 11) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffffffffffffff222ffffffffffffff1
                1ffffff2ffffff2fffff2fff2fffffffffffff1
                1ffffff2ffffff2ffff2fffff2fff222f222ff1
                1ffffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ffffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ffffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ffffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ffffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 12) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffff2222fffffff222ffffffffffffff1
                1ffffff2ffffff2fffff2fff2fffffffffffff1
                1ffffff2ffffff2ffff2fffff2fff222f222ff1
                1ffffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1ffffff2ffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1ffffff2f2fffffffff2fffff2ff2fff2fff2f1
                1ffffff2f2fffffffff2fffff2ff2fff2fff2f1
                1ffffff2f2fffffffff2fffff2ff2fff2fff2f1
                1ffffff2f2fffffffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            800,
            true
            )
        }
        if (time == 13) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffffffffffffff222ffffffffffffff1
                1ffffff2ffffffffffff2fff2fffffffffffff1
                1ffffff2fffffffffff2fffff2fff222f222ff1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffff2222fffffff222ffffffffffffff1
                1fffffffffffff2fffff2fff2fffffffffffff1
                1fffffffffffff2ffff2fffff2fff222f222ff1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            50,
            true
            )
        }
        if (time == 14) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffffffffffffff222ffffffffffffff1
                1ffffff2ffffffffffff2fff2fffffffffffff1
                1ffffff2fffffffffff2fffff2fff222f222ff1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffffffffffffff222ffffffffffffff1
                1ffffffff2ffff2fffff2fff2fffffffffffff1
                1ffffffff2ffff2ffff2fffff2fff222f222ff1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            50,
            true
            )
        }
        if (time == 15) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffffffffffffff222ffffffffffffff1
                1ffffff2ffffffffffff2fff2fffffffffffff1
                1ffffff2fffffffffff2fffff2fff222f222ff1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffff2222fffffff222ffffffffffffff1
                1ffffffff2ffffffffff2fff2fffffffffffff1
                1ffffffff2fffffffff2fffff2fff222f222ff1
                1ffffffff2fffffffff2fffff2ff2fff2fff2f1
                1ffffffff2fffffffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            50,
            true
            )
        }
        if (time == 16) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffffffffffffff222ffffffffffffff1
                1ffffff2ffffffffffff2fff2fffffffffffff1
                1ffffff2fffffffffff2fffff2fff222f222ff1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffff2222fffffff222ffffffffffffff1
                1ffffffff2ffffffffff2fff2fffffffffffff1
                1ffffffff2fffffffff2fffff2fff222f222ff1
                1ffffffff2fffffffff2fffff2ff2fff2fff2f1
                1ffffffff2fffffffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            50,
            true
            )
        }
        if (time == 17) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffffffffffffff222ffffffffffffff1
                1ffffff2ffffffffffff2fff2fffffffffffff1
                1ffffff2fffffffffff2fffff2fff222f222ff1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffff2222fffffff222ffffffffffffff1
                1fffffffffffff2fffff2fff2fffffffffffff1
                1fffffffffffff2ffff2fffff2fff222f222ff1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            50,
            true
            )
        }
        if (time == 18) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffffffffffffff222ffffffffffffff1
                1ffffff2ffffffffffff2fff2fffffffffffff1
                1ffffff2fffffffffff2fffff2fff222f222ff1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffff2222fffffff222ffffffffffffff1
                1ffffffff2ffff2fffff2fff2fffffffffffff1
                1ffffffff2ffff2ffff2fffff2fff222f222ff1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            50,
            true
            )
        }
        if (time == 19) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffffffffffffff222ffffffffffffff1
                1ffffff2ffffffffffff2fff2fffffffffffff1
                1ffffff2fffffffffff2fffff2fff222f222ff1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffff2222fffffff222ffffffffffffff1
                1ffffffff2ffff2fffff2fff2fffffffffffff1
                1ffffffff2ffff2ffff2fffff2fff222f222ff1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2222222ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1fffffffffffff2ffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            50,
            true
            )
        }
        if (time == 20) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222ffffffffffffff222ffffffffffffff1
                1ffffff2ffffffffffff2fff2fffffffffffff1
                1ffffff2fffffffffff2fffff2fff222f222ff1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ffffff2fffffffffff2fffff2ff2fff2fff2f1
                1ff2222ffffffffffff2222222ff2fff2fff2f1
                1f2ffffffffffffffff2fffff2ff2fff2fff2f1
                1f2ffffffffffffffff2fffff2ff2fff2fff2f1
                1f2ffffffffffffffff2fffff2ff2fff2fff2f1
                1f2ffffffffffffffff2fffff2ff2fff2fff2f1
                1ff2222ffffffffffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffff2222fffffff222ffffffffffffff1
                1ffffffff2ffff2fffff2fff2fffffffffffff1
                1ffffffff2ffff2ffff2fffff2fff222f222ff1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffffffffffffff2222222ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1ffffffff2ffff2ffff2fffff2ff2fff2fff2f1
                1fffffffff2222fffff2fffff2ff2fff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            50,
            true
            )
        }
        if (time >= 21) {
            animation.runImageAnimation(
            mySprite8,
            [img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ff2222fffffffffff222ffffffffffff222ff1
                1ff2fffffffffffff2fff2ffffffffff2fff2f1
                1ff2fffffffffffff2fff2ffffffffff2fff2f1
                1ff2fffffffffffff2fff2ffffffffff2fff2f1
                1ff2222ffffffffff2222fffffffffff2222ff1
                1ff2fffffffffffff2ff2fffffffffff2ff2ff1
                1ff2fffffffffffff2fff2ffffffffff2fff2f1
                1ff2fffffffffffff2fff2ffffffffff2fff2f1
                1ff2222ffffffffff2fff2ffffffffff2fff2f1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `,img`
                111111111111111111111111111111111111111
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1ffffffffff222fffffffffff2222fffffffff1
                1fffffffff2fff2fffffffff2ffff2ffffffff1
                1fffffffff2fff2fffffffff2ffff2ffffffff1
                1fffffffff2fff2fffffffff2ffff2ffffffff1
                1fffffffff2222ffffffffff2ffff2ffffffff1
                1fffffffff2ff2ffffffffff2ffff2ffffffff1
                1fffffffff2fff2fffffffff2ffff2ffffffff1
                1fffffffff2fff2fffffffff2ffff2ffffffff1
                1fffffffff2fff2ffffffffff2222fffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                1fffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111
                `],
            50,
            true
            )
            an1_move = -1e+22
            an2_move = -1e+22
        }
    } else {
        animation.runImageAnimation(
        mySprite8,
        [img`
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            .......................................
            `],
        50,
        true
        )
    }
})
game.onUpdateInterval(50, function () {
    if (an1_move == 0 && room_type == 1) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            .fff.......fff.
            fffff.fff.fffff
            fffffffffffffff
            fffffffffffffff
            .fffffffffffff.
            ..fffffffffff..
            ..fffffffffff..
            ..fffffffffff..
            ..fffff2fffff..
            ..fffffffffff..
            ...fffffffff...
            ....fffffff....
            ..fffffffffff..
            .fffffffffffff.
            fffffffffffffff
            fff.fffffff.fff
            fff.fffffff.fff
            .d..fffffff..d.
            fff.fffffff.fff
            fff..fffff..fff
            fff...ddd...fff
            .d..fffffff..d.
            fffffffffffffff
            fffffff.fffffff
            fffffff.fffffff
            fff.dd...dd.fff
            fffffff.fffffff
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ....dd...dd....
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            `],
        500,
        true
        )
    }
    if (an1_move == 1 && room_type == 1) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            .fff.......fff.
            fffff.fff.fffff
            fffffffffffffff
            fffffffffffffff
            .fffffffffffff.
            ..fffffffffff..
            ..fff2fff2fff..
            ..fffffffffff..
            ..fffff2fffff..
            ..fffffffffff..
            ...fffffffff...
            ....fffffff....
            ..fffffffffff..
            .fffffffffffff.
            fffffffffffffff
            fff.fffffff.fff
            fff.fffffff.fff
            .d..fffffff..d.
            fff.fffffff.fff
            fff..fffff..fff
            fff...ddd...fff
            .d..fffffff..d.
            fffffffffffffff
            fffffff.fffffff
            fffffff.fffffff
            fff.dd...dd.fff
            fffffff.fffffff
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ....dd...dd....
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            `],
        500,
        true
        )
    }
    if (an1_move == 2 && room_type == 1) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            ..fff.......fff..
            .fffff.fff.fffff.
            .fffffffffffffff.
            .fffffffffffffff.
            ..fffffffffffff..
            ...fff2fff2fff...
            ...fff2fff2fff...
            ...fff2fff2fff...
            ...fffff2fffff...
            ...fffffffffff...
            ....fffffffff....
            .....fffffff.....
            ...fffffffffff...
            ..fffffffffffff..
            .fffffffffffffff.
            .fff.fffffff.fff.
            .fff.fffffff.fff.
            ..d..fffffff..d..
            .fff.fffffff.fff.
            .fff..fffff..fff.
            .fff...ddd...fff.
            ..d..fffffff..d..
            .fffffffffffffff.
            .fffffff.fffffff.
            .fffffff.fffffff.
            .fff.dd...dd.fff.
            .fffffff.fffffff.
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            .....dd...dd.....
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            `,img`
            ..fff.......fff..
            .fffff.fff.fffff.
            .fffffffffffffff.
            .fffffffffffffff.
            ..fffffffffffff..
            ...fff2fffffff...
            ...fff2fffffff...
            ...fff2fffffff...
            ...fffff2fffff...
            ...fffffffffff...
            ....fffffffff....
            .....fffffff.....
            ...fffffffffff...
            ..fffffffffffff..
            .fffffffffffffff.
            .fff.fffffff.fff.
            .fff.fffffff.fff.
            ..d..fffffff..d..
            .fff.fffffff.fff.
            .fff..fffff..fff.
            .fff...ddd...fff.
            ..d..fffffff..d..
            .fffffffffffffff.
            .fffffff.fffffff.
            .fffffff.fffffff.
            .fff.dd...dd.fff.
            .fffffff.fffffff.
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            .....dd...dd.....
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            ....ffff.ffff....
            `],
        50,
        true
        )
    }
    if (an1_move == 3 && room_type == 1) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            .fff.......fff.
            fffff.fff.fffff
            fffffffffffffff
            fffffffffffffff
            .fffffffffffff.
            ..fffffff2fff..
            ..fffffff2fff..
            ..fffffff2fff..
            ..fffff2fffff..
            ..f.c.cdc.c.f..
            .....cdcdc.....
            ...fffffffff...
            ..fffffffffff..
            .fffffffffffff.
            fffffffffffffff
            fff.fffffff.fff
            fff.fffffff.fff
            .d..fffffff..d.
            fff.fffffff.fff
            fff..fffff..fff
            fff...ddd...fff
            .d..fffffff..d.
            fffffffffffffff
            fffffff.fffffff
            fffffff.fffffff
            fff.dd...dd.fff
            fffffff.fffffff
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ....dd...dd....
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            `,img`
            .fff.......fff.
            fffff.fff.fffff
            fffffffffffffff
            fffffffffffffff
            .fffffffffffff.
            ..fff2fffffff..
            ..fff2fffffff..
            ..fff2fffffff..
            ..fffff2fffff..
            ..fc.cdcdc.cf..
            ....c.cdc.c....
            ...fffffffff...
            ..fffffffffff..
            .fffffffffffff.
            fffffffffffffff
            fff.fffffff.fff
            fff.fffffff.fff
            .d..fffffff..d.
            fff.fffffff.fff
            fff..fffff..fff
            fff...ddd...fff
            .d..fffffff..d.
            fffffffffffffff
            fffffff.fffffff
            fffffff.fffffff
            fff.dd...dd.fff
            fffffff.fffffff
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ....dd...dd....
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            ...ffff.ffff...
            `],
        50,
        true
        )
    }
    if (an1_move == 4 && room_type > 1) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            `],
        500,
        true
        )
    }
})
game.onUpdateInterval(2000, function () {
    if (off == false) {
        statusbar.value += -5
    }
})
game.onUpdateInterval(2000, function () {
    if (off == false) {
        if (randint(1, 5) == 3) {
            an1_move += 1
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (room_type == 0) {
        statusbar2.value += 5
    }
})
game.onUpdateInterval(1000, function () {
    if (off == true) {
        if (randint(1, 5) == 3) {
            an1_move += 1
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (off == false) {
        if (randint(1, 10) == 2) {
            an2_move += 1
        }
    }
})
game.onUpdateInterval(10, function () {
    if (an2_move == 4 && room_type == 0) {
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            `)
    }
    if (an2_move == 3 && room_type == 0) {
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbff9ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444b444444fffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444b444444fffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444d444444dffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444d444444dffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444b444444fffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444b444444fffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            `)
    }
    if (an1_move <= 2 && an2_move <= 2 && room_type == 0) {
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            `)
    }
    if (an1_move == 3 && room_type == 0) {
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffffff2ffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            `)
    }
    if (an1_move == 3 && (an2_move == 3 && room_type == 0)) {
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbff9ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffff2fff2ffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffffff2ffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444b444444fffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444b444444fffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444d444444dffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444d444444dffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444b444444fffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            4444444b444444fffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            ccccccccfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccccccccccccccccccccccccc
            cccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            cccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccc
            `)
    }
})
game.onUpdateInterval(10, function () {
    if (room_type > 0) {
        mask = false
        animation.runImageAnimation(
        mySprite5,
        [img`
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            `],
        500,
        false
        )
    }
})
forever(function () {
    if (death == 0) {
        if (room_type == 0 && poke == 1) {
            animation.runImageAnimation(
            mySprite6,
            [img`
                . e e e e e . 
                e e e e e e e 
                e e e e d d e 
                e f e e d f e 
                e d f d f d e 
                e f d d d f e 
                e e c c c e e 
                c c a a a c c 
                a a c c c a a 
                . 8 8 a 8 8 . 
                . 8 8 . 8 8 . 
                `],
            500,
            false
            )
        }
        if (room_type == 0 && poke == 0) {
            animation.runImageAnimation(
            mySprite6,
            [img`
                . e e e e e . 
                e e e e e e e 
                e e e e d d e 
                e 1 e e 8 1 e 
                e 1 8 d 8 1 e 
                e d d d d d e 
                e e c c c e e 
                c c a a a c c 
                a a c c c a a 
                . 8 8 a 8 8 . 
                . 8 8 . 8 8 . 
                `],
            500,
            false
            )
        }
        if (room_type > 0) {
            animation.runImageAnimation(
            mySprite6,
            [img`
                . . . . . . . 
                . . . . . . . 
                . . . . . . . 
                . . . . . . . 
                . . . . . . . 
                . . . . . . . 
                . . . . . . . 
                . . . . . . . 
                . . . . . . . 
                . . . . . . . 
                . . . . . . . 
                `],
            500,
            false
            )
        }
    } else {
        animation.runImageAnimation(
        mySprite6,
        [img`
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            `],
        500,
        false
        )
    }
})
forever(function () {
    if (mask == false) {
        if (an1_move >= 5) {
            statusbar3.value = 0
        }
    }
})
forever(function () {
    if (death == 1) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    }
})
forever(function () {
    if (event == 0) {
        if (poke_time >= 130) {
            event = 1
            sleepy = 1
            an1_move = -99999999
            an2_move = -99999999
            mySprite6.sayText("congratulations!")
            pause(1000)
            mySprite6.sayText("you've hit my limit.")
            pause(1500)
            mySprite6.sayText("now if you feel funny don't worry,")
            pause(2000)
            mySprite6.sayText("it's just poison.")
            color.FadeToBlack.startScreenEffect(6000)
            color.RotatePalette.startScreenEffect(6000)
            pause(1500)
            mySprite6.sayText("night night.", 4000, false)
        }
    }
})
forever(function () {
    if (time == 21) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            `],
        500,
        true
        )
    }
    if (time == 21) {
        if (room_type == 0) {
            statusbar.value = 100
            animation.runImageAnimation(
            mySprite,
            [img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f c c f f c c c f f c c f 1 
                1 f c c c c c 2 c c c c c f 1 
                1 f c c f f c c c f f c c f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `,img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f c c c f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f f f f f f c f f f f f f 1 
                1 f c c f f c c c f f c c f 1 
                1 f c c c c c c c c c c c f 1 
                1 f c c f f c c c f f c c f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `],
            500,
            true
            )
            room = 0
            room_type = 0
            sleepy = 1
            animation.runImageAnimation(
            mySprite3,
            [img`
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ....ccccccc....
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ....ccccccc....
                ...ccccccccc...
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..cccccccccc5..
                ..ccccccccccd..
                22ccccc.ccccd..
                222.ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                `,img`
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ...............
                ....ccccccc....
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ...ccccccccc...
                ....ccccccc....
                .....ccccc.....
                ...ccccccccc...
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..ccccccccccc..
                ..cccccccccc5..
                ..ccccc.ccccd..
                22ccccc.ccccd..
                222.ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                ....ccc.ccc....
                `],
            1000,
            true
            )
        }
    }
})
game.onUpdateInterval(500, function () {
    if (off == true) {
        if (randint(1, 10) == 2) {
            an2_move += 1
        }
    }
})
game.onUpdateInterval(200, function () {
    if (off == true) {
        statusbar.value += 5
    }
})
game.onUpdateInterval(8000, function () {
    time += 1
})
