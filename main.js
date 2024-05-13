function setup(){
    canvas = createCanvas(900 , 500);
    canvas.position(560 , 100);
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    poseNet = ml5.poseNet(video, modelLoaded);
}
function draw() {
    background('#B7D8EA');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {
    if(results.length > 0)

{
    console.log(results);
}
}
