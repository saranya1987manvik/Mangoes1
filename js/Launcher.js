class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB; 
        this.bodyA=  bodyA; 
        this.launch = Constraint.create(options);
        World.add(world,this.launch);
    }
    attach(body){
        this.launch.bodyA = body;
    }
    
    fly(){
        this.launch.bodyA = null;
    }

    display(){
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;   
           
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            }
            
        }
    }
    