class Ball {
    constructor(Main) {
        this.Main = Main	

        this.Size = 50

        this.PositionX = Main.WindowSizeX / 2 - this.Size / 2
        this.PositionY = Main.WindowSizeY / 2 - this.Size / 2

        this.LeftSideX
        this.LeftSideY
        this.RightSideX
        this.RightSideY

        this.Speed = 1
        this.MotionX = 3
        this.MotionY = 2
    }

    Draw() {
        this.PositionX += this.MotionX * this.Speed
        this.PositionY += this.MotionY * this.Speed
        this.SidePositions()

        circle(this.PositionX, this.PositionY, this.Size)
        fill(255, 0, 0)
        circle(this.LeftSideX, this.LeftSideY, 5)
        circle(this.RightSideX, this.RightSideY, 5)

        this.MotionX = this.CheckSlabCollisions() * -3 || this.MotionX
        if (this.CheckSlabCollisions() != false) {
            this.Speed += 0.2
            console.log(this.Speed)
        }

        if (this.CheckSideCollisions()) {
            window.location.reload( )
        }

        if (this.CheckHorisontalCollisions()) {
            this.MotionY *= -1
        }

        if (keyIsDown(32)) {
            this.Speed += 0.1
        }

    }

    SidePositions() {
        this.LeftSideX = this.PositionX - this.Size / 2
        this.LeftSideY = this.PositionY

        this.RightSideX = this.PositionX + this.Size / 2
        this.RightSideY = this.PositionY
    }

    CheckSlabCollisions() {
        if (this.Main.LeftSlab.IsColliding(this.LeftSideX, this.LeftSideY)) {
            return -1
        } else if (this.Main.RightSlab.IsColliding(this.RightSideX, this.RightSideY)) {
            return 1
        }

        return false
    }

    CheckSideCollisions() {
        if (this.PositionX < -50) {
            return -1
        } else if (this.PositionX > this.Main.WindowSizeX + 50) {
            return 1
        }

        return false
    }

    CheckHorisontalCollisions() {
        if (this.PositionY < this.Size / 2 || this.PositionY > this.Main.WindowSizeY - this.Size / 2) {
            return true
        }

        return false
    }
}