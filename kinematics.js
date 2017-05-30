function rotateStep(step) {
    rotationAngle += step
    if(rotationAngle>360)
        rotationAngle-=360
    if(rotationAngle<-360)
        rotationAngle+=360
}
function moveY(step) {
    xPosition += Math.sign(step)*Math.abs(step)*Math.cos(-rotationAngle*Math.PI/180)
    if(xPosition<0) xPosition=0
    if(xPosition>480) xPosition=480
    yPosition += Math.sign(step)*Math.abs(step)*Math.sin(-rotationAngle*Math.PI/180)
    if(yPosition<0) yPosition=0
    if(yPosition>480) yPosition=480
    console.log(yPosition)
}

function trackMotion(leftStep, rightStep) {
    var rotationStep;
    var linearStep;

    // Rotation
    // Rotation happens if there is a difference between right and left tracks
    rotationStep = Math.abs(rightStep-leftStep) // Sets magnitude
    if (leftStep>rightStep)
    {
        // Clockwise
        rotationStep *= -1 // Sets direction
    }
    rotateStep(rotationStep)

    // Linear motion
    if(leftStep*rightStep > 0)
    {
        // Linear motion only occurs when both tracks are moving in the same direction
        linearStep = Math.min(Math.abs(rightStep),Math.abs(leftStep)) // Sets magnitude
        linearStep *= Math.sign(rightStep) // Sets direction
        moveY(linearStep)
    }
}
