class Animal{
  constructor(br="human",name="Nandini",lang="Malayalam"){
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
  background(250,200,0);
  
  let sparrow= new Animal("Sparrow","Chiky","Chirp");
  sparrow.talk();
}