class Polygon{
  constructor(x,y){
    var options={
      isStatic:false,
      density:1.0,
      restitution:0.2
    }
    this.body = Bodies.circle(x,y,10,options);
    this.image = loadImage("polygon.png")
    World.add(world, this.body);
  }
  display(){
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 60,60)
  }
}