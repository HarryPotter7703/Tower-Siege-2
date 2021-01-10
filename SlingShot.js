class SlingShot{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.08,
          length: 5
      }
      this.pointB = pointB
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
  }
fly(){
    this.sling.bodyA = null
}
attach(bodyA){
  this.sling.bodyA = bodyA
}
  display(){
      
      if(this.sling.bodyA){
        
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;

      strokeWeight(5);
      stroke('cyan')
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
  }
  
}