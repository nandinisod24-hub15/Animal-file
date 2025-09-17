class Animal {
  constructor(br="human",name="human",lang="noisy"){
    this.breed=br;
    this.name=name;
    this.language=lang;
  }
  talk(){
    print(this.language);
    text(this.language,150,200);
  }
}

function setup(){
  createCanvas(400,400);
  background(220);
  
  let elephant=new Animal("Elephant","Appu","Trumpeeettt!!!");
  elephant.talk();
}