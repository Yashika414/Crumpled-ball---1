class Ground
{
  constructor() 
  {
    var features = {
        isStatic : true 
      
      }
      this.ground = Bodies.rectangle (400,700,800,10,features)
      World.add(world,this.ground)
  }
  display ()
  {
    rectMode(CENTER)
    rect(this.ground.position.x,this.ground.position.y,800,10)   
  }
}
