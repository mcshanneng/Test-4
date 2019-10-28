
// Initialize the Image Classifier method with MobileNet
// Image analyzer
const analyzer = ml5.featureExtractor('MobileNet', modelLoaded);
const analyzer2 = ml5.featureExtractor('MobileNet', modelLoaded);
//Regression
  const classifier1 = analyzer.regression();
  const classifier2 = analyzer2.regression();

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');

}

let img;
// Drawing Space
let mX;
let mY;
let canvasX1;
let canvasX2;
let canvasY1;
let canvasY2;
// Inputs
let nameIn; //Name the image
let nameLoad //Load the image with this name
//Placeholders
let monName;
let monLoad;
// Buttons
let savImg;
let genMon;
let loadMon;

function preLoad(){

}

function setup(){
  createCanvas(1695, 824);
  //img= createImg(monName+".jpg")
  //Input for monster Name
  nameIn = createInput();
  nameIn.position(250, 115);
  //
  nameLoad= createInput();
  nameLoad.position(1050,115)
  //Button to Save image & run Classifier
  savImg = createButton('Save Image');
  savImg.position(440, 710);
  savImg.mousePressed(saveimg);
  //Button to Load image
  loadMon = createButton('Load Monster')
  loadMon.position(1290,710)
  loadMon.mousePressed(loadMonster);
  //
  genMon = createButton('Generate Monster Traits');
  genMon.position(1000, 710);
  genMon.mousePressed(classifyImg);
  // Button to clear 'Canvas'
  clBut = createButton('Clear');
  clBut.position(380, 710);
  clBut.mousePressed(clearSpace);
  //
    background(220);
    rect(width/40, height/6, 550,550);
    strokeWeight(2);
    line((width/2)-150,0,(width/2)-150,height)
};
function draw() {
  mX= mouseX;
  mY= mouseY;
  canvasX1= width/40;
  canvasX2= (width/40)+547;
  canvasY1= height/6;
  canvasY2= (height/6)+547;

  //Text that says
  noStroke();
  fill(255);

  if(mX> canvasX1+3){
    if(mX< canvasX2){
      if(mY> canvasY1+3){
        if(mY< canvasY2){
          fill(0)
          //ellipse(mouseX,mouseY,10,10);
          if (mouseIsPressed) {
            ellipse(mX, mY, 7, 7);
}

        }
      }
    }
  }


}
// Function to save the image
function saveimg(){
  let monsterDrawing = get(canvasX1, canvasY1, 550,550);
  monName = nameIn.value();
  save(monsterDrawing, monName+".jpg");
  console.log('Image Saved')
  //img = createImg(monName+".jpg");

}

function classifyImg(){
  // Make a prediction with a selected image
  //img = createImg(monName+".jpg");
  console.log("Classifying"+ img)
  classifier.predict(img, function(err, results) {
        console.log(results);
  });

}
// Function to Clear Canvas
function clearSpace(){
  rect(width/40, height/6, 550,550)

}
function loadMonster(){
  monLoad = nameLoad.value()
  img= createImg(monLoad+".jpg")
  img.position(850, height/6)
}
