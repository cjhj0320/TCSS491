class Robot {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./robot.png");

        this.animation = new Animator(this.spritesheet, 30, 40, 380, 430, 14, 0.1, 38, true, true);
    }

    update() {

    }

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, 300, 150, 1);
    }
}