noseX = ""
noseY = ""
function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(550, 500)
    canvas.position(1000, 100)
    video.position(100, 100) 
    
}
function draw() {
       background(70,98,67) 
       fill("purple")
       stroke("yellow")
       
}

function modelLoaded() {
    console.log('model has loaded successfully')
    poseNet.on("pose", gotPoses)
}
function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
}
}
