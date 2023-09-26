let maxDiam = 40
let minDiam = 5
let xnumber = 50
let ynumber = 60

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(255)
  fill(193,47,32)
  stroke(193,47,32)
  randomSeed(100)
  
  for (let xpos = 0; xpos <= width; xpos +=random(30,xnumber)){
    for (let ypos = -50; ypos <= height; ypos += random(30, ynumber*4)){
      
        let mDiam = random(minDiam, maxDiam)
        ellipse(xpos, ypos, mDiam, mDiam)

      
        
    }
    

  }





}

//for (let dim = maxDiam; dim > 28; dim -= 2){
