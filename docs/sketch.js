const MainClass = new Main()

function Clamp(Value, Min, Max) {
    return Math.min(Math.max(Value, Min), Max)
}

function setup() {
    MainClass.Setup()
}

function draw() {
    MainClass.Draw()
}