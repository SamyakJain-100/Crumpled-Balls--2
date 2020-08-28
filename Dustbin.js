class Dustbin {
    constructor(x,y, width, height ,angle){
        
        var options ={
        isStatic: true 
         }
         this.image = loadImage("dustbingreen.png");
    this.rect1 = Bodies.rectangle(x,y,width,height,options);
    this.width =width ;
    this.height = height;
   
    World.add(world, this.rect1);
    
    this.rect2 = Bodies.rectangle(x,y,width,height,options);
    this.width = width ;
    this.height = height;
    World.add(world, this.rect2);

    this.rect3 = Bodies.rectangle(x,y,width,height,options);
    this.width =width ;
    this.height = height;
   
    World.add(world, this.rect3);

        }
    display(){
    
    var pos1 = this.rect1.position ;
    var angle1 = this.rect1.angle
    push();
    translate(pos1.x , pos1.y);
    rotate(angle1)
    
    rectMode(CENTER);
    //fill("white");
    //rect(0,0,this.width, this.height);
    pop();
   
    var pos2 = this.rect2.position ;
    var angle2 = this.rect2.angle
    push();
    translate(pos2.x , pos2.y);
    rotate(angle2)
    rectMode(CENTER);
    
    //fill("white");
    //rect(0,0,this.width, this.height);
    pop();

    var pos3 = this.rect3.position ;
    var angle3= this.rect3.angle
    push();
    translate(pos3.x , pos3.y);
    rotate(angle3)
    //fill("white");
    
    imageMode(CENTER)
    image(this.image ,0,0,100, 100);
    pop();
        }
    };