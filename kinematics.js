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

function pollGamepad() {
    // Mode 1: Connect left joystick to left track, right joystick to right track
    //    trackMotion(-3*gamepad.axisLeftY,-3*gamepad.axisRightY)
    // Mode 2: Connect left joystick to forward/backward, right joystick to direction
    var ltrack, rtrack, rotate
    // Start with linear motion
    ltrack = gamepad.axisLeftY
    rtrack = gamepad.axisLeftY
    // Compensate for rotation
    if(Math.abs(gamepad.axisRightX)>0)
    {
        rotate = Math.abs(gamepad.axisRightX) - Math.abs(gamepad.axisLeftY/4)
        if(gamepad.axisRightX>0) {
            ltrack -= rotate
            rtrack += rotate
        }
        else {
            ltrack += rotate
            rtrack -= rotate
        }
        if(ltrack>1)
            ltrack=1
        if(ltrack<-1)
            ltrack=-1
        if(rtrack>1)
            rtrack=1
        if(rtrack<-1)
            rtrack=-1
    }
    trackMotion(-3*ltrack,-3*rtrack)
    console.log(gamepad.axisLeftY, gamepad.axisRightX, ltrack, rtrack)
}
