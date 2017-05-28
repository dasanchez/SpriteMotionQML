import QtQuick 2.8
import QtQuick.Window 2.2

Window {
    // custom counter property for space presses
    property real rotationAngle: 90
    property real xPosition: 200
    property real yPosition: 200

    visible: true
    width: 600
    height: 600
    title: qsTr("Sprite Motion")
    color: "black"
    SpriteItem {
        x: xPosition
        y: yPosition
        focus: true
        Keys.onUpPressed: {
            moveY(1)
        }
        Keys.onDownPressed: {
            moveY(-1)
        }
        Keys.onRightPressed: {
            rotateStep(-5)
        }
        Keys.onLeftPressed: {
            rotateStep(5)
        }
        transform: Rotation { origin.x: 60; origin.y: 60; angle: 90-rotationAngle }

        function rotateStep(step) {
            rotationAngle += step
            if(rotationAngle>360)
                rotationAngle-=360
            if(rotationAngle<-360)
                rotationAngle+=360
            console.log("Rotation Angle: ", rotationAngle)
        }
        function moveY(step) {
            xPosition += Math.sign(step)*Math.cos(-rotationAngle*Math.PI/180)
            yPosition += Math.sign(step)*Math.sin(-rotationAngle*Math.PI/180)
            console.log("x: ", xPosition, "y: ", yPosition)
        }
    }
}

