class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length : 1.5
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA =null;
    }
    attach(x){
        this.sling.bodyA = x;
    }

    display(){

        strokeWeight(4);
        stroke("white");
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}