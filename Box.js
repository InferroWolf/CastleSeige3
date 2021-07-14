class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  display(){
    if(this.body.speed>3){
      World.remove(world,this.body);
    if(this.remove===false){
      this.remove=true
    }
    }else{
      super.display();
    
  }
  }
}
