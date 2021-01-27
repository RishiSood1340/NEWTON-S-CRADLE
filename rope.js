constructor (body1, body2, offsetX, offsetY)

{

this.offsetX=offsetX
this.offsetY=offsetY
var options={
bodyA: body1,
bodyB: body2,
pointB:{x:this.offsetX, y:this.offsetY}
ropel=new rope(bobObject1.body, roofObject.body, -bobDiameter*2)
rope2=new rope(bobObject2.body, roofObject.body, -bobDiameter*2)
rope3=new rope(bobObject3.body, roofObject.body, -bobDiameter*2)
rope4=new rope(bobObject4.body, roofObject.body, -bobDiameter*2)
rope5=new rope(bobObject5.body, roofObject.body, -bobDiameter*2)
}

this.rope=Constraint.create(options)
World.add(world, this.rope)
