class paper
{
    constructor()
    {
        var options = {
            isStatic: false,
            restitution: 0.01, 
            friction: 1,
            density: 1.2
         }
        this.x = 200;
        this.y = 670;
        this.image = loadImage("crumpledpaper.png")
        this.body = Bodies.circle(this.x, this.y,40/2, options);
        World.add(world, this.body)
    }
    display()
    {
        var posi = this.body.position;
        push()
        translate(posi.x, posi.y);
        imageMode(CENTER);
        image(this.image,0, 0, 40, 40);
        pop()
    }
}







