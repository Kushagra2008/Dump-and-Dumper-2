class ground
{
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        var option = 
        {
            isStatic: true
        }
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, option);
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        fill("brown");
        stroke(255);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}


