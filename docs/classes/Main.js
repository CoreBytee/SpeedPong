class Main {
    constructor() {
        this.WindowSizeX = window.innerWidth
        this.WindowSizeY = window.innerHeight

        this.LeftSlab = new Slab(this, -1, 87, 83)
        this.RightSlab = new Slab(this, 1, 38, 40)

        this.Ball = new Ball(this)
    }

    Setup() {
        console.log("a")
        createCanvas(this.WindowSizeX, this.WindowSizeY)
    }

    Draw() {
        background(0)

        this.LeftSlab.Draw()
        this.RightSlab.Draw()
        this.Ball.Draw()
    }

    GetSlabs() {
        return [
            this.LeftSlab,
            this.RightSlab
        ]
    }
}