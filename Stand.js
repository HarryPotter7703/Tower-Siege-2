class Stand{
  constructor(x,y, width, height){
    var options={
      isStatic:true
    }
    this.body = Bodies.rectangle(x,y-25, width,height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    fill(255);
    rect(pos.x-85, pos.y+15, this.width, this.height);
  }
}