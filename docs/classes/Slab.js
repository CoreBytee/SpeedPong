class Slab {
    constructor(Main, Side, ButtonUp, ButtonDown) {
        this.Main = Main
        this.Side = Side
        this.Width = 20
        this.Height = 200

        this.ButtonUp = ButtonUp
        this.ButtonDown = ButtonDown
        
        this.Y = Main.WindowSizeY / 2 - this.Height / 2
        if (Side == 1) {
            this.X = Main.WindowSizeX - 20
        } else {
            this.X = 0
        }

        this.CollisionX = (this.Side == -1 ? this.Width : 0) + this.X
        console.log(this.CollisionX, this.X)
    }

    Draw() {
        fill(255)
        stroke(0)
        if (keyIsDown(this.ButtonUp)) {
            this.Y -= 10
        } else if (keyIsDown(this.ButtonDown)) {
            this.Y += 10
        }

        this.Y = Clamp(this.Y, 0, this.Main.WindowSizeY - this.Height)

        rect(this.X, this.Y, this.Width, this.Height)
        fill(255)

        stroke(255)
        strokeWeight(5)
        line(this.CollisionX, this.Y, this.CollisionX, this.Y + this.Height)
        
    }

    IsColliding(PositionX, PositionY) {
        if (this.Side == -1) { // left side
            if (PositionX < this.CollisionX) {
                if (PositionY > this.Y && PositionY < this.Y + this.Height) {
                    return -1
                }
            }
        } else { // right side
            if (PositionX > this.CollisionX) {
                if (PositionY > this.Y && PositionY < this.Y + this.Height) {
                    return 1
                }
            }
        }
        return false
    }
}