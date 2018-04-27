function setup(){
    createCanvas(1000,800);

}
function draw(){
//canvasbackground
background(88,185,227);
point(500,400);

push();
translate(0, mouseY);

//vynel
beginShape();
//black ellipse
strokeWeight(5);
stroke(72,72,72);
fill(0,0,0);
ellipse(525, 300, 400, 400);


//inner ellipse
fill(255,255,255);
ellipse(520,300,150,150);
noStroke();

//strokes

strokeWeight(1);
noFill();
stroke(255, 255, 255, 255)
 ellipse(525, 300, 350, 350, 0)
 ellipse(525, 300, 300, 300, 0)
 ellipse(525, 300, 200, 200, 0)
 endShape(CLOSE);
 pop();



//rectangle 
if(mouseY>200){
stroke(0, 0, 0,);
strokeWeight(10);
fill(39,5,55);
rect(300,300, 450, 350);

textSize(30);
noStroke();
fill(255);
text("Money Mondays", 400, 400);
}


// //triangle
// strokeWeight(1);

// fill(230,215,122);
// triangle(300, 300, 520, 650, 750, 300);



}