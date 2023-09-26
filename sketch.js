let maxDiam = 20
let minDiam = 5
let number = 40

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background("blue")
  fill("yellow")
  randomSeed(3)
  
  for (let xpos = 0; xpos <= width; xpos +=random(number)){
    for (let ypos = 0; ypos <= height; ypos += random(number*3)){
      for (let dim = maxDiam; dim > 4; dim -= 2){
        let mDiam = random(minDiam, maxDiam)
        ellipse(xpos, ypos, mDiam, mDiam)

      }
        
    }
    

  }





}
