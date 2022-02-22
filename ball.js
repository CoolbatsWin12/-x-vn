class Ball{
    constructor(x,y,r){
        var option={
            restitution:0.5
        }
        this.body=Bodies.circle(x,y,r,option)
        World.add(world,this.body)
        this.r=r
    }
    display(){
        ellipseMode(RADIUS)
        fill("brown")
        ellipse(this.body.position.x,this.body.position.y,this.r)
    }
}