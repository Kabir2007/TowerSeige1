class Tower{

constructor(x,y){

this.body = Bodies.rectangle(x,y,40,40);
World.add(world,this.body);
//this.Visibility = 255;

}

display(){

//if(this.body.speed < 5){
var angle = this.body.angle

push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
rectMode(CENTER);
fill("brown");
rect(0,0,40,40);
pop();;
       
//}
       
//else{
        

//push();
//this.Visiblity = this.Visiblity - 5;
//tint(255,this.Visiblity);
//rect(0,0, 40, 40);
//pop();

//World.remove(world, this.body);

//}
       
}

}
