var table;
var p, q, e, r, t, n1, n2 = 0;
var fulltime = 1905.166*1000;
var timeaxis;

function preload() {
  table = loadTable("p01.csv", "csv", "header");
}

function setup() {
  createCanvas(fulltime/2000 + 1, 402);
  //bg = loadImage("joy2.png");
  //bg.resize(fulltime,400);
  
  
}

function draw() {
  background(255);
  for (i = 2; i<50; i++) {
   var x1 = table.get(i, "curiosity.onset")/2000;
   var x2 = table.get(i, "curiosity.offset")/2000;
   var curiosity = table.get(i, "curiosity.type");
   if (curiosity == 'q') {fill(192, 57, 43); q++;}
   //if (curiosity == 'e') {fill(192, 57, 43); q++;}
   //if (curiosity == 'p') {fill(192, 57, 43); q++;}
   //if (curiosity == 'r') {fill(192, 57, 43); q++;}
   //if (curiosity == 't') {fill(192, 57, 43); q++;}
   //if (curiosity == 'n1') {fill(192, 57, 43); q++;}
   
   if (curiosity == 'e') {fill(52, 152, 219); e++;}
   if (curiosity == 'p') {fill(241, 196, 15); p++;}
   if (curiosity == 'r') {fill(46, 204, 113); r++;}
   if (curiosity == 't') {fill(155, 89, 182); t++;}
   if (curiosity == 'n1') {fill(241, 196, 15); n1++;}
   //else {fill(20,70,70);}
   noStroke();
   rect(x1, 0, x2-x1, 400);
   fill(51);
   //borders
   rect(1,0, 1, 400);
   rect (fulltime/2000, 0, 1, 400);
  

  }
  
  
}